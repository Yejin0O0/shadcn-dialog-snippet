export const paymentStepFormString = `import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  plan: z.string().min(1, { message: "You must select a plan" }),
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be 16 digits" })
    .max(16, { message: "Card number must be 16 digits" }),
  expiry: z
    .string()
    .regex(/^\d{2}\/\d{2}$/, { message: "Invalid expiry date format (MM/YY)" }),
  cvv: z
    .string()
    .min(3, { message: "CVV must be 3 digits" })
    .max(3, { message: "CVV must be 3 digits" }),
});

export function PaymentStepForm() {
  const [step, setStep] = useState<number>(1);
  const [progressValue, setProgressValue] = useState<number>(33);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "PRO",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const selectedPlan = watch("plan");

  useEffect(() => {
    if (step === 1) {
      setProgressValue(33);
    } else if (step === 2) {
      setProgressValue(66);
    } else if (step === 3) {
      setProgressValue(100);
    }
  }, [step]);

  const onSubmit = (data: object) => {
    alert(JSON.stringify(data, null, 2));
    setStep(3);
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setStep((prevStep) => prevStep - 1);

  const StepProgressBar = (): JSX.Element => {
    return (
      <div className="mb-6">
        <Progress value={progressValue} className="w-full h-2" />
        <div className="flex justify-between text-sm mt-2">
          <span className={step >= 1 ? "text-black" : "text-gray-300"}>
            Plan
          </span>
          <span className={step >= 2 ? "text-black" : "text-gray-300"}>
            Payment
          </span>
          <span className={step >= 3 ? "text-black" : "text-gray-300"}>
            Complete
          </span>
        </div>
      </div>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          Payment Step
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-md shadow-lg p-6">
        <DialogHeader>
          <DialogTitle>Activate your account</DialogTitle>
        </DialogHeader>

        <StepProgressBar />

        {step === 1 && (
          <Form {...form}>
            <div className="space-y-4">
              <p className="text-center">Choose a plan that works for you:</p>
              <RadioGroup
                value={selectedPlan}
                onValueChange={(value) => setValue("plan", value)}
                className="space-y-4"
              >
                <FormItem>
                  <div className="flex items-center space-x-4 border p-4 rounded-lg hover:shadow-md transition duration-300">
                    <RadioGroupItem value="PRO" id="pro" />
                    <Label htmlFor="pro" className="flex flex-col">
                      <span className="font-semibold">
                        PRO account - $8/month
                      </span>
                      <span className="text-sm text-gray-500">
                        Up to 10 projects, up to 1,000 posts, basic analytics
                      </span>
                    </Label>
                  </div>
                </FormItem>
                <FormItem>
                  <div className="flex items-center space-x-4 border p-4 rounded-lg hover:shadow-md transition duration-300">
                    <RadioGroupItem value="ENTERPRISE" id="enterprise" />
                    <Label htmlFor="enterprise" className="flex flex-col">
                      <span className="font-semibold">
                        ENTERPRISE account - $16/month
                      </span>
                      <span className="text-sm text-gray-500">
                        Unlimited projects, unlimited posts, advanced analytics
                      </span>
                    </Label>
                  </div>
                </FormItem>
              </RadioGroup>
              {errors.plan && (
                <p className="text-red-500 text-sm">{errors.plan.message}</p>
              )}
              <DialogFooter className="mt-4">
                <Button onClick={handleNext} className="w-full">
                  Next: Billing details
                </Button>
              </DialogFooter>
            </div>
          </Form>
        )}

        {step === 2 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p className="text-center">Enter your payment details</p>
              <div className="grid gap-2">
                <div className="space-y-2">
                  <FormField
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Card number</Label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="1234 1234 1234 1234"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage>
                          {errors.cardNumber && (
                            <p className="text-red-500 text-sm">
                              {errors.cardNumber.message}
                            </p>
                          )}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      name="expiry"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <Label>Expiry </Label>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage>
                            {errors.expiry && (
                              <p className="text-red-500 text-sm">
                                {errors.expiry.message}
                              </p>
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="cvv"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <Label>CVV </Label>
                          <FormControl>
                            <Input
                              placeholder="123"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage>
                            {errors.cvv && (
                              <p className="text-red-500 text-sm">
                                {errors.cvv.message}
                              </p>
                            )}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <DialogFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevious}>
                    Back
                  </Button>
                  <Button type="submit">Activate</Button>
                </DialogFooter>
              </div>
            </form>
          </Form>
        )}

        {step === 3 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold">Account Activated!</h3>
            <p>Thank you for subscribing.</p>
            <p>You can now enjoy all the benefits of our service.</p>
            <Button onClick={() => setStep(1)} className="w-full">
              Go to Dashboard
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
`;
