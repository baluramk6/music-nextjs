"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    title: "Music Education Director",
    name: "John Smith",
    quote:
      "At our music school, we believe that every student has the potential to become a great musician. With our experienced instructors and diverse range of courses, we strive to nurture talent and inspire creativity.",
  },
  {
    title: "Head of Piano Department",
    name: "Emily Johnson",
    quote:
      "As a pianist myself, I understand the importance of quality instruction and personalized guidance. Our music school offers one-on-one piano lessons tailored to each student's unique learning style, ensuring progress and enjoyment.",
  },
  {
    title: "Voice Instructor",
    name: "Michael Davis",
    quote:
      "Unlock your vocal potential and discover the joy of singing at our music school. Whether you're a beginner or an experienced vocalist, our expert instructors are dedicated to helping you develop your voice and express yourself through music.",
  },
  {
    title: "Guitar Instructor",
    name: "Sarah Thompson",
    quote:
      "Learn to play the guitar like a pro with our comprehensive guitar lessons. From basic chords to advanced techniques, our experienced instructors will guide you every step of the way, helping you unleash your musical creativity.",
  },
  {
    title: "Drumming Specialist",
    name: "David Martinez",
    quote:
      "Get ready to rock the rhythm with our drumming lessons! Our music school offers dynamic and engaging drum classes for all skill levels, where you'll learn essential techniques and grooves to become a confident drummer.",
  },
  {
    title: "Music Theory Teacher",
    name: "Jessica Lee",
    quote:
      "Understanding music theory is essential for any aspiring musician. Our dedicated music theory teachers will demystify complex concepts and help you build a solid foundation, empowering you to compose, improvise, and analyze music with confidence.",
  },
  {
    title: "Strings Instructor",
    name: "Alex Turner",
    quote:
      "Embark on a musical journey with our strings program! Whether you're passionate about the violin, viola, cello, or double bass, our experienced instructors will help you master your instrument and unleash your musical potential.",
  },
];

function InfinityMovingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:text-white dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="wifull max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default InfinityMovingCards;
