import { Card, CardContent } from "@/components/ui/card";
import { Gift, Gamepad2, Trophy, Coins } from "lucide-react";

export default function Awards() {
  return (
    <section className="relative overflow-hidden bg-black py-20 mt-20">
      {/* Content container */}
      <div className="container relative mx-auto px-4 w-3/4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="flex justify-center gap-12 ">
            {" "}
            <p className="mb-6 text-5xl font-bold tracking-tight bg-clip-text text-cyan-400 md:text-6xl lg:text-7xl hidden sm:flex">
              /
            </p>
            <h2 className="mb-6 text-4xl font-regular  text-white/90 md:text-6xl lg:text-7xl tracking-wider text-nowrap ">
              BENEFIT FROM US
            </h2>
            <p className="mb-6 text-5xl font-bold tracking-tight text-cyan-400 md:text-6xl lg:text-7xl hidden sm:flex">
              /
            </p>
          </span>

          <p className="text-slate-400 text-md lg:text-xl mt-10">
            By using our promo codes, you are eligible for all the rewards
            listed below. Every user who redeems the promo code will receive the
            same rewards, regardless of when they decide to use it. Don&apos;t
            miss out on the chance to enjoy these exclusive benefits & perks!
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Gift className="h-8 w-8" />,
              title: "Free Daily Cases",
              description:
                "Get a free csgo cases every day from our partner websites,.",
            },
            {
              icon: <Gamepad2 className="h-8 w-8" />,
              title: "Free Coins",
              description:
                "Get free coins instantly by using the promo code, no deposit required.",
            },
            {
              icon: <Trophy className="h-8 w-8" />,
              title: "Giveaways",
              description: "Join our giveaways for a chance to win rare skins.",
            },
            {
              icon: <Coins className="h-8 w-8" />,
              title: "Deposit Bonus",
              description:
                "Make a deposit and receive a bonus to boost your chances.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group border-cyan-600 bg-black/50 transition-colors hover:border-cyan-400/50"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-cyan-950/50 p-3 text-cyan-400 transition-colors group-hover:bg-cyan-900/50">
                  {feature.icon}
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
