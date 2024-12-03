export const PaymentStepFormBaseString =
  'import { Button } from "@/components/ui/button";\nimport {\n  Dialog,\n  DialogContent,\n  DialogFooter,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog";\nimport {\n  Form,\n  FormControl,\n  FormField,\n  FormItem,\n  FormMessage,\n} from "@/components/ui/form";\nimport { Input } from "@/components/ui/input";\nimport { Label } from "@/components/ui/label";\nimport { Progress } from "@/components/ui/progress";\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";\nimport { zodResolver } from "@hookform/resolvers/zod";\nimport { CheckCircle } from "lucide-react";\nimport { useEffect, useState } from "react";\nimport { useForm } from "react-hook-form";\nimport { z } from "zod";\n\nconst formSchema = z.object({\n  plan: z.string().min(1, { message: "You must select a plan" }),\n  cardNumber: z\n    .string()\n    .min(16, { message: "Card number must be 16 digits" })\n    .max(16, { message: "Card number must be 16 digits" }),\n  expiry: z\n    .string()\n    .regex(/^\\d{2}\\/\\d{2}$/, { message: "Invalid expiry date format (MM/YY)" }),\n  cvv: z\n    .string()\n    .min(3, { message: "CVV must be 3 digits" })\n    .max(3, { message: "CVV must be 3 digits" }),\n});\n\nexport function PaymentStepFormBase() {\n  const [step, setStep] = useState<number>(1);\n  const [progressValue, setProgressValue] = useState<number>(33);\n\n  const form = useForm({\n    resolver: zodResolver(formSchema),\n    defaultValues: {\n      plan: "PRO",\n      cardNumber: "",\n      expiry: "",\n      cvv: "",\n    },\n  });\n\n  const {\n    handleSubmit,\n    formState: { errors },\n    setValue,\n    watch,\n  } = form;\n\n  const selectedPlan = watch("plan");\n\n  useEffect(() => {\n    if (step === 1) {\n      setProgressValue(33);\n    } else if (step === 2) {\n      setProgressValue(66);\n    } else if (step === 3) {\n      setProgressValue(100);\n    }\n  }, [step]);\n\n  const onSubmit = (data: object) => {\n    alert(JSON.stringify(data, null, 2));\n    setStep(3);\n  };\n\n  const handleNext = () => setStep((prevStep) => prevStep + 1);\n  const handlePrevious = () => setStep((prevStep) => prevStep - 1);\n\n  const StepProgressBar = (): JSX.Element => {\n    return (\n      <div className="mb-6">\n        <Progress value={progressValue} className="w-full h-2" />\n        <div className="flex justify-between text-sm mt-2">\n          <span className={step >= 1 ? "text-black" : "text-gray-300"}>\n            Plan\n          </span>\n          <span className={step >= 2 ? "text-black" : "text-gray-300"}>\n            Payment\n          </span>\n          <span className={step >= 3 ? "text-black" : "text-gray-300"}>\n            Complete\n          </span>\n        </div>\n      </div>\n    );\n  };\n\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button variant="outline" className="w-fit">\n          Payment Step Form\n        </Button>\n      </DialogTrigger>\n      <DialogContent className="sm:max-w-[500px] rounded-md shadow-lg p-6">\n        <DialogHeader>\n          <DialogTitle>Activate your account</DialogTitle>\n        </DialogHeader>\n\n        <StepProgressBar />\n\n        {step === 1 && (\n          <Form {...form}>\n            <div className="space-y-4">\n              <p className="text-center">Choose a plan that works for you:</p>\n              <RadioGroup\n                value={selectedPlan}\n                onValueChange={(value) => setValue("plan", value)}\n                className="space-y-4"\n              >\n                <FormItem>\n                  <div className="flex items-center space-x-4 border p-4 rounded-lg hover:shadow-md transition duration-300">\n                    <RadioGroupItem value="PRO" id="pro" />\n                    <Label htmlFor="pro" className="flex flex-col">\n                      <span className="font-semibold">\n                        PRO account - $8/month\n                      </span>\n                      <span className="text-sm text-gray-500">\n                        Up to 10 projects, up to 1,000 posts, basic analytics\n                      </span>\n                    </Label>\n                  </div>\n                </FormItem>\n                <FormItem>\n                  <div className="flex items-center space-x-4 border p-4 rounded-lg hover:shadow-md transition duration-300">\n                    <RadioGroupItem value="ENTERPRISE" id="enterprise" />\n                    <Label htmlFor="enterprise" className="flex flex-col">\n                      <span className="font-semibold">\n                        ENTERPRISE account - $16/month\n                      </span>\n                      <span className="text-sm text-gray-500">\n                        Unlimited projects, unlimited posts, advanced analytics\n                      </span>\n                    </Label>\n                  </div>\n                </FormItem>\n              </RadioGroup>\n              {errors.plan && (\n                <p className="text-red-500 text-sm">{errors.plan.message}</p>\n              )}\n              <DialogFooter className="mt-4">\n                <Button onClick={handleNext} className="w-full">\n                  Next: Billing details\n                </Button>\n              </DialogFooter>\n            </div>\n          </Form>\n        )}\n\n        {step === 2 && (\n          <Form {...form}>\n            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">\n              <p className="text-center">Enter your payment details</p>\n              <div className="grid gap-2">\n                <div className="space-y-2">\n                  <FormField\n                    name="cardNumber"\n                    render={({ field }) => (\n                      <FormItem>\n                        <Label>Card number</Label>\n                        <FormControl>\n                          <div className="relative">\n                            <Input\n                              placeholder="1234 1234 1234 1234"\n                              {...field}\n                            />\n                          </div>\n                        </FormControl>\n                        <FormMessage>\n                          {errors.cardNumber && (\n                            <p className="text-red-500 text-sm">\n                              {errors.cardNumber.message}\n                            </p>\n                          )}\n                        </FormMessage>\n                      </FormItem>\n                    )}\n                  />\n                  <div className="flex gap-2">\n                    <FormField\n                      name="expiry"\n                      render={({ field }) => (\n                        <FormItem className="w-1/2">\n                          <Label>Expiry </Label>\n                          <FormControl>\n                            <Input placeholder="MM/YY" {...field} />\n                          </FormControl>\n                          <FormMessage>\n                            {errors.expiry && (\n                              <p className="text-red-500 text-sm">\n                                {errors.expiry.message}\n                              </p>\n                            )}\n                          </FormMessage>\n                        </FormItem>\n                      )}\n                    />\n\n                    <FormField\n                      name="cvv"\n                      render={({ field }) => (\n                        <FormItem className="w-1/2">\n                          <Label>CVV </Label>\n                          <FormControl>\n                            <Input\n                              placeholder="123"\n                              type="password"\n                              {...field}\n                            />\n                          </FormControl>\n                          <FormMessage>\n                            {errors.cvv && (\n                              <p className="text-red-500 text-sm">\n                                {errors.cvv.message}\n                              </p>\n                            )}\n                          </FormMessage>\n                        </FormItem>\n                      )}\n                    />\n                  </div>\n                </div>\n                <DialogFooter className="flex justify-between">\n                  <Button variant="outline" onClick={handlePrevious}>\n                    Back\n                  </Button>\n                  <Button type="submit">Activate</Button>\n                </DialogFooter>\n              </div>\n            </form>\n          </Form>\n        )}\n\n        {step === 3 && (\n          <div className="text-center space-y-4">\n            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />\n            <h3 className="text-lg font-semibold">Account Activated!</h3>\n            <p>Thank you for subscribing.</p>\n            <p>You can now enjoy all the benefits of our service.</p>\n            <Button onClick={() => setStep(1)} className="w-full">\n              Go to Dashboard\n            </Button>\n          </div>\n        )}\n      </DialogContent>\n    </Dialog>\n  );\n}\n';