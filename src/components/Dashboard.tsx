"use client";
import { useWalletAddress } from "@/components/hooks/useWalletAddress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import { posts as initialPosts } from "@/data/posts";
import { users } from "@/data/users";
import PostFormDialog from "./PostFormDialog";


const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [user, setUser] = useState<User>();
  const walletId = useWalletAddress();
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [currentVote, setCurrentVote] = useState<{
    id: number;
    type: 1 | -1;
  } | null>(null);
  const [stakeAmount, setStakeAmount] = useState<number>(0);

  const openVoteModal = (id: number, type: 1 | -1) => {
    if (user && id in user.votes) {
      return;
    }
    setCurrentVote({ id, type });
    setIsVoteModalOpen(true);
  };

  function getUserObject(userId: string) {
    return users.find((user) => user.id == userId);
  }

  useEffect(() => {
    if (walletId) {
      setUser(getUserObject(walletId));
    }
  }, [walletId]);


  const handleVote = () => {
    if (currentVote && stakeAmount) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === currentVote.id
            ? {
              ...post,
              upvotes:
                currentVote.type === 1
                  ? post.upvotes + 1
                  : post.upvotes,
              downvotes:
                currentVote.type === -1
                  ? post.downvotes + 1
                  : post.downvotes,
            }
            : post
        )
      );
      setIsVoteModalOpen(false);
      setStakeAmount(0);
    }

    // Update user votes
    if (user && currentVote) {
      setUser((prevUser) => ({
        ...prevUser!, // TypeScript asserts prevUser is defined
        votes: {
          ...prevUser!.votes,
          [currentVote.id]: {
            type: currentVote.type,
            stake: stakeAmount,
          },
        },
      }));
    }
  };

  const handleSave = (id: number) => {
    setUser((prevUser) => {
      if (!prevUser) return prevUser; // In case prevUser is undefined

      // Check if the id is already in the saved list
      const isSaved = prevUser!.saved.includes(id);
      return {
        ...prevUser,
        saved: isSaved
          ? prevUser!.saved.filter((savedId) => savedId !== id) // Remove id if already saved
          : [...prevUser!.saved, id], // Add id if not saved
      };
    });
  };

  const handleShare = (id: number) => {
    // Implement sharing functionality here
    console.log(`Sharing post ${id}`);
  };

  return (
    <>
      <div className="my-0 p-5 space-y-4">
        <h1 className="font-bold text-xl">User Posts Dashboard</h1>
        <PostList
          posts={posts}
          handleSave={handleSave}
          handleShare={handleShare}
          openVoteModal={openVoteModal}
          user={user}
        />
        <PostFormDialog />
      </div>

      <Dialog open={isVoteModalOpen} onOpenChange={setIsVoteModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentVote?.type === 1 ? "Upvote" : "Downvote"}{" "}
              this post
            </DialogTitle>
            <DialogDescription>
              Enter the amount of Reputify coins you want to stake
              for this {currentVote?.type}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stake" className="text-right">
                Stake
              </Label>
              <Input
                id="stake"
                type="number"
                value={stakeAmount}
                onChange={(e) =>
                  setStakeAmount(parseInt(e.target.value, 10))
                }
                className="col-span-3"
                placeholder="Enter stake amount"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleVote}>
              Confirm Vote
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
