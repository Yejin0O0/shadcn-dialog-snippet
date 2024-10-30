import DialogCard from "@/components/common/DialogCard";
import { Header } from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import "@/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <div className="container relative">
          <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              shadcn/ui Dialog Snippet
            </h1>
            <p className="max-w-2xl text-lg font-light text-foreground">
              Copy and paste into your apps. Open Source.
            </p>
            <Button className="inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 rounded-md px-3 h-8 text-xs">
              Documentation
            </Button>
          </section>
          <section id="dialog" className="scroll-mt-20">
            <div className="grid gap-4">
              <div className="relative overflow-hidden max-w-[600px] lg:max-w-none">
                tab 영역
              </div>
              <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
                <div
                  id="category1"
                  className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
                >
                  <DialogCard category="information" />
                  <DialogCard category="interrupt" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
