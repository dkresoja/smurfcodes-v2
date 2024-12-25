import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Trophy } from "lucide-react";

interface GiveawayItem {
  id: string;
  name: string;
  date: string;
  winner?: {
    name: string;
    avatar: string;
  };
}

const recentGiveaways: GiveawayItem[] = [
  {
    id: "1",
    name: "AWP | Asiimov",
    date: "2024-12-20",
    winner: { name: "Player123", avatar: "/placeholder.svg" },
  },
  {
    id: "2",
    name: "Karambit | Fade",
    date: "2024-12-18",
    winner: { name: "GamerPro", avatar: "/placeholder.svg" },
  },
  { id: "3", name: "AK-47 | Vulcan", date: "2024-12-15" },
  {
    id: "4",
    name: "M4A4 | Howl",
    date: "2024-12-10",
    winner: { name: "CS2Master", avatar: "/placeholder.svg" },
  },
];

export function RecentGiveaways() {
  return (
    <div className="py-12">
      {" "}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            Recent Giveaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentGiveaways.map((giveaway) => (
              <li
                key={giveaway.id}
                className="flex items-start space-x-3 text-sm"
              >
                <Gift className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-white">{giveaway.name}</p>
                  <p className="text-gray-400">{giveaway.date}</p>
                  {giveaway.winner && (
                    <div className="flex items-center mt-1">
                      <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                      <div className="flex items-center">
                        <div className="relative w-5 h-5 mr-2">
                          <Image
                            src={giveaway.winner.avatar}
                            alt={`${giveaway.winner.name}'s avatar`}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <span className="text-yellow-500">
                          {giveaway.winner.name}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <Badge variant="secondary" className="flex-shrink-0">
                  {giveaway.winner ? "Completed" : "Ongoing"}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
