import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckIcon, ExpandIcon, XIcon } from "lucide-react";
import { useState } from "react";

interface PricePlanDialogProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.8;

const PRICING_PLANS = [
  {
    name: "Free",
    price: 0,
    features: [
      "Search up to 10,000 messages",
      "Up to 10 apps/integrations",
      "Basic video calls",
      "2-person channel limit",
    ],
  },
  {
    name: "Standard",
    price: 16,
    features: [
      "Includes all features in Free +",
      "Unlimited message search",
      "Unlimited integrations",
      "Group video calls",
      "Advanced user permissions",
      "24/7 email support",
    ],
  },
  {
    name: "Plus",
    price: 20,
    features: [
      "Includes all features in Standard +",
      "Data encryption and security",
      "Dedicated support",
      "Customizable plans",
      "...",
    ],
  },
];

export function PricePlanDialog({ type }: PricePlanDialogProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("Free");
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  if (type === "fullScreen") {
    return (
      <Dialog onOpenChange={() => setIsTooltipAllowed(false)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              onMouseEnter={() => setIsTooltipAllowed(true)}
            >
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
                >
                  <ExpandIcon />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            {isTooltipAllowed && (
              <TooltipContent className="bg-black text-white">
                full screen dialog
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Price Plan</DialogTitle>
          </DialogHeader>
          <div className="min-h-[80px]">
            {PRICING_PLANS.map(
              (plan) =>
                selected === plan.name && (
                  <div
                    key={plan.name}
                    className="grid grid-cols-2 text-xs gap-2"
                  >
                    {plan.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-1">
                        <CheckIcon size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                ),
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-2 border rounded-md p-2 ${
                  selected === plan.name ? "border-black" : "border-primary-300"
                }`}
              >
                <div className="text-sm font-semibold">{plan.name}</div>
                <div className="flex gap-1">
                  <span className="flex gap-1">
                    <span className="text-sm">$</span>
                    <span className="text-4xl font-semibold">{plan.price}</span>
                  </span>
                  <div className="flex flex-col justify-center text-[7px] text-slate-400">
                    <span>/per user</span>
                    <span>/per month</span>
                  </div>
                </div>
                <Button
                  variant={`${selected === plan.name ? "default" : "secondary"}`}
                  size="sm"
                  className="text-[12px]"
                  onClick={() => setSelected(plan.name)}
                >
                  Select
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  if (type === "card") {
    return (
      <div
        className={`flex-1 ${
          isOpen
            ? "bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : ""
        }`}
      >
        <Button
          variant="outline"
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit"
          onClick={() => setIsOpen(true)}
        >
          Price Plan
        </Button>
        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
            }}
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold leading-none tracking-tight">
                Price Plan
              </h2>
              <XIcon
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
                size={16}
              />
            </div>
            <div className="min-h-[80px]">
              {PRICING_PLANS.map(
                (plan) =>
                  selected === plan.name && (
                    <div
                      key={plan.name}
                      className="grid grid-cols-2 text-xs gap-2"
                    >
                      {plan.features.map((feature) => (
                        <span key={feature} className="flex items-center gap-1">
                          <CheckIcon size={12} />
                          {feature}
                        </span>
                      ))}
                    </div>
                  ),
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col gap-2 border rounded-md p-2 ${
                    selected === plan.name
                      ? "border-black"
                      : "border-primary-300"
                  }`}
                >
                  <div className="text-sm font-semibold">{plan.name}</div>
                  <div className="flex gap-1">
                    <span className="flex gap-1">
                      <span className="text-sm">$</span>
                      <span className="text-4xl font-semibold">
                        {plan.price}
                      </span>
                    </span>
                    <div className="flex flex-col justify-center text-[7px] text-slate-400">
                      <span>/per user</span>
                      <span>/per month</span>
                    </div>
                  </div>
                  <Button
                    variant={`${selected === plan.name ? "default" : "secondary"}`}
                    size="sm"
                    className="text-[12px]"
                    onClick={() => setSelected(plan.name)}
                  >
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
