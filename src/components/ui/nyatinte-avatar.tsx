import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NyatinteAvatar() {
  return (
    <Avatar className="relative h-40 w-40 border-[6px] border-card shadow-2xl outline-2 outline-primary/50 transition-transform duration-500 group-hover:scale-[1.02] md:h-56 md:w-56">
      <AvatarImage
        alt="Nyatinte"
        src="https://avatars.githubusercontent.com/u/104000239?v=4"
      />
      <AvatarFallback>NT</AvatarFallback>
    </Avatar>
  );
}
