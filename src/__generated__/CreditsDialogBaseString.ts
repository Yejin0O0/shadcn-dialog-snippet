export const CreditsDialogBaseString =
  'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\nimport { Button } from "@/components/ui/button";\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog";\nimport { Input } from "@/components/ui/input";\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";\nimport { useToast } from "@/hooks/use-toast";\nimport { UserPlus, Users } from "lucide-react";\n\nexport default function CreditsDialogBase() {\n  const { toast } = useToast();\n\n  const handleCopy = () => {\n    navigator.clipboard.writeText("https://shadcn-dialog-snippet.vercel.app");\n    toast({\n      title: "Link Copied",\n      description: "Referral link copied to clipboard!",\n    });\n  };\n\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button variant="outline" className="w-fit">\n          Credits information\n        </Button>\n      </DialogTrigger>\n      <DialogContent className="max-w-md rounded-lg bg-white p-6 shadow-lg">\n        <DialogHeader>\n          <DialogTitle className="text-lg font-semibold text-center">\n            Your account balance\n          </DialogTitle>\n          <DialogDescription className="text-center text-sm text-gray-500">\n            Credits let you create decks using AI and use AI editing features.\n            They\'re tied to your account email.\n          </DialogDescription>\n        </DialogHeader>\n        <div className="text-3xl font-bold text-gray-800 mt-4 text-center">\n          💰 400 credits\n        </div>\n        <div className="mt-6">\n          <h3 className="text-sm font-medium text-gray-700">\n            Earn more credits\n          </h3>\n          <Tabs\n            defaultValue="refer"\n            className="mt-4 w-full flex justify-center items-center flex-col"\n          >\n            <TabsList className="flex gap-4 justify-center w-fit p-1 h-fit">\n              <TabsTrigger\n                value="refer"\n                className="text-sm flex items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200"\n              >\n                <Users className="w-4 h-4" /> Refer a friend\n              </TabsTrigger>\n              <TabsTrigger\n                value="invite"\n                className="text-sm flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"\n              >\n                <UserPlus className="w-4 h-4" /> Invite a teammate\n              </TabsTrigger>\n            </TabsList>\n            <TabsContent value="refer" className="mt-4 text-sm text-gray-700">\n              <p>\n                Share your referral link and earn credits for each friend who\n                signs up.\n              </p>\n            </TabsContent>\n            <TabsContent value="invite" className="mt-4 text-sm text-gray-700">\n              Invite your teammates to collaborate and earn bonus credits.\n            </TabsContent>\n          </Tabs>\n          <div className="mt-4 flex items-center gap-2">\n            <Input\n              value="https://shadcn-dialog-snippet.vercel.app/"\n              disabled\n              className="flex-1 border px-2 py-1 rounded-md text-sm focus:ring-2 focus:ring-blue-500"\n            />\n            <Button\n              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"\n              onClick={handleCopy}\n            >\n              Copy referral link\n            </Button>\n          </div>\n          <p className="text-xs text-gray-500 mt-2">\n            Give 200 credits and earn 200 credits for each new referral who\n            signs up for Application.\n          </p>\n        </div>\n        <Accordion type="single" collapsible className="mt-6 border-t">\n          <AccordionItem value="item-1">\n            <AccordionTrigger>\n              How many credits does it cost to use AI?\n            </AccordionTrigger>\n            <AccordionContent>\n              Using AI costs approximately 10 credits per request.\n            </AccordionContent>\n          </AccordionItem>\n          <AccordionItem value="item-2">\n            <AccordionTrigger>How can I earn more credits?</AccordionTrigger>\n            <AccordionContent>\n              Earn credits by inviting friends or teammates to sign up for\n              Application.\n            </AccordionContent>\n          </AccordionItem>\n          <AccordionItem value="item-3">\n            <AccordionTrigger>Can I buy credits?</AccordionTrigger>\n            <AccordionContent>\n              Yes, credits can be purchased in the Application settings.\n            </AccordionContent>\n          </AccordionItem>\n        </Accordion>\n      </DialogContent>\n    </Dialog>\n  );\n}\n';
