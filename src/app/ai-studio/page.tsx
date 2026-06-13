"use client";

import Link from "next/link";
import {
  Sparkles,
  Code2,
  Image,
  Video,
  Mic,
  Music,
  Rocket,
  Globe2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const tools = [
  {
    title: "Generate Code",
    desc: "Build apps, APIs, websites, dashboards, and automation.",
    href: "/ai-studio/ai-code",
    icon: Code2,
  },
  {
    title: "Generate Image",
    desc: "Create cinematic visuals, brand art, ads, and product shots.",
    href: "/ai-studio/image",
    icon: Image,
  },
  {
    title: "Generate Video",
    desc: "Turn prompts into motion clips, promos, reels, and stories.",
    href: "/ai-studio/video",
    icon: Video,
  },
  {
    title: "Generate Voice",
    desc: "Create voiceovers, narrations, agents, and audio assistants.",
    href: "/ai-studio/voice",
    icon: Mic,
  },
  {
    title: "Generate Music",
    desc: "Produce beats, loops, intros, background music, and themes.",
    href: "/ai-studio/music",
    icon: Music,
  },
  {
    title: "Auto Deploy",
    desc: "Generate, package, push, and deploy projects automatically.",
    href: "/ai-studio/auto-deploy",
    icon: Rocket,
  },
];

export default function AIStudioPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden pb-28">
      <section className="relative px-6 pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffd40033,transparent_35%),radial-gradient(circle_at_80%_20%,#ff007a33,transparent_35%),radial-gradient(circle_at_20%_70%,#9b5cff33,transparent_35%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="rounded-[36px] border-4 border-white bg-[#111] p-6 shadow-[12px_12px_0_#ffd400]">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-black px-4 py-2 font-black mb-6">
              <Sparkles size={18} />
              AMOSCLAUD INTERNATIONAL AI
            </div>

            <h1 className="text-5xl sm:text-7xl font-black leading-none tracking-tight">
              FUTURE AI
              <br />
              BUSINESS SYSTEM
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-zinc-300 font-semibold">
              Create code, images, videos, voices, music, business tools, and
              deployable digital products from one AI command center.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat label="AI Tools" value="6+" />
              <Stat label="Markets" value="Global" />
              <Stat label="Speed" value="Instant" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const colors = [
                "bg-yellow-400 text-black shadow-[10px_10px_0_#9b5cff]",
                "bg-[#ff007a] text-white shadow-[10px_10px_0_#ffd400]",
                "bg-[#9b5cff] text-white shadow-[10px_10px_0_#00e5ff]",
                "bg-white text-black shadow-[10px_10px_0_#ff007a]",
                "bg-[#151515] text-white shadow-[10px_10px_0_#ffd400]",
                "bg-[#00e5ff] text-black shadow-[10px_10px_0_#ff007a]",
              ];

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className={`group rounded-[30px] border-4 border-black p-6 min-h-[220px] transition-transform active:scale-95 ${colors[index]}`}
                >
                  <div className="h-16 w-16 rounded-2xl bg-black text-yellow-400 flex items-center justify-center mb-8">
                    <Icon size={34} />
                  </div>

                  <h2 className="text-3xl font-black leading-none uppercase">
                    {tool.title}
                  </h2>

                  <p className="mt-4 text-base font-bold opacity-80">
                    {tool.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 rounded-[34px] border-4 border-white bg-[#111] p-6 shadow-[10px_10px_0_#ff007a]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Feature
                icon={BrainCircuit}
                title="AI Brain"
                desc="One command system for creation, automation, and business."
              />
              <Feature
                icon={Globe2}
                title="Global Ready"
                desc="Built for international creators, startups, and digital teams."
              />
              <Feature
                icon={ShieldCheck}
                title="Business Core"
                desc="Designed for products, services, admin tools, and deployment."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white text-black p-4 border-4 border-black">
      <p className="text-xs font-black uppercase tracking-widest opacity-60">
        {label}
      </p>
      <p className="text-2xl font-black">{value}</p>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-black border-2 border-zinc-700 p-5">
      <Icon className="text-yellow-400 mb-4" size={34} />
      <h3 className="text-xl font-black">{title}</h3>
      <p className="text-zinc-400 font-semibold mt-2">{desc}</p>
    </div>
  );
}
