import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header/Header";

export default function Layout() {
  return (
    <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
      <Header />
      <main className="flex-1">
        <Outlet />
        <Toaster />
      </main>
    </div>
  );
}
