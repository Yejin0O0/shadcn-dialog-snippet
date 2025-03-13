import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import mixpanel from "@/lib/mixpanel";
import { cn } from "@/lib/utils";
import { EVENT_ID } from "@/static/eventId";
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

const EVENTID = EVENT_ID.CATEGORY_CLICKED;

const handleMixpanel = (name: string) => {
  mixpanel.track(EVENTID, {
    category: name,
  });
  console.log(name);
};

function DialogNav() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className="flex items-center">
        {DIALOG_LINK.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            onClick={() => handleMixpanel(link.name)}
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
