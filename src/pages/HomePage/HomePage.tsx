import DialogCard from "@/components/common/DialogCard";
import DialogDisplay from "@/components/common/DialogDisplay";
import DialogNav from "@/components/common/DialogNav";
import * as Dialog from "@/components/dialog/index";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
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
                  fullScreenButton={<Dialog.InfoAlert type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.InfoAlert type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.SuccessAlertBaseString}
                  title="Success"
                  fullScreenButton={<Dialog.SuccessAlert type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SuccessAlert type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="interrupt"
                  code={Dialog.UpdateAlertBaseString}
                  title="Update"
                  fullScreenButton={<Dialog.UpdateAlert type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.UpdateAlert type="card" />
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
                  code={Dialog.UserProfileBaseString}
                  title="User Profile"
                  fullScreenButton={<Dialog.UserProfile type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.UserProfile type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.PricePlanBaseString}
                  title="Price Plan"
                  fullScreenButton={<Dialog.PricePlan type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.PricePlan type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.CreditsBaseString}
                  title="Credits"
                  fullScreenButton={<Dialog.Credits type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.Credits type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="information"
                  code={Dialog.ReviewNCommentBaseString}
                  title="Review & Comment"
                  fullScreenButton={<Dialog.ReviewNComment type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.ReviewNComment type="card" />
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
                  code={Dialog.CheckBoxColumnBaseString}
                  title="Checkbox Column"
                  fullScreenButton={<Dialog.CheckBoxColumn type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.CheckBoxColumn type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.InnerScrollBaseString}
                  title="Inner Scroll"
                  fullScreenButton={<Dialog.InnerScroll type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.InnerScroll type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.SatisfactionSurveyBaseString}
                  title="Satisfaction Survey"
                  fullScreenButton={
                    <Dialog.SatisfactionSurvey type="fullScreen" />
                  }
                >
                  <DialogCard>
                    <Dialog.SatisfactionSurvey type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.PaymentStepBaseString}
                  title="Payment Step"
                  fullScreenButton={<Dialog.PaymentStep type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.PaymentStep type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.RadioBoxColumnBaseString}
                  title="Radiobox Column"
                  fullScreenButton={<Dialog.RadioBoxColumn type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.RadioBoxColumn type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.SignInBaseString}
                  title="Sign In"
                  fullScreenButton={<Dialog.SignIn type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SignIn type="card" />
                  </DialogCard>
                </DialogDisplay>
                <DialogDisplay
                  category="form"
                  code={Dialog.SignUpBaseString}
                  title="Sign Up"
                  fullScreenButton={<Dialog.SignUp type="fullScreen" />}
                >
                  <DialogCard>
                    <Dialog.SignUp type="card" />
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
