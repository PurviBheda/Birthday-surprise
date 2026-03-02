import bf1 from "./assets/1.jpeg";
import bf2 from "./assets/2.jpeg";
import bf3 from "./assets/3.jpeg";
import bf4 from "./assets/4.jpeg";
import bf5 from "./assets/5.jpeg";
import bf6 from "./assets/6.jpeg";
import bf7 from "./assets/7.jpeg";
import bf8 from "./assets/8.jpeg";
import bf9 from "./assets/9.jpeg";

export function Gallery() {
  const photos = [
    { id: 1, url: bf1 },
    { id: 2, url: bf2 },
    { id: 3, url: bf3 },
    { id: 4, url: bf4 },
    { id: 5, url: bf5 },
    { id: 6, url: bf6 },
    { id: 7, url: bf7 },
    { id: 8, url: bf8 },
    { id: 9, url: bf9 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 scroll-mt-24">
      {/* Main Container */}
      <div
        className="w-full max-w-6xl rounded-[2rem] p-6 sm:p-10 lg:p-16"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105"
              style={{
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              <img
                src={photo.url}
                alt={`Memory ${photo.id}`}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Soft Romantic Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 198, 214, 0.35), rgba(111, 176, 195, 0.35))",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
