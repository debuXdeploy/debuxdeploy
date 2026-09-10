import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Background } from "@/components/site/Background";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "debuXdeploy — Building Modern Digital Experiences";
const description =
  "debuXdeploy is a software development studio building scalable web apps, AI-powered solutions and enterprise software with a focus on performance and security.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Background />
      <Navbar />
      <main
        className="relative transition-[opacity,filter] duration-1000"
        style={{ opacity: ready ? 1 : 0, filter: ready ? "blur(0px)" : "blur(10px)" }}
      >
        <Hero />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
