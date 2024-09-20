// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Reputify.sol"; // Import the Reputify token contract

contract StakingContract is Ownable {
    struct Stake {
        int64 amount;
        bool isPositive; // true if the stake is positive, false if negative
        string postId; // Identifier for the post related to this stake
    }

    struct Post {
        address originalPoster; // Address of the original poster
        int64 totalStaked; // Total staked amount for this post
        int64 totalPositiveStake; // Total positive stake for this post
        int64 totalNegativeStake; // Total negative stake for this post
        address[] stakers; // Array of all stakers for this post
    }

    Reputify public token; // Instance of the Reputify token contract

    mapping(address => Stake) public stakes;
    mapping(string => Post) public posts; // Maps postId to its Post data

    event Staked(address indexed user, int64 amount, bool isPositive, string postId);
    event Unstaked(address indexed user, int64 amount, int64 reward);
    event RewardPaid(address indexed user, int64 reward);

    constructor(address tokenAddress, address initialOwner) Ownable(initialOwner) {
        token = Reputify(tokenAddress); // Initialize with the deployed Reputify token address
    }

    // Stake tokens with a postId
    function stake(int64 amount, bool isPositive, string memory postId) external {
        require(amount > 0, "Cannot stake less than 0 tokens");
        require(token.tokenAllowance(address(token), msg.sender, address(this)) >= uint64(amount), "Contract not approved to transfer tokens");

        Post storage post = posts[postId];

        // Transfer tokens from the user to this contract
        token.tokenTransfer(address(token), msg.sender, address(this), amount);

        // Update the user's stake
        stakes[msg.sender] = Stake(amount, isPositive, postId);

        // Update the post's total stake
        if (post.totalStaked == 0) {
            post.originalPoster = msg.sender; // Set the original poster if first stake
        }

        post.totalStaked += amount;
        post.stakers.push(msg.sender); // Track the staker

        if (isPositive) {
            post.totalPositiveStake += amount;
        } else {
            post.totalNegativeStake += amount;
        }

        emit Staked(msg.sender, amount, isPositive, postId);
    }

    // Unstake tokens and claim rewards
    function unstake(bool predictionOutcome, string memory postId) external {
        Stake memory userStake = stakes[msg.sender];
        Post storage post = posts[postId];

        require(userStake.amount > 0, "No stake found");
        require(keccak256(bytes(userStake.postId)) == keccak256(bytes(postId)), "Post ID mismatch");

        int64 reward = 0;

        if (predictionOutcome) {
            // Prediction is correct
            int64 commission = (userStake.amount * 5) / 100; // 5% commission for the original poster

            // Original poster receives their stake back and the commission
            token.tokenTransfer(address(token), address(this), post.originalPoster, userStake.amount + commission);

            // Distribute remaining tokens equally to all true stakes
            int64 remainingAmount = post.totalPositiveStake - commission;
            for (uint256 i = 0; i < post.stakers.length; i++) {
                address stakerAddress = post.stakers[i];
                Stake memory stakeInfo = stakes[stakerAddress];
                if (stakeInfo.isPositive) {
                    int64 stakerReward = (stakeInfo.amount * remainingAmount) / post.totalPositiveStake;
                    token.tokenTransfer(address(token), address(this), stakerAddress, stakerReward);
                    emit RewardPaid(stakerAddress, stakerReward);
                }
            }
        } else {
            // Prediction is incorrect

            // Distribute rewards to false stakers
            for (uint256 i = 0; i < post.stakers.length; i++) {
                address stakerAddress = post.stakers[i];
                Stake memory stakeInfo = stakes[stakerAddress];
                if (!stakeInfo.isPositive) {
                    int64 stakerReward = (stakeInfo.amount * post.totalNegativeStake) / post.totalNegativeStake;
                    token.tokenTransfer(address(token), address(this), stakerAddress, stakerReward);
                    emit RewardPaid(stakerAddress, stakerReward);
                }
            }
        }

        // Reset the user's stake
        if (userStake.isPositive) {
            post.totalPositiveStake -= userStake.amount;
        } else {
            post.totalNegativeStake -= userStake.amount;
        }

        delete stakes[msg.sender]; // Clear the user's stake
        emit Unstaked(msg.sender, userStake.amount, reward);
    }
}
