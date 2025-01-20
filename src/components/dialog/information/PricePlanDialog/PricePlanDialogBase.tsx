import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

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

export function PricePlanDialogBase() {
  const [selected, setSelected] = useState("Free");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          Price Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] rounded-lg shadow-lg p-8 bg-white">
        <DialogHeader>
          <DialogTitle>Price Plan</DialogTitle>
        </DialogHeader>
        <div className="min-h-[80px]">
          {PRICING_PLANS.map(
            (plan) =>
              selected === plan.name && (
                <div key={plan.name} className="grid grid-cols-2 text-xs gap-2">
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
