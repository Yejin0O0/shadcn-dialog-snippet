import { Button } from "@/components/ui/button";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExpandIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SurveyFormData {
  satisfaction: string;
  reason: string;
  serviceSource: string;
  newsletter: boolean;
}

interface OpenSatisfactionSurveyFormProps {
  type: "fullScreen" | "card";
}

const SCALE = 0.65;

export function OpenSatisfactionSurveyForm({
  type,
}: OpenSatisfactionSurveyFormProps) {
  const form = useForm<SurveyFormData>({
    defaultValues: {
      satisfaction: "",
      reason: "",
      serviceSource: "",
      newsletter: false,
    },
  });
  const [isOpen, setIsOpen] = useState(true);
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(true);

  const satisfactionValue = form.watch("satisfaction");

  const onSubmit = (data: SurveyFormData) => {
    alert(`Submitted Data:
      Satisfaction: ${data.satisfaction}
      Reason: ${data.reason}
      Service Source: ${data.serviceSource}
      Newsletter: ${data.newsletter ? "Yes" : "No"}
    `);
  };

  if (type === "fullScreen") {
    return (
      <Dialog onOpenChange={() => setIsTooltipAllowed(false)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              asChild
              onMouseEnter={() => setIsTooltipAllowed(true)}
            >
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
                >
                  <ExpandIcon />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            {isTooltipAllowed && (
              <TooltipContent className="bg-black text-white">
                full screen dialog
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[600px] rounded-md shadow-lg p-6 bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Satisfaction Survey Form
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
                            className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${
                              field.value === "very_dissatisfied"
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
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
                            className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${
                              field.value === "dissatisfied"
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
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
                            className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${
                              field.value === "neutral"
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
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
                            className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${
                              field.value === "satisfied"
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
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
                            className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${
                              field.value === "very_satisfied"
                                ? "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-50"
                            }`}
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
                          placeholder={`Please describe why you feel ${
                            satisfactionValue === "satisfied" ||
                            satisfactionValue === "very_satisfied"
                              ? "satisfied"
                              : "dissatisfied"
                          }`}
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
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
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

  if (type === "card") {
    return (
      <div
        className={`flex-1 ${
          isOpen
            ? "bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            : ""
        }`}
      >
        <Button
          variant="outline"
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-fit"
          onClick={() => setIsOpen(true)}
        >
          Satisfaction Survey Form
        </Button>

        {isOpen && (
          <div
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE})`,
              transformOrigin: "center",
            }}
            className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 absolute top-1/2 left-1/2"
          >
            <div>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold leading-none tracking-tight">
                  Satisfaction Survey Form
                </h2>
                <XIcon
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="text-sm text-muted-foreground text-gray-500">
                Please fill out the following information.
              </div>
            </div>
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
                              className={`cursor-pointer w-18 h-18 p-1 rounded-lg border text-center transition ${
                                field.value === "very_dissatisfied"
                                  ? "bg-blue-100 border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() =>
                                field.onChange("very_dissatisfied")
                              }
                              onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  field.onChange("very_dissatisfied");
                                }
                              }}
                            >
                              <div className="text-2xl">😡</div>
                              <div className="text-xs mt-1">Terrible</div>
                            </button>

                            {/* Dissatisfied */}
                            <button
                              tabIndex={0}
                              type="button"
                              className={`cursor-pointer w-19 h-18 p-1 rounded-lg border text-center transition ${
                                field.value === "dissatisfied"
                                  ? "bg-blue-100 border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() => field.onChange("dissatisfied")}
                              onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  field.onChange("dissatisfied");
                                }
                              }}
                            >
                              <div className="text-2xl">🙁</div>
                              <div className="text-xs mt-1">Bad</div>
                            </button>

                            {/* Neutral */}
                            <button
                              tabIndex={0}
                              type="button"
                              className={`cursor-pointer w-19 h-18 p-1 rounded-lg border text-center transition ${
                                field.value === "neutral"
                                  ? "bg-blue-100 border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() => field.onChange("neutral")}
                              onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  field.onChange("neutral");
                                }
                              }}
                            >
                              <div className="text-2xl">😐</div>
                              <div className="text-xs mt-1">Okay</div>
                            </button>

                            {/* Satisfied */}
                            <button
                              tabIndex={0}
                              type="button"
                              className={`cursor-pointer w-19 h-18 p-1 rounded-lg border text-center transition ${
                                field.value === "satisfied"
                                  ? "bg-blue-100 border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() => field.onChange("satisfied")}
                              onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  field.onChange("satisfied");
                                }
                              }}
                            >
                              <div className="text-2xl">🙂</div>
                              <div className="text-xs mt-1">Good</div>
                            </button>

                            {/* Very Satisfied */}
                            <button
                              tabIndex={0}
                              type="button"
                              className={`cursor-pointer w-19 h-18 p-1 rounded-lg border text-center transition ${
                                field.value === "very_satisfied"
                                  ? "bg-blue-100 border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                              onClick={() => field.onChange("very_satisfied")}
                              onKeyUp={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  field.onChange("very_satisfied");
                                }
                              }}
                            >
                              <div className="text-2xl">😃</div>
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
                            placeholder={`Please describe why you feel ${
                              satisfactionValue === "satisfied" ||
                              satisfactionValue === "very_satisfied"
                                ? "satisfied"
                                : "dissatisfied"
                            }`}
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
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
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

                <div className="mt-4 ">
                  <Button type="submit" className="w-1/2">
                    Submit
                  </Button>
                  <Button type="button" variant="outline" className="w-1/2">
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    );
  }
}
