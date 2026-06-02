import { StarBackground } from "@/components/star-background";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative flex flex-col items-center selection:bg-sky-500/30 min-h-screen pb-32">
      {/* background */}
      <StarBackground />

      <div className="z-10 w-full max-w-4xl px-6 pt-12">
        <Link href="/">
          <Button variant="ghost" className="text-sky-300 hover:text-white hover:bg-sky-900/30 -ml-4 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Button>
        </Link>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            About this project
          </h1>
          <p className="text-lg text-sky-100/70 max-w-2xl">
            a brief overview of why this site was built and the tools used to create it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader>
              <CardTitle className="text-3xl text-sky-50 font-bold tracking-wide">
                What this is
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/80 text-base leading-relaxed">
                This website was built as an educational to teach students basic facts about the solar system in a clean and minimal way.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader>
              <CardTitle className="text-3xl text-sky-50 font-bold tracking-wide">
                Technologies used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/80 text-base leading-relaxed space-y-4">
                <span className="block">
                  Built using some of the most modern tools in web dev:
                </span>
                <ul className="list-disc pl-5 space-y-2 text-sky-100/90">
                  <li><strong>Next.js:</strong> for routing and react server components.</li>
                  <li><strong>Typescript:</strong> to ensure type safety across the codebase.</li>
                  <li><strong>Tailwind css:</strong> for styling the entire application without writing custom css files.</li>
                  <li><strong>Shadcn/ui:</strong> for reusable, accessible UI components like these cards and buttons.</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </div>
      
      {/* subtle global gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-linear-to-t from-[#020813] to-transparent z-0 pointer-events-none" />
    </main>
  );
}
