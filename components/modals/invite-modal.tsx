"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useOrigin } from "@/hooks/use-origin";
import axios from "axios";
import { useRouter } from "next/navigation";

export const InviteModal = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { isOpen, type, data, onOpen, onClose } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);

      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-center">
            Send this below link to invite new members.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-3">
          <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Server Invite Link
          </Label>
          <div className="flex items-center mt-2">
            <Input
              disabled={isLoading}
              value={inviteUrl}
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 rounded-r-none"
            />
            <Button
              onClick={onCopy}
              size={"icon"}
              disabled={isLoading}
              className="rounded-l-none dark:bg-zinc-300/20"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <Button
            onClick={onNew}
            disabled={isLoading}
            variant={"link"}
            size={"sm"}
            className="text-xs text-zinc-500 mt-4"
          >
            Generate a new link
            <RefreshCw className="w-3.5 h-3.5 ml-1.5 mt-0.5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
