import { Button } from "@/components/ui/button";
import { useState } from "react";

export function InfoDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="outline"
        className="w-fit border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-500"
        onClick={() => setIsOpen(true)}
      >
        Informative
      </Button>
      {isOpen && (
        <div>
          This is an informative message to notify you of something important.
          Please review the information carefully.
        </div>
      )}
    </div>
  );
}
