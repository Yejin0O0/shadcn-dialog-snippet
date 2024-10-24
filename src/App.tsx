import Editor from "@monaco-editor/react";
import { Button } from "./components/ui/button";
import "@/App.css";
import ErrorAlert from "@/components/examples/alert/ErrorAlert";
import PaymentStep from "./components/examples/PaymentStep";
import SignIn from "./components/examples/SignIn";
import SignUp from "./components/examples/SignUp";
import SurveyForm from "./components/examples/SurveyForm";
import UserDetail from "./components/examples/UserDetail";
import InfoAlert from "./components/examples/alert/InfoAlert";
import SuccessAlert from "./components/examples/alert/SuccessAlert";
import WarningAlert from "./components/examples/alert/WarningAlert";

function App() {
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
              <ErrorAlert />
              <WarningAlert />
              <InfoAlert />
              <SuccessAlert />
              <SignIn />
              <SurveyForm />
              <SignUp />
              <PaymentStep />
              <UserDetail />
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
