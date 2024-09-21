"use client";
import { User } from "@/types/User";
import React from "react";
import { Post } from "../types/Post";
import PostItem from "./PostItem";

interface PostListProps {
    posts: Post[];
    handleSave: (postId: number) => void;
    handleShare: (postId: number) => void;
    openVoteModal: (id: number, type: 1 | -1) => void;
    user?: User;
}

const PostList: React.FC<PostListProps> = ({
    posts,
    handleSave,
    handleShare,
    openVoteModal,
    user,
}) => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    post={post}
                    key={post.id}
                    handleSave={handleSave}
                    handleShare={handleShare}
                    openVoteModal={openVoteModal}
                    user={user}
                />
            ))}
        </div>
    );
};

export default PostList;
