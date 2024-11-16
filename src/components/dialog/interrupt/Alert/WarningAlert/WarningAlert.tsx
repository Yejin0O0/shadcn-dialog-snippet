import { Button } from "@/components/ui/button";
import { useState } from "react";

export function WarningAlert() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-[400px] ${
        isOpen
          ? "relative bg-black bg-opacity-50 p-4"
          : "flex flex-col justify-center items-center"
      }`}
    >
      {isOpen && (
        <div className="scale-95 absolute w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="border-l-4 border-amber-500 pl-6">
            <h2 className="text-lg font-semibold">Warning Message</h2>
            <p className="text-sm text-muted-foreground">
              This is a warning message. Please take caution before proceeding
              further.
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Dismiss
              </Button>
              <Button
                variant="outline"
                className="w-fit bg-amber-500 text-white hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Action
              </Button>
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <Button
          variant="outline"
          className="w-fit border-amber-500 text-amber-500 hover:bg-amber-100 hover:text-amber-500"
          onClick={() => setIsOpen(true)}
        >
          Warning
        </Button>
      )}
    </div>
  );
}
