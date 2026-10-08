import { Hero } from "@/components/sections/Hero";
import { Arc } from "@/components/sections/Arc";
import { Sprints } from "@/components/sections/Sprints";
import { Work } from "@/components/sections/Work";
import { Research } from "@/components/sections/Research";
import { Thoughts } from "@/components/sections/Thoughts";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Arc />
      <Sprints />
      <Work />
      <Research />
      <Thoughts />
      <Contact />
    </main>
  );
}
