"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { accent } from "@/lib/colors"

interface HeroContent {
  title: string
  subtitle: string
  buttonText: string
}

const defaultContent: HeroContent = {
  title: "HIGH-IMPACT 3D ANIMATION FOR BRANDS",
  subtitle: "copa",
  buttonText: "Chat With Us",
}

export function Hero() {
  const [content, setContent] = useState<HeroContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const loadContent = () => {
      const savedContent = localStorage.getItem("copa-content")
      if (savedContent) {
        try {
          const parsed = JSON.parse(savedContent)
          if (parsed.hero) {
            setContent(parsed.hero)
          }
        } catch (error) {
          console.error("Error parsing saved content:", error)
        }
      }
    }

    // Load on mount
    loadContent()

    // Listen for storage changes (from other tabs/windows)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "copa-content") {
        loadContent()
      }
    }

    // Listen for custom event (from same tab)
    const handleContentUpdate = () => {
      loadContent()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("copa-content-updated", handleContentUpdate)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("copa-content-updated", handleContentUpdate)
    }
  }, [])

  // Parse title into parts - split by spaces
  // Highlight parts containing "3D" or "ANIMATION"
  const titleParts = content.title.split(" ")

  const buttonNew = (
    <Button asChild className={`rounded-full ${accent.bg} px-6 text-black ${accent.hoverBg90}`}>
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
        {content.buttonText}
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/co-pa-white.svg" alt="Copa logo" width={32} height={32} className="h-8 w-8" />
            <p className={`text-sm uppercase tracking-[0.25em] ${accent.text80}`}>{content.subtitle}</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {titleParts.map((part, index) => {
              // Highlight parts containing "3D" or "ANIMATION"
              const isHighlighted = part.includes("3D") || part.includes("ANIMATION")
              return (
                <span key={index} className="block">
                  {isHighlighted ? (
                    <span className={`${accent.text} drop-shadow-[0_0_20px_rgba(255,69,0,0.35)]`}>{part}</span>
                  ) : (
                    part
                  )}
                </span>
              )
            })}
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className={`mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider ${accent.text}`}>
              {tone === "calm" ? "copa app" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "Conversions",
    sub: "Turn clicks into paying customers.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "Speed",
    sub: "Launch in days, not weeks.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },
  {
    title: "Social-Ready",
    sub: "Made for IG, TikTok, and Meta.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    title: "Standout",
    sub: "Be the product no one scrolls past.",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
  },
  {
    title: "Premium",
    sub: "Look like the market leader.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
  },
]
