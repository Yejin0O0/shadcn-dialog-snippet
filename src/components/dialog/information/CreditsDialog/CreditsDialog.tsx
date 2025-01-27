import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { ExpandIcon, UserPlus, Users, XIcon } from "lucide-react";
import { useState } from "react";

interface CreditsDialogProps {
  type: "fullScreen" | "card";
}

interface RenderCreditsSectionProps extends CreditsDialogProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SCALE = 0.45;

function RenderCreditsSection(props: RenderCreditsSectionProps) {
  const { type, setIsOpen } = props;
  return (
    <div className="w-full flex">
      {type === "card" && setIsOpen && (
        <div className="absolute right-4 top-4 cursor-pointer z-10">
          <XIcon className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
      )}
      <div className="text-center relative">
        <h2 className="text-xl font-semibold">Your account balance</h2>
        <p className="text-sm text-gray-500 mt-1">
          Credits let you create decks using AI and use AI editing features.
          They're tied to your account email.
        </p>
        <div className="text-3xl font-bold text-gray-800 mt-4">
          💰 400 credits
        </div>
      </div>
    </div>
  );
}

function RenderAccordion() {
  return (
    <Accordion type="single" collapsible className="mt-6 border-t">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How many credits does it cost to use AI?
        </AccordionTrigger>
        <AccordionContent>
          Using AI costs approximately 10 credits per request.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I earn more credits?</AccordionTrigger>
        <AccordionContent>
          Earn credits by inviting friends or teammates to sign up for
          Application.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I buy credits?</AccordionTrigger>
        <AccordionContent>
          Yes, credits can be purchased in the Application settings.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function RenderReferralSection() {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://shadcn-dialog-snippet.vercel.app");
    toast({
      title: "Link Copied",
      description: "Referral link copied to clipboard!",
    });
  };

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700">Earn more credits</h3>
      <Tabs
        defaultValue="refer"
        className="mt-4 w-full flex justify-center items-center flex-col"
      >
        <TabsList className="flex gap-4 justify-center w-fit p-1 h-fit">
          <TabsTrigger
            value="refer"
            className="text-sm flex items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <Users className="w-4 h-4" /> Refer a friend
          </TabsTrigger>
          <TabsTrigger
            value="invite"
            className="text-sm flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <UserPlus className="w-4 h-4" /> Invite a teammate
          </TabsTrigger>
        </TabsList>
        <TabsContent value="refer" className="mt-4 text-sm text-gray-700">
          <p>
            Share your referral link and earn credits for each friend who signs
            up.
          </p>
        </TabsContent>
        <TabsContent value="invite" className="mt-4 text-sm text-gray-700">
          Invite your teammates to collaborate and earn bonus credits.
        </TabsContent>
      </Tabs>
      <div className="mt-4 flex items-center gap-2">
        <Input
          value="https://shadcn-dialog-snippet.vercel.app/"
          disabled
          className="flex-1 border px-2 py-1 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
        />
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy referral link
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Give 200 credits and earn 200 credits for each new referral who signs up
        for Application.
      </p>
    </div>
  );
}

export function CreditsDialog({ type }: CreditsDialogProps) {
  const [isOpen, setIsOpen] = useState(true);
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
        <DialogContent className="max-w-lg mx-auto rounded-lg bg-white p-6 shadow-lg">
          <RenderCreditsSection type="fullScreen" />
          <RenderReferralSection />
          <RenderAccordion />
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
          Credits information
        </Button>
        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full bg-white p-6 rounded-lg shadow-lg"
          >
            <RenderCreditsSection type="card" setIsOpen={setIsOpen} />
            <RenderReferralSection />
            <RenderAccordion />
          </div>
        )}
      </div>
    );
  }

  return null;
}
