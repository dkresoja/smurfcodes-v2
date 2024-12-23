import { ChevronDown } from "lucide-react";

export function BouncingArrow() {
  return (
    <div className="flex justify-center mt-2">
      <ChevronDown className="text-white animate-bounce" size={24} />
    </div>
  );
}
