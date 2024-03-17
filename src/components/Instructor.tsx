"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

let instructorProfiles = [
  {
    id: 1,
    name: "John Doe",
    designation: "Guitar Instructor",
    image: "https://source.unsplash.com/100x100/?portrait",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Piano Instructor",
    image: "https://source.unsplash.com/100x100/?person",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Vocal Coach",
    image: "https://source.unsplash.com/100x100/?face",
  },
  {
    id: 4,
    name: "Emily Brown",
    designation: "Music Theory Teacher",
    image: "https://source.unsplash.com/100x100/?people",
  },
  {
    id: 5,
    name: "David Wilson",
    designation: "Drum Instructor",
    image: "https://source.unsplash.com/100x100/?human",
  },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-cneter mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row justify-center items-center mb-10 w-full">
          <AnimatedTooltip items={instructorProfiles} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructor;
