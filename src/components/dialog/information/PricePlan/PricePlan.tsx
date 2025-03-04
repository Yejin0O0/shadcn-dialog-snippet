import CommonDialog from "@/components/common/CommonDialog";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  InlineDialogHeader,
  InlineDialogTitle,
} from "@/components/custom-ui/InlineDialog";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

interface PricePlanProps {
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

export default function PricePlan({ type }: PricePlanProps) {
  const [selected, setSelected] = useState("Free");

  const DialogHeaderComponent =
    type === "fullScreen" ? DialogHeader : InlineDialogHeader;
  const DialogTitleComponent =
    type === "fullScreen" ? DialogTitle : InlineDialogTitle;

  return (
    <CommonDialog
      type={type}
      title="Price Plan"
      scale={SCALE}
      contentStyleClass="sm:max-w-[450px] rounded-lg shadow-lg p-8 bg-white"
    >
      <>
        <DialogHeaderComponent>
          <DialogTitleComponent>Price Plan</DialogTitleComponent>
        </DialogHeaderComponent>
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
      </>
    </CommonDialog>
  );
}
