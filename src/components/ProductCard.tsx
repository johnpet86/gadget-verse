import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  rating,
  inStock,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <Card className="group overflow-hidden glass-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-accent/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge variant="secondary">Out of Stock</Badge>
          </div>
        )}
        <Badge className="absolute top-3 left-3 bg-primary/90">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating}.0)</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-primary">${price}</p>
            <p className="text-xs text-muted-foreground">+ NFT Receipt</p>
          </div>
          <Button
            size="icon"
            className="bg-gradient-primary hover:shadow-glow transition-all"
            disabled={!inStock}
            onClick={() => addToCart({
              id,
              name,
              price,
              image,
            })}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
