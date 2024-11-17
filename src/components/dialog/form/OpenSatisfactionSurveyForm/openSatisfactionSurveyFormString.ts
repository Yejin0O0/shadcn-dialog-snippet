export const openSatisfactionSurveyFormString = `import { Button } from "@/components/ui/button";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
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
  satisfaction: string;
  reason: string;
  serviceSource: string;
  newsletter: boolean;
}

export function SurveyForm() {
  const form = useForm<SurveyFormData>({
    defaultValues: {
      satisfaction: "",
      reason: "",
      serviceSource: "",
      newsletter: false,
    },
  });

  const satisfactionValue = form.watch("satisfaction");

  const onSubmit = (data: SurveyFormData) => {
    alert(\`Submitted Data:
      Satisfaction: \${data.satisfaction}
      Reason: \${data.reason}
      Service Source: \${data.serviceSource}
      Newsletter: \${data.newsletter ? "Yes" : "No"}
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
              name="satisfaction"
              rules={{ required: "Satisfaction level is required" }}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-semibold">
                    Satisfaction Level
                  </Label>

                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      className="flex justify-evenly mt-4"
                    >
                      <div className="grid grid-cols-5 gap-4">
                        {/* Very Dissatisfied */}
                        <button
                          tabIndex={0}
                          type="button"
                          className={\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === "very_dissatisfied"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300 hover:bg-gray-50"}\`}
                          onClick={() => field.onChange("very_dissatisfied")}
                          onKeyUp={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              field.onChange("very_dissatisfied");
                            }
                          }}
                        >
                          <div className="text-3xl">😡</div>
                          <div className="text-xs mt-1">Terrible</div>
                        </button>

                        {/* Dissatisfied */}
                        <button
                          tabIndex={0}
                          type="button"
                          className={\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === "dissatisfied"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300 hover:bg-gray-50"}\`}
                          onClick={() => field.onChange("dissatisfied")}
                          onKeyUp={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              field.onChange("dissatisfied");
                            }
                          }}
                        >
                          <div className="text-3xl">🙁</div>
                          <div className="text-xs mt-1">Bad</div>
                        </button>

                        {/* Neutral */}
                        <button
                          tabIndex={0}
                          type="button"
                          className={\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === "neutral"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300 hover:bg-gray-50"}\`}
                          onClick={() => field.onChange("neutral")}
                          onKeyUp={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              field.onChange("neutral");
                            }
                          }}
                        >
                          <div className="text-3xl">😐</div>
                          <div className="text-xs mt-1">Okay</div>
                        </button>

                        {/* Satisfied */}
                        <button
                          tabIndex={0}
                          type="button"
                          className={\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === "satisfied"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300 hover:bg-gray-50"}\`}
                          onClick={() => field.onChange("satisfied")}
                          onKeyUp={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              field.onChange("satisfied");
                            }
                          }}
                        >
                          <div className="text-3xl">🙂</div>
                          <div className="text-xs mt-1">Good</div>
                        </button>

                        {/* Very Satisfied */}
                        <button
                          tabIndex={0}
                          type="button"
                          className={\`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition \${field.value === "very_satisfied"
                            ? "bg-blue-100 border-blue-500"
                            : "border-gray-300 hover:bg-gray-50"}\`}
                          onClick={() => field.onChange("very_satisfied")}
                          onKeyUp={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              field.onChange("very_satisfied");
                            }
                          }}
                        >
                          <div className="text-3xl">😃</div>
                          <div className="text-xs mt-1">Great</div>
                        </button>
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
                    <Label className="text-sm font-semibold">
                      {satisfactionValue === "satisfied" ||
                      satisfactionValue === "very_satisfied"
                        ? "Why are you satisfied?"
                        : "Why are you dissatisfied?"}
                    </Label>
                    <FormControl>
                      <Input
                        id="reason"
                        placeholder={\`Please describe why you feel \${satisfactionValue === "satisfied" || satisfactionValue === "very_satisfied"
                          ? "satisfied"
                          : "dissatisfied"}\`}
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
                  <Label className="text-sm font-semibold">
                    How did you hear about us?
                  </Label>
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
                  <Label className="text-sm font-semibold">
                    Subscribe to Newsletter
                  </Label>
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
