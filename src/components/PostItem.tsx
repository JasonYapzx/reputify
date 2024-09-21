"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { User } from "@/types/User";
import { ArrowBigDown, ArrowBigUp, Bookmark, Share2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { users } from "../data/users";
import { Post } from "../types/Post";
interface PostItemProps {
    post: Post;
    handleSave: (postId: number) => void;
    handleShare: (postId: number) => void;
    openVoteModal: (id: number, type: 1 | -1) => void;
    user?: User;
}

function getUserObject(userId: string) {
    return users.find((user) => (user.id = userId));
}

const PostItem: React.FC<PostItemProps> = ({
    post,
    handleSave,
    handleShare,
    openVoteModal,
    user,
}) => {
    const [loading, setLoading] = useState(false);
    const [poster, setPoster] = useState<User>();

    useEffect(() => {
        console.log("Here");
        const poster: User | undefined = getUserObject(post.user_id);
        if (poster) {
            setPoster(poster);
        }
    }, []);
    return (
        <Card key={post.id} className="mb-6">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                    <AvatarImage src={poster?.avatarUrl} alt={poster?.name} />
                    <AvatarFallback>{poster?.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-sm text-muted-foreground">
                        by {poster?.name}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openVoteModal(post.id, 1)}
                    >
                        <ArrowBigUp
                            className={`mr-1 h-4 w-4 ${
                                user &&
                                user.votes[post.id] &&
                                user.votes[post.id].type == 1
                                    ? "fill-current"
                                    : ""
                            }`}
                        />
                        {post.upvotes}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openVoteModal(post.id, -1)}
                    >
                        <ArrowBigDown
                            className={`mr-1 h-4 w-4 ${
                                user &&
                                user.votes[post.id] &&
                                user.votes[post.id].type == -1
                                    ? "fill-current"
                                    : ""
                            }`}
                        />
                        {post.downvotes}
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant={"outline"}
                        size="sm"
                        onClick={() => handleSave(post.id)}
                    >
                        <Bookmark
                            className={`mr-1 h-4 w-4 ${
                                user && user?.saved.includes(post.id)
                                    ? "fill-current"
                                    : ""
                            }`}
                        />
                        {user && user?.saved.includes(post.id)
                            ? "Saved"
                            : "Save"}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(post.id)}
                    >
                        <Share2 className="mr-1 h-4 w-4" />
                        Share
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PostItem;
