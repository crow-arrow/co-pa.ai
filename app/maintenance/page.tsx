import type { Metadata } from "next"
import Image from "next/image"
import { Wrench } from "lucide-react"
import { accent } from "@/lib/colors"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Maintenance | Copa",
  description: "The site is temporarily unavailable — we'll be back soon.",
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="liquid-glass-enhanced rounded-3xl px-8 py-12 sm:px-12 sm:py-14">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <Image
              src="/icons/co-pa-white.svg"
              alt="Copa"
              width={80}
              height={80}
              className="h-20 w-20"
              priority
            />
          </div>

          <div
            className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg10} ring-1 ring-accent/20`}
          >
            <Wrench
              className={`h-7 w-7 ${accent.text} animate-[spin_4s_linear_infinite]`}
              aria-hidden
            />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Down for maintenance — we&apos;ll be back soon
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-white/60">
            We&apos;re updating the site to make it even better. Check back in a bit — we&apos;re
            almost there.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2" aria-hidden>
            <span className={`h-2 w-2 rounded-full ${accent.bg} animate-pulse`} />
            <span className={`h-2 w-2 rounded-full ${accent.bg} animate-pulse [animation-delay:200ms]`} />
            <span className={`h-2 w-2 rounded-full ${accent.bg} animate-pulse [animation-delay:400ms]`} />
          </div>

          <p className="mt-8 text-sm text-white/40">
            Urgent question?{" "}
            <a
              href="mailto:info@co-pa.ai"
              className={`${accent.text} transition-opacity hover:opacity-80`}
            >
              info@co-pa.ai
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
