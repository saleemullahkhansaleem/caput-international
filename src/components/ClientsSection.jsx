import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mineClients = [
  {
    title: "Pakistan Mineral Development Corporation (PMDC)",
    image: "pmdc.webp",
  },
  {
    title: "Frontier Works Organization (FWO)",
    image: "fwo.webp",
  },
  {
    title: "Sindh Engro Coal Mining Company (SECMC)",
    image: "secmc.webp",
  },
  {
    title: "Balochistan Minerals Exploration Company (BMEC)",
    image: "bmec.webp",
  },
  {
    title: "Saindak Metals Limited (SML)",
    image: "sml.webp",
  },
];

export default function ClientsSection() {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-semibold text-primary mb-6">
        Our Mine Clients
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full container">
        {mineClients.map((client) => (
          <div
            key={client.title}
            className="overflow-hidden flex flex-col justify-between rounded-none bg-primary/10 border-none shadow-none"
          >
            <h3 className="p-4 font-semibold">{client.title}</h3>
            <img
              src={`https://placehold.co/150x150`}
              // src={`/images/clients/mine/${client.image}`}
              alt={client.title}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
