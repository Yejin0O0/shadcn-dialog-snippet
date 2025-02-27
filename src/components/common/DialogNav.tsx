import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import mixpanel from "@/lib/mixpanel";
import { EVENT_ID } from "@/static/mixpanelEventId";

const DIALOG_LINK = [
  {
    name: "interrupt",
    href: "#interrupt",
    mixpanelTracking: EVENT_ID.CLICKED_INTERRUPT,
  },
  {
    name: "information",
    href: "#information",
    mixpanelTracking: EVENT_ID.CLICKED_INFORMATION,
  },
  {
    name: "form",
    href: "#form",
    mixpanelTracking: EVENT_ID.CLICKED_FORM,
  },
];

const getTrackingEvent = (hash: string) => {
  return DIALOG_LINK.find((link) => link.href === hash)?.mixpanelTracking;
};

function DialogNav() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    const trackingEvent = getTrackingEvent(hash);

    if (trackingEvent) {
      // TODO: if we have more tracking events, change the code to the comment
      // mixpanel.track("Category Clicked", { category: trackingEvent });
      mixpanel.track(trackingEvent);
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
