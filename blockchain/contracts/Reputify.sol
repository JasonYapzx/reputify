// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./HederaResponseCodes.sol";
import "./HederaTokenService.sol";


contract Reputify is HederaTokenService {

    function tokenAssociate(address sender, address tokenAddress) external {
        int response = HederaTokenService.associateToken(sender, tokenAddress);

        if (response != HederaResponseCodes.SUCCESS) {
            revert ("Associate Failed");
        }
    }

    function tokenTransfer(address tokenId, address fromAccountId , address toAccountId , int64 tokenAmount) external {
        int response = HederaTokenService.transferToken(tokenId, fromAccountId, toAccountId, tokenAmount);

        if (response != HederaResponseCodes.SUCCESS) {
            revert ("Transfer Failed");
        }
    }

    function tokenDissociate(address sender, address tokenAddress) external {
        int response = HederaTokenService.dissociateToken(sender, tokenAddress);

        if (response != HederaResponseCodes.SUCCESS) {
            revert ("Dissociate Failed");
        }
    }

    function tokenAllowance(address sender, address tokenAddress, address contractAddress) external returns (uint256 allowance) {
        (int response, uint256 amount) = HederaTokenService.allowance(tokenAddress, sender, contractAddress);

        if (response != HederaResponseCodes.SUCCESS) {
            revert("Allowance Failed");
        }

        return amount; 
    }
}