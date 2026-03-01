import bf1 from "./assets/1.jpeg";
import bf2 from "./assets/2.jpeg";
import bf3 from "./assets/3.jpeg";
import bf4 from "./assets/4.jpeg";
import bf5 from "./assets/5.jpeg";
import bf6 from "./assets/6.jpeg";
import bf7 from "./assets/7.jpeg";
import bf8 from "./assets/8.jpeg";

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
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24">
      {/* Main Container */}
      <div
        className="w-full max-w-6xl rounded-[2rem] p-12 lg:p-16"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Title */}
        <h2
          className="text-4xl lg:text-5xl uppercase text-center mb-12"
          style={{
            fontWeight: 800,
            color: "#B8884A",
            letterSpacing: "0.1em",
          }}
        >
          
        </h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              <img
                src={photo.url}
                alt={`Memory ${photo.id}`}
                className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Romantic Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 198, 214, 0.4), rgba(111, 176, 195, 0.4))",
                }}
              >
                <span
                  className="text-white text-sm tracking-wider"
                  style={{
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


