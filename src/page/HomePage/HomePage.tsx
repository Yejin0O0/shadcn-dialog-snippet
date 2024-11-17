import DialogCard from "@/components/common/DialogCard";
import DialogDisplay from "@/components/common/DialogDisplay";
import DialogNav from "@/components/common/DialogNav";
import { Separator } from "@/components/common/Separator";
import * as Dialog from "@/components/dialog/index";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="relative">
      <section className="flex flex-col items-start gap-2 border-b border-border/40 py-8 dark:border-border md:py-10 lg:py-12">
        <div className="container">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            shadcn/ui Dialog Snippet
          </h1>
          <p className="max-w-2xl text-balance text-lg font-light text-foreground">
            Copy and paste into your apps. Open Source.
          </p>
          <div className="flex w-full items-center justify-start gap-2 py-2">
            <Button asChild size="sm">
              <a href="https://ui.shadcn.com/docs">Documentation</a>
            </Button>
          </div>
        </div>
      </section>
      <section id="dialog" className="container py-6 scroll-mt-20">
        <div className="grid gap-4">
          <DialogNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
          <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
            <div className="grid flex-1 gap-12">
              <div
                id="interrupt"
                className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
              >
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.warningAlertString}
                >
                  <DialogCard>
                    <Dialog.WarningAlert />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.errorAlertString}
                >
                  <DialogCard>
                    <Dialog.ErrorAlert />
                  </DialogCard>
                </DialogDisplay>
              </div>
              <Separator />
              <div
                id="information"
                className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
              >
                <DialogDisplay
                  category="information"
                  code={Dialog.infoDialogString}
                >
                  <DialogCard>
                    <Dialog.InfoDialog />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.successDialogString}
                >
                  <DialogCard>
                    <Dialog.SuccessDialog />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.userProfileDialogString}
                >
                  <DialogCard>
                    <Dialog.UserProfileDialog />
                  </DialogCard>
                </DialogDisplay>
              </div>
              <Separator />
              <div
                id="form"
                className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
              >
                <DialogDisplay
                  category="form"
                  code={Dialog.checkBoxColumnFormString}
                >
                  <DialogCard>
                    <Dialog.CheckBoxColumnForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.checkBoxRowFormString}
                >
                  <DialogCard>
                    <Dialog.CheckBoxRowForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.innerScrollFormString}
                >
                  <DialogCard>
                    <Dialog.InnerScrollForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.openSatisfactionSurveyFormString}
                >
                  <DialogCard>
                    <Dialog.OpenSatisfactionSurveyForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.paymentStepFormString}
                >
                  <DialogCard>
                    <Dialog.PaymentStepForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.radioBoxColumnFormString}
                >
                  <DialogCard>
                    <Dialog.RadioBoxColumnForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.radioBoxRowFormString}
                >
                  <DialogCard>
                    <Dialog.RadioBoxRowForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay category="form" code={Dialog.signInFormString}>
                  <DialogCard>
                    <Dialog.SignInForm />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay category="form" code={Dialog.signUpFormString}>
                  <DialogCard>
                    <Dialog.SignUpForm />
                  </DialogCard>
                </DialogDisplay>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
