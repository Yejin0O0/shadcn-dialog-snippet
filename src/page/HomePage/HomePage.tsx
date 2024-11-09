import DialogCard from "@/components/common/DialogCard";
import DialogNav from "@/components/common/DialogNav";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="relative">
      <section className="container flex flex-col items-start gap-2 border-b border-border/40 py-8 dark:border-border md:py-10 lg:py-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          shadcn/ui Dialog Snippet
        </h1>
        <p className="max-w-2xl text-balance text-lg font-light text-foreground">
          Copy and paste into your apps. Open Source.
        </p>
        <Button className="inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 rounded-md px-3 h-8 text-xs">
          Documentation
        </Button>
      </section>
      <section id="dialog" className="container py-6 scroll-mt-20">
        <div className="grid gap-4">
          <DialogNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
          <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
            <div
              id="category1"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <DialogCard category="information" />
              <DialogCard category="interrupt" />
              <DialogCard category="form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
