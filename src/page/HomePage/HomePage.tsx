import DialogCard from "@/components/common/DialogCard";
import DialogDisplay from "@/components/common/DialogDisplay";
import DialogNav from "@/components/common/DialogNav";
import { Separator } from "@/components/common/Separator";
import * as Dialog from "@/components/dialog/index";

function HomePage() {
  return (
    <div className="relative">
      <section className="flex flex-col items-start gap-2 border-b border-border/40 py-8 dark:border-border md:py-10 lg:py-12">
        <div className="container">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            shadcn-dialog-snippet
          </h1>
          <p className="max-w-2xl text-balance text-lg font-light text-foreground">
            A collection of various usage examples of the Dialog component from
            shadcn/ui.
          </p>
        </div>
      </section>
      <section id="dialog" className="container py-6 scroll-mt-20">
        <div className="grid gap-4">
          <DialogNav />
          <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
            <div className="grid flex-1 gap-12">
              <div
                id="interrupt"
                className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
              >
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.WarningAlertBaseString}
                  title="Warning"
                  fullScreenButton={<Dialog.WarningAlert type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.WarningAlert type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.ErrorAlertBaseString}
                  title="Error"
                  fullScreenButton={<Dialog.ErrorAlert type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.ErrorAlert type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.InfoAlertBaseString}
                  title="Info"
                  fullScreenButton={<Dialog.InfoDialog type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.InfoDialog type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.SuccessAlertBaseString}
                  title="Success"
                  fullScreenButton={<Dialog.SuccessDialog type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SuccessDialog type="card" />
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
                  code={Dialog.UserProfileDialogBaseString}
                  title="User Profile"
                  fullScreenButton={
                    <Dialog.UserProfileDialog type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.UserProfileDialog type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.PricePlanDialogBaseString}
                  title="Price Plan"
                  fullScreenButton={
                    <Dialog.PricePlanDialog type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.PricePlanDialog type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.CreditsDialogBaseString}
                  title="Credits information"
                  fullScreenButton={<Dialog.CreditsDialog type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.CreditsDialog type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.ReviewNCommentDialogBaseString}
                  title="Review and Comment"
                  fullScreenButton={
                    <Dialog.ReviewNCommentDialog type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.ReviewNCommentDialog type="card" />
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
                  code={Dialog.CheckBoxColumnFormBaseString}
                  title="Checkbox Column Form"
                  fullScreenButton={
                    <Dialog.CheckBoxColumnForm type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.CheckBoxColumnForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.InnerScrollFormBaseString}
                  title="Inner Scroll Form"
                  fullScreenButton={
                    <Dialog.InnerScrollForm type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.InnerScrollForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.OpenSatisfactionSurveyFormBaseString}
                  title="Satisfaction Survey Form"
                  fullScreenButton={
                    <Dialog.OpenSatisfactionSurveyForm type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.OpenSatisfactionSurveyForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.PaymentStepFormBaseString}
                  title="Payment Step Form"
                  fullScreenButton={
                    <Dialog.PaymentStepForm type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.PaymentStepForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.RadioBoxColumnFormBaseString}
                  title="Radiobox Column Form"
                  fullScreenButton={
                    <Dialog.RadioBoxColumnForm type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.RadioBoxColumnForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.SignInFormBaseString}
                  title="Sign In Form"
                  fullScreenButton={<Dialog.SignInForm type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SignInForm type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.SignUpFormBaseString}
                  title="Sign Up Form"
                  fullScreenButton={<Dialog.SignUpForm type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SignUpForm type="card" />
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
