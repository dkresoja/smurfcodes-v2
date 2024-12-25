"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Trophy,
  User,
  Gift,
} from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export default function GiveawayPage() {
  const recentGiveaways = [
    {
      name: "AWP | Asiimov",
      date: "2024-12-20",
      status: "Completed",
      winner: "Player123",
    },
    {
      name: "Karambit | Fade",
      date: "2024-12-18",
      status: "Completed",
      winner: "GamerPro",
    },
    {
      name: "AK-47 | Vulcan",
      date: "2024-12-15",
      status: "Ongoing",
    },
    {
      name: "M4A4 | Howl",
      date: "2024-12-10",
      status: "Completed",
      winner: "CS2Master",
    },
  ];
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [steamId, setSteamId] = useState("");
  const requirements = [
    {
      label: "Have a public Steam profile",
      met: false,
    },
    {
      label: "Steam level 2 or higher",
      met: false,
    },
    {
      label: "CS2 Prime Status on account",
      met: false,
    },
    {
      label: (
        <span className="flex items-center gap-2">
          Visit{" "}
          <a
            href="https://plg.bet/?r=CS2FR"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            PLG.bet <ExternalLink className="h-4 w-4" />
          </a>
        </span>
      ),
      met: false,
    },
    {
      label: (
        <span className="flex items-center gap-2 flex-wrap">
          Apply promo code <CopyButton value="CS2FR" className="text-white" />
        </span>
      ),
      met: false,
    },
  ];

  useEffect(() => {
    const endDate = new Date("2024-12-31T12:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("Steam ID submitted:", steamId);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 flex xl:flex-row md:flex-col justify-around">
      <div className="max-w-4xl space-y-6">
        {/* Main Giveaway Section - 3/4 width on desktop */}
        <div className="lg:col-span-3"></div>
        {/* Main Giveaway Card */}
        <Card className="bg-black border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Steam Item Section */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/photos/smurfcodes.png"
                  alt="Steam Item"
                  fill
                  className="object-cover"
                  priority
                />
                <Badge className="absolute top-4 right-4 bg-blue-500">
                  GIVEAWAY
                </Badge>
              </div>

              {/* Modern Timer Section */}
              <div className="bg-gradient-to-r from-cyan-600 to-sky-500 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4 text-white">
                  Time Remaining
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center bg-white bg-opacity-20 rounded-lg p-3"
                    >
                      <span className="text-5xl font-bold text-white mb-2">
                        {item.value.toString().padStart(2, "0")}
                      </span>
                      <span className="text-sm uppercase tracking-wide text-blue-100">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Item Details */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white">
                  AWP Asiimov Field-Tested
                </h1>
                <p className="text-gray-400 text-lg">
                  Dont miss your chance to win this exclusive CS2 knife skin!
                  Enter the giveaway before time runs out.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements Card */}
        <Card className="bg-black border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Requirements</h2>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg"
                >
                  {req.met ? (
                    <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="text-cyan-500 h-6 w-6 flex-shrink-0" />
                  )}
                  <span className="text-lg flex items-center gap-2 flex-wrap text-white">
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Steam ID Card */}
        <Card className="bg-black border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Enter Your Steam ID
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="steamId" className="text-lg text-gray-300">
                  Steam ID or Profile URL
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="steamId"
                    type="text"
                    value={steamId}
                    onChange={(e) => setSteamId(e.target.value)}
                    placeholder="Enter your Steam ID or profile URL"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-lg py-6"
                  />
                  <Button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-lg py-6"
                  >
                    Submit
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  Make sure your Steam profile is public before submitting
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
