import { Button } from "@/components/ui/button";
import { useState } from "react";

export function WarningAlert() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? "bg-black bg-opacity-50" : "flex flex-col"}`}>
      {isOpen && (
        <div className="flex justify-center m-4">
          <div className="relative">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg z-20">
              <div className="border-l-4 border-amber-500 pl-6">
                <h2 className="text-lg font-semibold">Warning Message</h2>
                <p className="text-sm text-muted-foreground">
                  This is a warning message. Please take caution before
                  proceeding further.
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    className="w-fit border-amber-500 text-amber-500 hover:bg-amber-100 hover:text-amber-500"
                    onClick={() => setIsOpen(false)}
                  >
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
          </div>
        </div>
      )}
      {!isOpen && (
        <Button
          disabled={isOpen}
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
