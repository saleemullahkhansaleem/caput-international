import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const corporateGifts = [
  {
    title: "Unboxing Experience Box",
    image: "unboxing-box.webp",
  },
  {
    title: "Table Planner",
    image: "table-planner.webp",
  },
  {
    title: "A New Start Hamper",
    image: "new-start-hamper.webp",
  },
  {
    title: "Custom Tent Desk Calendar",
    image: "tent-calendar.webp",
  },
  {
    title: "Glorious New Year Box",
    image: "new-year-box.webp",
  },
  {
    title: "Premium Leather Notebook and Pen Gift",
    image: "leather-notebook.webp",
  },
  {
    title: "The New Year Luxe Kit",
    image: "luxe-kit.webp",
  },
  {
    title: "Mini Calendar",
    image: "mini-calendar.webp",
  },
  {
    title: "Dreamy Gift Basket",
    image: "gift-basket.webp",
  },
  {
    title: "Corporate Classic Journal & Pen Combo",
    image: "journal-pen.webp",
  },
];

export default function CorporateGifts() {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-semibold text-primary mb-6">
        Some of Corporate Gifts
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full container">
        {corporateGifts.map((gift) => (
          <div
            key={gift.title}
            className="overflow-hidden flex flex-col justify-between rounded-none bg-primary/10 border-none shadow-none"
          >
            <h3 className="p-4 font-semibold">{gift.title}</h3>
            <img
              // src="https://placehold.co/400"
              src={`/images/corporate-gifts/${gift.image}`}
              alt={gift.title}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
