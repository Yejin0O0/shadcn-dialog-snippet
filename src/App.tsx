import Editor from "@monaco-editor/react";
import { Button } from "./components/ui/button";
import "@/App.css";
import ErrorAlert from "@/components/examples/alert/ErrorAlert";
import { CheckBoxColumnForm } from "./components/examples/CheckBoxColumnForm";
import { CheckBoxRowForm } from "./components/examples/CheckBoxRowForm";
import { RadioBoxColumnForm } from "./components/examples/RadioBoxColumnForm";
import { RadioBoxRowForm } from "./components/examples/RadioBoxRowForm";
import SignIn from "./components/examples/SignIn";
import SurveyForm from "./components/examples/SurveyForm";
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
              <RadioBoxColumnForm />
              <RadioBoxRowForm />
              <CheckBoxColumnForm />
              <CheckBoxRowForm />
              <SurveyForm />
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
