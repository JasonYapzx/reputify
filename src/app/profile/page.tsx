import PostList from "@/components/PostList";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { posts } from "../../data/posts";
import { users } from '../../data/users';
import { User } from '../../types/User';

const ProfilePage  = () => {
  const user: User = users[0];

  return (
    <div>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Someone&apos;s Profile</CardTitle>
      </CardHeader>
      <CardContent>
      <div>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        <div className="flex flex-row space-x-2">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p>{user.bio}</p>
        </div>
      </div>
          </CardContent></Card>
      <PostList posts={posts}/>
    </div>
  );
};


export default ProfilePage;