import { AreaChart, Clipboard } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

function DialogCard() {
  return (
    <Card className="min-h-96">
      <CardHeader className="items-center gap-2 relative z-20 flex flex-row justify-between border-b px-3 py-2.5">
        <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
          <AreaChart className="text-current" />
          Chart
        </div>
        <div className="flex items-center justify-center gap-2 !m-0">
          <span className="sr-only">Copy</span>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
          >
            <Clipboard width={24} height={24} className="text-current" />
          </button>
          <div className="shrink-0 bg-border w-[1px] mx-0 hidden h-4 md:flex" />
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input hover:text-accent-foreground h-6 rounded-[6px] border bg-transparent px-2 text-xs text-foreground shadow-none hover:bg-muted dark:text-foreground"
          >
            View Code
          </button>
        </div>
      </CardHeader>
      <CardContent className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight w-full">
            test code
          </h3>
          <p className="w-full text-sm text-muted-foreground">
            test code description
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default DialogCard;
