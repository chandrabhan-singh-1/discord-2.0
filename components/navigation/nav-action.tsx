"use client";

import { LuPlus } from "react-icons/lu";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export default function NavigationAction() {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a Server">
        <button onClick={() =>onOpen("createServer")} type="button" className="group flex items-center">
          <div className="flex mt-2 mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[14px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <LuPlus
              className=" group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}
