export default function Footer() {
  const sites = [
    "CSGOFAST",
    "FARMSKINS",
    "keydrop",
    "CSGO LUCK",
    "CSGOPOLYGON",
    "CSGOEMPIRE",
    "500 CASINO",
    "ROLLBIT",
    "DATDROP",
  ];

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {sites.map((site) => (
            <img
              key={site}
              src={`/placeholder.svg?height=30&width=100&text=${site}`}
              alt={site}
              className="h-8"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
