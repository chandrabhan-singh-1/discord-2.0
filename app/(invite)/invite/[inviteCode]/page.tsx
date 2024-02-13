import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { toast } from "sonner";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/login");
  }

  if (!params.inviteCode) {
    return redirect("/");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  const server = await db.server.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  } else {
    toast("Server not found!", {
      description: "Invalid Invite Code!",
      action: {
        label: "Go to Home",
        onClick: () => redirect("/"),
      },
    });
    return notFound();
  }
};

export default InviteCodePage;
