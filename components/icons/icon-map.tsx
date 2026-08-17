import {
  Globe,
  Workflow,
  MessageCircle,
  PhoneCall,
  Utensils,
  Stethoscope,
  Sparkles,
  Hotel,
  Building2,
  ShoppingBag,
  Briefcase,
  Repeat,
  Clock,
  Shuffle,
  MonitorX,
  Target,
  Layers,
  Puzzle,
  MessageSquare,
  TrendingUp,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  workflow: Workflow,
  "message-circle": MessageCircle,
  "phone-call": PhoneCall,
  utensils: Utensils,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  hotel: Hotel,
  "building-2": Building2,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
  repeat: Repeat,
  clock: Clock,
  shuffle: Shuffle,
  "monitor-x": MonitorX,
  target: Target,
  layers: Layers,
  puzzle: Puzzle,
  "message-square": MessageSquare,
  "trending-up": TrendingUp,
  "life-buoy": LifeBuoy,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Globe;
  return <Cmp className={className} aria-hidden />;
}
