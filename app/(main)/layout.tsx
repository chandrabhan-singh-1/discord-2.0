import NavigationSidebar from "@/components/navigation/nav-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="hidden z-20 md:flex flex-col h-full w-[72px] fixed inset-y-0 dark:bg-[#1E1F22] bg-foreground/10">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full w-full">{children}</main>
    </div>
  );
}
