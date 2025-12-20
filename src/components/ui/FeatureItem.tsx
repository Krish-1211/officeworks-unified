import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

const FeatureItem = ({ icon: Icon, text, className }: FeatureItemProps) => {
  return (
    <div className={cn("flex items-start gap-4 group", className)}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-secondary" />
      </div>
      <p className="text-foreground/80 pt-2">{text}</p>
    </div>
  );
};

export default FeatureItem;
