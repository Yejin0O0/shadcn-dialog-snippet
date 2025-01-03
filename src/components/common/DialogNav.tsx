import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const DIALOG_LINK = [
  {
    name: "interrupt",
    href: "#interrupt",
  },
  {
    name: "information",
    href: "#information",
  },
  {
    name: "form",
    href: "#form",
  },
];

function DialogNav() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className="flex items-center">
        {DIALOG_LINK.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            className={cn(
              "flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              hash === link.href
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}

export default DialogNav;
