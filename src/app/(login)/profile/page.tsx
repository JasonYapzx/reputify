"use client";
import { useWalletAddress } from "@/components/hooks/useWalletAddress";
import PostList from "@/components/PostList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";
import { posts as initialPosts } from "../../../data/posts";
import { users } from "../../../data/users";
import { User } from "../../../types/User";

const ProfilePage = () => {
    const [user, setUser] = useState<User>();
    const walletId = useWalletAddress();
    const [activeTab, setActiveTab] = useState("posts");
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [stakes, setStakes] = useState<Post[]>([]);

    function getUserObject(userId: string) {
        return users.find((user) => user.id == userId);
    }

    useEffect(() => {
        if (walletId) {
            setUser(getUserObject(walletId));
        }
    }, [walletId]);

    useEffect(() => {
        setUserPosts(initialPosts.filter((post) => post.user_id == walletId));
    }, [walletId]);

    useEffect(() => {
        if (user && user.votes) {
            setStakes(initialPosts.filter((post) => post.id in user?.votes));
        } else {
            setStakes([]);
        }
    }, [walletId, user]);

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
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                        <AvatarFallback>
                            {user?.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-bold">{user?.name}</h1>
                    </div>
                </div>

                <Tabs defaultValue="posts" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="stakes">Stakes</TabsTrigger>
                    </TabsList>
                    <TabsContent value="posts">
                        <h2 className="mb-4 text-xl font-semibold">My Posts</h2>
                        <PostList
                            posts={userPosts}
                            handleShare={handleShare}
                            handleSave={handleSave}
                            owner
                            user={user}
                        />
                    </TabsContent>
                    <TabsContent value="stakes">
                        <h2 className="mb-4 text-xl font-semibold">
                            My Stakes
                        </h2>
                        <PostList
                            posts={stakes}
                            handleShare={handleShare}
                            handleSave={handleSave}
                            user={user}
                        />
                    </TabsContent>
                </Tabs>
            </div>
            {/* <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Someone&apos;s Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-row space-x-2">
                            <h2>{user?.name}</h2>
                            <p>
                                <strong>Email:</strong> {user?.email}
                            </p>
                            <p>{user?.bio}</p>
                        </div>
                    </div>
                </CardContent>
            </Card> */}
        </div>
    );
};

export default ProfilePage;
