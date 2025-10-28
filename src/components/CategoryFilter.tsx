import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  Cable, 
  Smartphone, 
  Battery, 
  Mic,
  Sparkles
} from "lucide-react";

const categories = [
  { id: "all", label: "All Products", icon: Sparkles },
  { id: "audio", label: "Audio", icon: Headphones },
  { id: "cables", label: "Cables & Chargers", icon: Cable },
  { id: "cases", label: "Phone Cases", icon: Smartphone },
  { id: "power", label: "Power Banks", icon: Battery },
  { id: "accessories", label: "Accessories", icon: Mic },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isActive ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex-shrink-0 gap-2 transition-all
              ${isActive 
                ? "bg-gradient-primary shadow-glow" 
                : "glass-card border-primary/20 hover:border-primary/40"
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};
