import {
  Eye,
  Coins,
  TrendingUp,
  CalendarClock,
  Map,
  ListOrdered,
  Rocket,
  MapPin,
  Globe,
  ListChecks,
  Target,
  LayoutTemplate,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Maps the string icon names used in lib/content.ts to lucide components. */
export const icons: Record<string, LucideIcon> = {
  eye: Eye,
  coins: Coins,
  trending: TrendingUp,
  calendar: CalendarClock,
  map: Map,
  list: ListOrdered,
  rocket: Rocket,
  pin: MapPin,
  globe: Globe,
  checks: ListChecks,
  target: Target,
  layout: LayoutTemplate,
  workflow: Workflow,
};
