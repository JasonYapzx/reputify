"use client";
import { User } from "@/types/User";
import React from "react";
import { Post } from "../types/Post";
import PostItem from "./PostItem";
import { ScrollArea } from "./ui/scroll-area";

interface PostListProps {
    posts: Post[];
    handleSave?: (postId: number) => void;
    handleShare?: (postId: number) => void;
    openVoteModal?: (id: number, type: 1 | -1) => void;
    user?: User;
    owner?: boolean;
}

const PostList: React.FC<PostListProps> = ({
    posts,
    handleSave,
    handleShare,
    openVoteModal,
    user,
    owner = false,
}) => {
    return (
        <ScrollArea className="h-[560px] rounded-md border">
            {posts.map((post) => (
                <PostItem
                    post={post}
                    key={post.id}
                    handleSave={handleSave}
                    handleShare={handleShare}
                    openVoteModal={openVoteModal}
                    user={user}
                    owner={owner}
                />
            ))}
        </ScrollArea>
    );
};

export default PostList;
