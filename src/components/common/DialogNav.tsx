import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const DIALOG_LINK = [
  {
    id: 1,
    name: "Interrupt",
    href: "#interrupt",
  },
  {
    id: 1,
    name: "Information",
    href: "#information",
  },
  {
    id: 1,
    name: "Form",
    href: "#form",
  },
];
function DialogNav({ className, ...props }: React.ComponentProps<"div">) {
  const { pathname } = useLocation();

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn("flex items-center", className)} {...props}>
        {DIALOG_LINK.map((link, index) => (
          <Link
            to={link.href}
            key={link.id}
            className={cn(
              "flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              pathname?.startsWith(link.href) ||
                (index === 0 && pathname === "/")
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
