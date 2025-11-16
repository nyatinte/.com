import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

type PostCardProps = {
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  readingTime?: number;
};

export function PostCard({
  imageUrl = "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
  imageAlt = "Banner",
  imageWidth = 800,
  imageHeight = 450,
  title,
  description,
  date,
  tags = [],
  readingTime,
}: PostCardProps) {
  return (
    <Card className="max-w-md pt-0">
      <CardContent className="px-0">
        <Image
          alt={imageAlt}
          className="aspect-video h-70 rounded-t-xl object-cover"
          height={imageHeight}
          src={imageUrl}
          width={imageWidth}
        />
      </CardContent>

      {(tags.length > 0 || date || readingTime) && (
        <div className="flex flex-wrap items-center gap-2 px-6">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
            {date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                <span>{date}</span>
              </div>
            )}

            {readingTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                <span>{readingTime}分で読めます</span>
              </div>
            )}
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
        <Button>続きを読む</Button>
        <Button variant="outline">シェア</Button>
      </CardFooter>
    </Card>
  );
}
