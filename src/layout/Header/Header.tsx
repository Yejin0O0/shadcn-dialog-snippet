import { Icons } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/layout/Header/ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="mr-4 flex">
          <a className="mr-4 flex items-center space-x-2" href="/">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold lg:inline-block">
              {siteConfig.name}
            </span>
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="https://ui.shadcn.com/docs"
            >
              Docs
            </a>
          </nav>
        </div>
        <nav className="flex items-center">
          <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
            <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
              <Icons.gitHub />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
