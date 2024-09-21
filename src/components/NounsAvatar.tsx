import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

// interface AvatarProps {
//   svg_content: string;
// }
// {svg_content}

export const NounsAvatar: React.FC = () => {
  return(
  <Avatar>
  <AvatarImage src="https://api.cloudnouns.com/v1/pfp" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>)
}