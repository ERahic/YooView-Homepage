import Image from "next/image";

type VideoProps = {
id: string;
title: string;
channel: {
    id: string;
    name: string;
    profileUrl: string;
};
views: number;
postedAt: Date;
duration: number;
thumbnailUrl: string;
videoUrl: string;
};

export function Video({
id,
title,
channel,
views,
postedAt,
duration,
thumbnailUrl,
videoUrl,
}: VideoProps) {
return (
    <div className="flex flex-col gap-2">
    {" "}
    {/*for video being on top and having views, postedAt, title and profileUrl at bottom*/}
    <a href={`/watch?v=${id}`} className="relative aspect-video">
        <Image
        src={thumbnailUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="block rounded-xl max-w-full"
        />
        {/*time stamp on bottom right corner of video*/}
        <div className=" absolute bottom-1 right-1 bg-fade-dark text-fade text-sm px-0.5 rounded">
        {duration}
        </div>
    </a>
    </div>
);
}
