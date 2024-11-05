import GitHubIcon from "@/assets/github.svg";
import LogoIcon from "@/assets/logo.svg";
import TwitterIcon from "@/assets/twitter.svg";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 max-w-screen-2xl items-center justify-between px-8">
        <div className="mr-4 flex">
          <a className="mr-4 flex items-center space-x-2" href="/">
            <LogoIcon />
            <span className="font-bold lg:inline-block">shadcn/ui</span>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shadcn-ui/ui"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
          >
            <GitHubIcon />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/shadcn"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
          >
            <TwitterIcon />
            <span className="sr-only">Twitter</span>
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
