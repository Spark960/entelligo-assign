import { StarBackground } from "@/components/star-background";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden selection:bg-sky-500/30">
      {/* background */}
      <StarBackground />

      {/* hero content */}
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-sky-100 to-sky-400 mb-6 drop-shadow-sm">
          explore the <br className="hidden sm:block" /> solar system
        </h1>
        
        <p className="text-lg md:text-xl text-sky-100/80 max-w-2xl mb-10 font-medium leading-relaxed">
          learn all about the planets, stars, and the universe we live in.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" className="h-14 px-8 text-base bg-white text-sky-900 hover:bg-gray-200 rounded-full font-bold w-full sm:w-auto shadow-[0_0_20px_rgba(14,165,233,0.4)]">
            start learning
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
          
          <Button size="lg" variant="outline" className="h-14 px-8 text-base border-sky-500/30 text-white bg-sky-950/30 backdrop-blur-md hover:bg-sky-900/50 rounded-full font-bold w-full sm:w-auto">
            view planets
            <Sparkles className="ml-2 h-5 w-5 text-sky-300" />
          </Button>
        </div>
      </div>
      
      {/* did this for the subtle gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-[#050505] to-transparent z-0 pointer-events-none" />
    </main>
  );
}
