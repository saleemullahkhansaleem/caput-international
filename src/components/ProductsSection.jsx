import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const mineProducts = [
  {
    title: "White Marble",
    description:
      "Premium-quality white marble known for its elegance, durability, and versatility in construction and interior design.",
    image: "white-marble.webp",
  },
  {
    title: "Black Granite",
    description:
      "A strong and dense natural stone with a deep black finish, ideal for countertops, flooring, and monuments due to its durability.",
    image: "black-granite.webp",
  },
  {
    title: "Quartz",
    description:
      "A high-purity mineral used in engineered stone, glassmaking, and industrial applications for its hardness and chemical stability.",
    image: "quartz.webp",
  },
  {
    title: "Feldspar",
    description:
      "A key mineral in ceramics, glassmaking, and coatings, valued for its alumina and silica content that enhances product quality.",
    image: "feldspar.webp",
  },
];

export default function ProductsSection() {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-semibold text-primary mb-6">Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {mineProducts.map((product) => (
          <div
            key={product.title}
            className="overflow-hidden flex flex-col justify-between rounded-none bg-primary/10 border-none shadow-none"
          >
            <img
              src={`/images/products/mine/${product.image}`}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
}
