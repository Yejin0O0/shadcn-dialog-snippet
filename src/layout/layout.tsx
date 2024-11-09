import { Header } from "@/layout/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
