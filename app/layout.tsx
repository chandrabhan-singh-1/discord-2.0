import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Open_Sans } from "next/font/google";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import ModalPorivder from "@/components/providers/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";

export const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-white dark:bg-[#313338] font-sans antialiased w-full",
            fontSans.variable
          )}
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            storageKey="dicord-theme"
            enableSystem
          >
            <SocketProvider>
              <ModalPorivder />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
            <Toaster theme={"light"} />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
