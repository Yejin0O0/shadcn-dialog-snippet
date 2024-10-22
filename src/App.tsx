import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import "@/App.css";
import { CheckBoxColumnForm } from "./components/examples/CheckBoxColumnForm";
import { CheckBoxRowForm } from "./components/examples/CheckBoxRowForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

const buttonData = [
  {
    id: 1,
    label: "Settings",
    dialogTitle: "Settings",
    dialogDescription: "Adjust your app settings here.",
  },
  {
    id: 2,
    label: "Profile",
    dialogTitle: "User Profile",
    dialogDescription: "View and edit your profile information.",
  },
  {
    id: 3,
    label: "Notifications",
    dialogTitle: "Notifications",
    dialogDescription: "Manage your notification preferences.",
  },
  {
    id: 4,
    label: "Help",
    dialogTitle: "Help Center",
    dialogDescription: "Find answers to common questions and issues.",
  },
  {
    id: 5,
    label: "5th",
    dialogTitle: "5th",
    dialogDescription: "Find answers to common questions and issues.",
  },
  {
    id: 6,
    label: "6th",
    dialogTitle: "6th",
    dialogDescription: "Find answers to common questions and issues.",
  },
  {
    id: 7,
    label: "7th",
    dialogTitle: "7th",
    dialogDescription: "Find answers to common questions and issues.",
  },
  {
    id: 8,
    label: "8th",
    dialogTitle: "8th",
    dialogDescription: "Find answers to common questions and issues.",
  },
  {
    id: 9,
    label: "9th",
    dialogTitle: "9th",
    dialogDescription: "Find answers to common questions and issues.",
  },
];

function App() {
  const [openDialogs, setOpenDialogs] = useState<Record<number, boolean>>({});

  const handleOpenChange = (id: number, isOpen: boolean) => {
    setOpenDialogs((prev) => ({ ...prev, [id]: isOpen }));
  };
  return (
    <main className="w-full">
      <div className="contianer">
        <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            shadcn/ui Dialog Snippet
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            Copy and paste into your apps. Open Source.
          </p>
          <Button className="inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 rounded-md px-3 h-8 text-xs">
            Documentation
          </Button>
        </section>
        <section>
          <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
            <div className="p-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
              {buttonData.map((button) => (
                <Dialog
                  key={button.id}
                  open={openDialogs[button.id]}
                  onOpenChange={(isOpen) => handleOpenChange(button.id, isOpen)}
                >
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {button.label}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{button.dialogTitle}</DialogTitle>
                      <DialogDescription>
                        {button.dialogDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <p>
                        This is the content area for the {button.label} dialog.
                      </p>
                      <p>
                        You can add more components or information here as
                        needed.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
              <CheckBoxColumnForm />
              <CheckBoxRowForm />
            </div>
            <Editor
              height="90vh"
              defaultLanguage="javascript"
              defaultValue="// some comment"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
