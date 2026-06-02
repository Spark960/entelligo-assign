import { StarBackground } from "@/components/star-background";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const planets = [
  {
    name: "Mercury",
    type: "terrestrial",
    distance: "1st from sun",
    fact: "closest to the sun. it experiences extreme temperatures, from very hot during the day to freezing at night.",
    color: "bg-slate-400",
    size: "w-6 h-6",
    glow: "shadow-[0_0_15px_rgba(148,163,184,0.6)]"
  },
  {
    name: "Venus",
    type: "terrestrial",
    distance: "2nd from sun",
    fact: "the hottest planet in our solar system because of its thick, toxic atmosphere that traps heat.",
    color: "bg-orange-300",
    size: "w-10 h-10",
    glow: "shadow-[0_0_15px_rgba(253,186,116,0.6)]"
  },
  {
    name: "Earth",
    type: "terrestrial",
    distance: "3rd from sun",
    fact: "our home. it is the only planet we know of that has liquid water on its surface and supports life.",
    color: "bg-blue-500",
    size: "w-10 h-10",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.6)]"
  },
  {
    name: "Mars",
    type: "terrestrial",
    distance: "4th from sun",
    fact: "known as the red planet because of iron oxide in its soil. it has the largest volcano in the solar system.",
    color: "bg-red-500",
    size: "w-8 h-8",
    glow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]"
  },
  {
    name: "Jupiter",
    type: "gas giant",
    distance: "5th from sun",
    fact: "the largest planet. it is a gas giant with a famous giant storm called the great red spot.",
    color: "bg-orange-400",
    size: "w-20 h-20",
    glow: "shadow-[0_0_15px_rgba(251,146,60,0.6)]"
  },
  {
    name: "Saturn",
    type: "gas giant",
    distance: "6th from sun",
    fact: "famous for its beautiful and complex ring system, which is made mostly of ice chunks and rock.",
    color: "bg-yellow-200",
    size: "w-16 h-16",
    glow: "shadow-[0_0_15px_rgba(254,240,138,0.6)]",
    hasRings: true
  },
  {
    name: "Uranus",
    type: "ice giant",
    distance: "7th from sun",
    fact: "an ice giant that rotates completely on its side. it has a pale blue color due to methane gas.",
    color: "bg-cyan-300",
    size: "w-12 h-12",
    glow: "shadow-[0_0_15px_rgba(103,232,249,0.6)]"
  },
  {
    name: "Neptune",
    type: "ice giant",
    distance: "8th from sun",
    fact: "the farthest planet from the sun. it is a dark, cold, and very windy world.",
    color: "bg-blue-600",
    size: "w-12 h-12",
    glow: "shadow-[0_0_15px_rgba(37,99,235,0.6)]"
  }
];

export default function Planets() {
  return (
    <main className="relative flex flex-col items-center selection:bg-sky-500/30 min-h-screen pb-32">
      {/* background */}
      <StarBackground />

      <div className="z-10 w-full max-w-6xl px-6 pt-12">
        <Link href="/">
          <Button variant="ghost" className="text-sky-300 hover:text-white hover:bg-sky-900/30 -ml-4 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Button>
        </Link>
        
        <div className="mb-24 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            The solar system timeline
          </h1>
          <p className="text-lg text-sky-100/70 max-w-2xl mx-auto md:mx-0">
            Journey outward from the sun. Here are the eight planets ordered by their distance from our star.
          </p>
        </div>

        {/* timeline container */}
        <div className="relative max-w-5xl mx-auto w-full px-2">
          {/* center line (hidden on mobile, centered on desktop) */}
          <div className="absolute left-13 md:left-1/2 top-0 bottom-0 w-1 bg-sky-500/20 md:-translate-x-1/2 rounded-full" />
          
          <div className="flex flex-col gap-24 md:gap-16">
            {planets.map((planet, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={planet.name} className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* planet node on the timeline */}
                  <div className="absolute left-13 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      
                      {/* flat design ring for saturn */}
                      {planet.hasRings && (
                        <div className="absolute w-[160%] h-[40%] rounded-[50%] border-4 border-yellow-200/40 transform -rotate-12" />
                      )}
                      
                      {/* planet circle */}
                      <div className={`${planet.size} rounded-full ${planet.color} ${planet.glow} border-2 border-[#050505] relative z-10`} />
                      
                    </div>
                  </div>
                  
                  {/* card container */}
                  <div className={`w-full pl-28 md:pl-0 md:w-[40%] ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="group bg-sky-950/10 border-sky-500/20 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-900/20 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] overflow-hidden relative">
                      <div className="absolute inset-0 bg-linear-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                            {planet.distance}
                          </span>
                          <span className="text-xs font-semibold tracking-wider text-sky-200/50 uppercase">
                            {planet.type}
                          </span>
                        </div>
                        <CardTitle className="text-3xl text-sky-50 font-bold tracking-wide">
                          {planet.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sky-100/80 text-base leading-relaxed">
                          {planet.fact}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* subtle global gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-linear-to-t from-[#020813] to-transparent z-0 pointer-events-none" />
    </main>
  );
}
