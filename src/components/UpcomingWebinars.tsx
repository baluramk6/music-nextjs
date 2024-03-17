"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

let featuredWebinars = [
  {
    title: "Guitar Fundamentals",
    description:
      "Learn the basics of guitar playing, including chords, strumming patterns, and fundamental techniques.",
    slug: "guitar-fundamentals",
    isFeatured: true,
  },
  {
    title: "Piano Mastery",
    description:
      "Unlock the secrets of piano playing with comprehensive lessons covering technique, theory, and repertoire.",
    slug: "piano-mastery",
    isFeatured: true,
  },
  {
    title: "Vocal Techniques",
    description:
      "Discover your vocal potential through exercises, warm-ups, and repertoire exploration with professional instructors.",
    slug: "vocal-techniques",
    isFeatured: false,
  },
  {
    title: "Music Theory Essentials",
    description:
      "Understand the building blocks of music, including scales, chords, harmony, and notation, to enhance your musical knowledge.",
    slug: "music-theory-essentials",
    isFeatured: false,
  },
  {
    title: "Songwriting Workshop",
    description:
      "Craft your own songs from scratch with guidance on lyric writing, melody creation, and song structure.",
    slug: "songwriting-workshop",
    isFeatured: true,
  },
  {
    title: "Drum Grooves and Beats",
    description:
      "Master the art of drumming with lessons on rhythm, timing, and various drumming styles to groove with confidence.",
    slug: "drum-grooves-and-beats",
    isFeatured: false,
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Featured Webinars
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10">
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect
                items={featuredWebinars.map((webinar) => {
                  return {
                    title: webinar.title,
                    description: webinar.description,
                    link: webinar.slug,
                  };
                })}
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"#"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
