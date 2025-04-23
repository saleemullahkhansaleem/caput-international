const mineClients = [
  {
    title: "Master Tiles & Ceramic",
    image: "master-tiles.webp",
  },
  {
    title: "Frontier Ceramics",
    image: "frontier-ceramics.webp",
  },
  {
    title: "Time Ceramics",
    image: "time-ceramics.webp",
  },
];

export default function ClientsSection() {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-semibold text-primary mb-6">Our Clients</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full container">
        {mineClients.map((client) => (
          <div
            key={client.title}
            className="p-4 overflow-hidden flex flex-col justify-between rounded-none bg-primary/10 border-none shadow-none"
          >
            <h3 className="font-semibold mb-4">{client.title}</h3>
            <img
              src={`/images/clients/${client.image}`}
              alt={client.title}
              className="w-full aspect-square object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
