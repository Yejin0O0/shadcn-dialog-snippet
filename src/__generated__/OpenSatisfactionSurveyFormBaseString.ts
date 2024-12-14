export const OpenSatisfactionSurveyFormBaseString =
  'import { Button } from "@/components/ui/button";\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogFooter,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog";\nimport {\n  Form,\n  FormControl,\n  FormField,\n  FormItem,\n  FormMessage,\n} from "@/components/ui/form";\nimport { Input } from "@/components/ui/input";\nimport { Label } from "@/components/ui/label";\nimport { RadioGroup } from "@/components/ui/radio-group";\nimport {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select";\nimport { Switch } from "@/components/ui/switch";\nimport { useForm } from "react-hook-form";\n\ninterface SurveyFormData {\n  satisfaction: string;\n  reason: string;\n  serviceSource: string;\n  newsletter: boolean;\n}\n\nexport function SurveyFormBase() {\n  const form = useForm<SurveyFormData>({\n    defaultValues: {\n      satisfaction: "",\n      reason: "",\n      serviceSource: "",\n      newsletter: false,\n    },\n  });\n\n  const satisfactionValue = form.watch("satisfaction");\n\n  const onSubmit = (data: SurveyFormData) => {\n    alert(`Submitted Data:\n      Satisfaction: ${data.satisfaction}\n      Reason: ${data.reason}\n      Service Source: ${data.serviceSource}\n      Newsletter: ${data.newsletter ? "Yes" : "No"}\n    `);\n  };\n\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button variant="outline" className="w-fit">\n          Satisfaction Survey Form\n        </Button>\n      </DialogTrigger>\n      <DialogContent className="sm:max-w-[600px] rounded-md shadow-lg p-6 bg-white">\n        <DialogHeader>\n          <DialogTitle className="text-xl font-semibold">\n            Satisfaction Survey Form\n          </DialogTitle>\n          <DialogDescription className="text-gray-500">\n            Please fill out the following information.\n          </DialogDescription>\n        </DialogHeader>\n\n        <Form {...form}>\n          <form\n            onSubmit={form.handleSubmit(onSubmit)}\n            className="grid gap-4 py-4"\n          >\n            <FormField\n              control={form.control}\n              name="satisfaction"\n              rules={{ required: "Satisfaction level is required" }}\n              render={({ field }) => (\n                <FormItem>\n                  <Label className="text-sm font-semibold">\n                    Satisfaction Level\n                  </Label>\n\n                  <FormControl>\n                    <RadioGroup\n                      value={field.value}\n                      onValueChange={(value) => {\n                        field.onChange(value);\n                      }}\n                      className="flex justify-evenly mt-4"\n                    >\n                      <div className="grid grid-cols-5 gap-4">\n                        {/* Very Dissatisfied */}\n                        <button\n                          tabIndex={0}\n                          type="button"\n                          className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${\n                            field.value === "very_dissatisfied"\n                              ? "bg-blue-100 border-blue-500"\n                              : "border-gray-300 hover:bg-gray-50"\n                          }`}\n                          onClick={() => field.onChange("very_dissatisfied")}\n                          onKeyUp={(e) => {\n                            if (e.key === "Enter" || e.key === " ") {\n                              field.onChange("very_dissatisfied");\n                            }\n                          }}\n                        >\n                          <div className="text-3xl">😡</div>\n                          <div className="text-xs mt-1">Terrible</div>\n                        </button>\n\n                        {/* Dissatisfied */}\n                        <button\n                          tabIndex={0}\n                          type="button"\n                          className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${\n                            field.value === "dissatisfied"\n                              ? "bg-blue-100 border-blue-500"\n                              : "border-gray-300 hover:bg-gray-50"\n                          }`}\n                          onClick={() => field.onChange("dissatisfied")}\n                          onKeyUp={(e) => {\n                            if (e.key === "Enter" || e.key === " ") {\n                              field.onChange("dissatisfied");\n                            }\n                          }}\n                        >\n                          <div className="text-3xl">🙁</div>\n                          <div className="text-xs mt-1">Bad</div>\n                        </button>\n\n                        {/* Neutral */}\n                        <button\n                          tabIndex={0}\n                          type="button"\n                          className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${\n                            field.value === "neutral"\n                              ? "bg-blue-100 border-blue-500"\n                              : "border-gray-300 hover:bg-gray-50"\n                          }`}\n                          onClick={() => field.onChange("neutral")}\n                          onKeyUp={(e) => {\n                            if (e.key === "Enter" || e.key === " ") {\n                              field.onChange("neutral");\n                            }\n                          }}\n                        >\n                          <div className="text-3xl">😐</div>\n                          <div className="text-xs mt-1">Okay</div>\n                        </button>\n\n                        {/* Satisfied */}\n                        <button\n                          tabIndex={0}\n                          type="button"\n                          className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${\n                            field.value === "satisfied"\n                              ? "bg-blue-100 border-blue-500"\n                              : "border-gray-300 hover:bg-gray-50"\n                          }`}\n                          onClick={() => field.onChange("satisfied")}\n                          onKeyUp={(e) => {\n                            if (e.key === "Enter" || e.key === " ") {\n                              field.onChange("satisfied");\n                            }\n                          }}\n                        >\n                          <div className="text-3xl">🙂</div>\n                          <div className="text-xs mt-1">Good</div>\n                        </button>\n\n                        {/* Very Satisfied */}\n                        <button\n                          tabIndex={0}\n                          type="button"\n                          className={`cursor-pointer w-20 h-20 p-1 rounded-lg border text-center transition ${\n                            field.value === "very_satisfied"\n                              ? "bg-blue-100 border-blue-500"\n                              : "border-gray-300 hover:bg-gray-50"\n                          }`}\n                          onClick={() => field.onChange("very_satisfied")}\n                          onKeyUp={(e) => {\n                            if (e.key === "Enter" || e.key === " ") {\n                              field.onChange("very_satisfied");\n                            }\n                          }}\n                        >\n                          <div className="text-3xl">😃</div>\n                          <div className="text-xs mt-1">Great</div>\n                        </button>\n                      </div>\n                    </RadioGroup>\n                  </FormControl>\n                  <FormMessage />\n                </FormItem>\n              )}\n            />\n\n            {(satisfactionValue === "dissatisfied" ||\n              satisfactionValue === "very_dissatisfied" ||\n              satisfactionValue === "satisfied" ||\n              satisfactionValue === "very_satisfied") && (\n              <FormField\n                control={form.control}\n                name="reason"\n                rules={{ required: "Please provide a reason" }}\n                render={({ field }) => (\n                  <FormItem>\n                    <Label className="text-sm font-semibold">\n                      {satisfactionValue === "satisfied" ||\n                      satisfactionValue === "very_satisfied"\n                        ? "Why are you satisfied?"\n                        : "Why are you dissatisfied?"}\n                    </Label>\n                    <FormControl>\n                      <Input\n                        id="reason"\n                        placeholder={`Please describe why you feel ${\n                          satisfactionValue === "satisfied" ||\n                          satisfactionValue === "very_satisfied"\n                            ? "satisfied"\n                            : "dissatisfied"\n                        }`}\n                        {...field}\n                      />\n                    </FormControl>\n                    <FormMessage />\n                  </FormItem>\n                )}\n              />\n            )}\n\n            <FormField\n              control={form.control}\n              name="serviceSource"\n              rules={{ required: "This field is required" }}\n              render={({ field }) => (\n                <FormItem>\n                  <Label className="text-sm font-semibold">\n                    How did you hear about us?\n                  </Label>\n                  <FormControl>\n                    <Select onValueChange={field.onChange} value={field.value}>\n                      <SelectTrigger>\n                        <SelectValue placeholder="Select an option" />\n                      </SelectTrigger>\n                      <SelectContent>\n                        <SelectItem value="social_media">\n                          Social Media\n                        </SelectItem>\n                        <SelectItem value="friend">Friend</SelectItem>\n                        <SelectItem value="advertisement">\n                          Advertisement\n                        </SelectItem>\n                        <SelectItem value="other">Other</SelectItem>\n                      </SelectContent>\n                    </Select>\n                  </FormControl>\n                  <FormMessage />\n                </FormItem>\n              )}\n            />\n\n            <FormField\n              control={form.control}\n              name="newsletter"\n              render={({ field }) => (\n                <FormItem className="flex items-center justify-between">\n                  <Label className="text-sm font-semibold">\n                    Subscribe to Newsletter\n                  </Label>\n                  <FormControl>\n                    <Switch\n                      id="newsletter"\n                      checked={field.value}\n                      onCheckedChange={field.onChange}\n                    />\n                  </FormControl>\n                </FormItem>\n              )}\n            />\n\n            <DialogFooter className="mt-4 ">\n              <Button type="submit" className="w-1/2">\n                Submit\n              </Button>\n              <Button type="button" variant="outline" className="w-1/2">\n                Cancel\n              </Button>\n            </DialogFooter>\n          </form>\n        </Form>\n      </DialogContent>\n    </Dialog>\n  );\n}\n';
