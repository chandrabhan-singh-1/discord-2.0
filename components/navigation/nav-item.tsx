"use client";

import { cn } from "@/lib/utils";
import ActionTooltip from "../action-tooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export default function NavigationItem({
  id,
  name,
  imageUrl,
}: NavigationItemProps) {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        type="button"
        onClick={onClick}
        className="group relative flex items-center"
      >
        <div
          className={cn(
            "absolute w-[4px] rounded-r-full transition-all bg-primary left-0",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[14px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[14px]"
          )}
        >
          <Image
            fill
            sizes="inherit"
            priority
            src={imageUrl}
            alt={`${name} image`}
          />
        </div>
      </button>
    </ActionTooltip>
  );
}
