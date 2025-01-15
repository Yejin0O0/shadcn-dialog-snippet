import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users } from "lucide-react";

export default function CreditsDialogBase() {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://shadcn-dialog-snippet.vercel.app");
    toast({
      title: "Link Copied",
      description: "Referral link copied to clipboard!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Credits information</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg bg-white p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Your account balance
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Credits let you create decks using AI and use AI editing features.
            They're tied to your account email.
          </DialogDescription>
        </DialogHeader>
        <div className="text-3xl font-bold text-gray-800 mt-4 text-center">
          💰 400 credits
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700">
            Earn more credits
          </h3>
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
                Share your referral link and earn credits for each friend who
                signs up.
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
            Give 200 credits and earn 200 credits for each new referral who
            signs up for Application.
          </p>
        </div>
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
      </DialogContent>
    </Dialog>
  );
}
