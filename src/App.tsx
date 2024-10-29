import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import "@/App.css";
import { InnerScrollForm } from "@/components/Form/InnerScrollForm";
import { PaymentStepForm } from "@/components/Form/PaymentStepForm";
import { SignInForm } from "@/components/Form/SignInForm";
import { SignUpForm } from "@/components/Form/SignUpForm";
import { SurveyForm } from "@/components/Form/SurveyForm";
import { Header } from "@/components/Header";
import { InfoDialog } from "@/components/Information/InfoDialog";
import { SuccessAlert } from "@/components/Information/SuccessDialog";
import { UserProfileDialog } from "@/components/Information/UserProfileDialog";
import ErrorAlert from "@/components/Interrupt/Alert/ErrorAlert";
import { WarningAlert } from "@/components/Interrupt/Alert/WarningAlert";

function App() {
  return (
    <>
      <Header />
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
                <ErrorAlert />
                <WarningAlert />
                <InfoDialog />
                <SuccessAlert />
                <SignInForm />
                <SurveyForm />
                <SignUpForm />
                <PaymentStepForm />
                <UserProfileDialog />
                <InnerScrollForm />
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
    </>
  );
}

export default App;
