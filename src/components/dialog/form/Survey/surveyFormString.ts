export const surveyFormString = `import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";

interface SurveyFormData {
  name: string;
  email: string;
  serviceUsage: string;
  satisfaction: string;
  reason: string;
  serviceSource: string;
  newsletter: boolean;
  agreeTerms: boolean;
}

export function SurveyForm() {
  const form = useForm<SurveyFormData>({
    defaultValues: {
      name: "",
      email: "",
      serviceUsage: "",
      satisfaction: "",
      reason: "",
      serviceSource: "",
      newsletter: false,
      agreeTerms: false,
    },
  });

  const satisfactionValue = form.watch("satisfaction");

  const onSubmit = (data: SurveyFormData) => {
    alert(\`Submitted Data:
      Name: \${data.name}
      Email: \${data.email}
      Service Usage: \${data.serviceUsage}
      Satisfaction: \${data.satisfaction}
      Reason: \${data.reason}
      Service Source: \${data.serviceSource}
      Newsletter: \${data.newsletter ? "Yes" : "No"}
      Agree to Terms: \${data.agreeTerms ? "Yes" : "No"}
    \`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          Open Satisfaction Survey
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-md shadow-lg p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Satisfaction Survey
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Please fill out the following information.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceUsage"
              rules={{ required: "Service usage is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How often do you use our service?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-between"
                    >
                      <FormItem>
                        <div className="flex justify-center items-center gap-1">
                          <RadioGroupItem value="daily" id="daily" />
                          <Label htmlFor="daily">Daily</Label>
                        </div>
                      </FormItem>
                      <FormItem>
                        <div className="flex justify-center items-center gap-1">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">Weekly</Label>
                        </div>
                      </FormItem>
                      <FormItem>
                        <div className="flex justify-center items-center gap-1">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly</Label>
                        </div>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="satisfaction"
              rules={{ required: "Satisfaction level is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    Satisfaction Level
                  </FormLabel>

                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      className="flex justify-evenly mt-4"
                    >
                      <div className="grid grid-cols-5 gap-4">
                        {/* Buttons for satisfaction levels */}
                        {["very_dissatisfied", "dissatisfied", "neutral", "satisfied", "very_satisfied"].map((level, index) => (
                          <button
                            key={index}
                            tabIndex={0}
                            type="button"
                            className=\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === level
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"}\`
                            onClick={() => field.onChange(level)}
                            onKeyUp={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                field.onChange(level);
                              }
                            }}
                          >
                            <div className="text-3xl">{level === "very_dissatisfied" ? "😡" : level === "dissatisfied" ? "🙁" : level === "neutral" ? "😐" : level === "satisfied" ? "🙂" : "😃"}</div>
                            <div className="text-xs mt-1">{level.replace(/_/g, " ").toUpperCase()}</div>
                          </button>
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(satisfactionValue === "dissatisfied" ||
              satisfactionValue === "very_dissatisfied" ||
              satisfactionValue === "satisfied" ||
              satisfactionValue === "very_satisfied") && (
              <FormField
                control={form.control}
                name="reason"
                rules={{ required: "Please provide a reason" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold">
                      {satisfactionValue === "satisfied" ||
                      satisfactionValue === "very_satisfied"
                        ? "Why are you satisfied?"
                        : "Why are you dissatisfied?"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="reason"
                        placeholder={\`Please describe why you feel \${satisfactionValue === "satisfied" || satisfactionValue === "very_satisfied" ? "satisfied" : "dissatisfied"}\`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="serviceSource"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    How did you hear about us?
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social_media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="advertisement">
                          Advertisement
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-sm font-semibold">
                    Subscribe to Newsletter
                  </FormLabel>
                  <FormControl>
                    <Switch
                      id="newsletter"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeTerms"
              rules={{ required: "You must agree to the terms" }}
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <div className="flex justify-center items-center gap-1">
                    <Checkbox
                      id="agreeTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      htmlFor="agreeTerms"
                      className="text-sm font-semibold"
                    >
                      I agree to the terms and conditions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4 ">
              <Button type="submit" className="w-1/2">
                Submit
              </Button>
              <Button type="button" variant="outline" className="w-1/2">
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
`;
