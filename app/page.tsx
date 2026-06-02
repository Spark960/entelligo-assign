import { StarBackground } from "@/components/star-background";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center selection:bg-sky-500/30 min-h-screen">
      {/* background */}
      <StarBackground />

      {/* hero section */}
      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-sky-100 to-sky-400 mb-6 drop-shadow-sm">
          Explore the <br className="hidden sm:block" /> solar system
        </h1>
        
        <p className="text-lg md:text-xl text-sky-100/80 max-w-2xl mb-10 font-medium leading-relaxed">
          learn all about the planets, stars, and the universe we live in.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/planets">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-sky-900 hover:bg-gray-200 rounded-full font-bold w-full sm:w-auto shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all hover:scale-105">
              Start learning
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link href="/about">
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-sky-500/30 text-white bg-sky-950/30 backdrop-blur-md hover:bg-sky-900/50 rounded-full font-bold w-full sm:w-auto transition-all hover:scale-105">
              About
              <Sparkles className="ml-2 h-5 w-5 text-sky-300" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* solar system overview section */}
      <section className="relative z-10 flex flex-col items-center w-full px-6 py-32 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-200 to-white mb-6 text-center">
          What is in our solar system?
        </h2>
        <p className="text-sky-100/60 mb-16 text-center max-w-2xl text-lg">
          our solar system consists of our star, the sun, and everything bound to it by gravity. here is a quick look at what makes it up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
              <CardTitle className="text-2xl text-sky-100 font-bold tracking-wide">The sun</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/70 text-base leading-relaxed">
                The star at the center of our solar system. It contains 99.8% of the mass in the entire solar system.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
              <CardTitle className="text-2xl text-sky-100 font-bold tracking-wide">8 planets</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/70 text-base leading-relaxed">
                There are eight planets that orbit the sun. Four are rocky inner planets and four are massive gas giants.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
              <CardTitle className="text-2xl text-sky-100 font-bold tracking-wide">Moons</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/70 text-base leading-relaxed">
                Also known as natural satellites. There are over 200 known moons orbiting the planets in our solar system.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
              <CardTitle className="text-2xl text-sky-100 font-bold tracking-wide">Asteroids</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sky-100/70 text-base leading-relaxed">
                Rocky, airless remnants left over from the early formation of our solar system billions of years ago.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* subtle global gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-linear-to-t from-[#020813] to-transparent z-0 pointer-events-none" />
    </main>
  );
}
