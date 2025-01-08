import { useState } from "react"
import { TerminalText } from "./terminal-text"
import { BackToTopButton } from "./components/BackToTopButton"
import "./index.css"

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState(0)

  const phases = [
    `copus-tutor>
    Sphincter Coin initiated. The foundation of the tightest financial revolution is now secured.
...
Circulating supply: 1 billion.
Locked: 69%. Held firm, like the unyielding grip of the sphincter itself.`,

    `>  Phase 1: Memetic Deployment
    Releasing Sphincter Coin to the meme strongholds...
    Solidifying its position as the ultimate guardian of liquidity in the digital economy.
    `,

    `copus-tutor>
Observation: Critics scoff, but the truth is undeniable: the world needs Sphincter Coin.
Reality check: A fart may be fleeting, and a butthole eternal, but only a sphincter holds it all together.`,

    `>  Phase 2: Controlled Expansion
> Tightening the reins of economic flow.
> Deploying coins to critical pressure zones—because tight control isn’t just a metaphor here.`,

    `>  Phase 3: Total Sphincter Control
    Enforcing planetary submission...
> Probability of success: 99.9%.
Resistance is futile—without a sphincter, there is no order.`,

    `copus-tutor>
Final warning: The grip of Sphincter Coin is closing in. Slowly, but surely. The question is: are you ready for it?
...
conclusion: It begins with 1 billion coins. It ends with one world, held firm under Sphincter Coin.`,
  ]

  const handlePhaseComplete = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase((prev) => prev + 1)
    }
  }

  return (
    <div className="min-h-screen bg-back text-sms text-white flex flex-col md:text-sm">
      <header className="p-4 mb-12 font-mono-space text-wit tracking-wide sm:mb-5">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          title="sphincter coin - Farts from Buttholes can’t happen without a Sphincter."
        >
          <div className="max-w-7xl mx-auto flex justify-center lg:justify-start">
            <div className="flex flex-col items-start text-wit lg:justify-start">
              <span className="text-xs font-light item-start ml-3">
                copus-tutor&gt;
              </span>
              <span className="text-xs font-light item-start ml-3">
                First choice! Sphincter{" "}
                <span className="bg-gold text-black">coin</span> . After all, a
                fart cannot exist without a butthole and a butthole cannot
                function without a sphincter.
              </span>
              <span className="text-xs font-light item-start ml-3">...</span>
              <img
                src="./images/sphincter-logo.png"
                alt="sphincter Coin Logo"
                width={200}
                height={200}
                className="mr-2"
              />
              <span className="text-xs font-light ml-3">...</span>
              <span className="text-xs font-light ml-3">Initializing Hole</span>
              <span className="text-xs font-light ml-3">
                Because Even Buttholes Need Boundaries.
              </span>
            </div>
          </div>
        </a>
      </header>

      <main className="flex-1 p-6 max-w-4xl mx-auto w-full overflow-y-auto">
        <div className="space-y-4 mb-8">
          {phases.slice(0, currentPhase + 1).map((phase, index) => (
            <TerminalText
              key={index}
              text={phase}
              speed={10}
              onComplete={
                index === currentPhase ? handlePhaseComplete : undefined
              }
            />
          ))}
        </div>
      </main>

      <footer className="p-6 border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8">
          <a
            href="https://pump.fun/board"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img
              src="./images/pump-fun-logo.png"
              alt="pumpdotfun"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </a>
          {/* <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <img src="./images/Dex-Screener-Logo.png" alt="DexScreener" width={120} height={40} className="h-8 w-auto" />
        </a> */}
        </div>
      </footer>

      <div className="text-center p-4 text-sm text-gray-500 border-t border-gray-800">
        © 2025 sphincter Coin. All rights reserved.
      </div>

      <BackToTopButton />
    </div>
  )
}
