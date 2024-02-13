import { currentProfile } from "@/lib/current-profile";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import NavigationAction from "./nav-action";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import NavigationItem from "./nav-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default async function NavigationSidebar() {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="space-y-4 items-center flex flex-col text-primary w-full h-full bg-[#E3E5E8] dark:bg-[#1E1F22]  py-3 ">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full h-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-2 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[40px] w-[40px]",
            },
          }}
        />
      </div>
    </div>
  );
}
