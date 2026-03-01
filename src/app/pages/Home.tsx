export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24">
      {/* Main Container */}
      <div
        className="w-full max-w-6xl rounded-[2rem] overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Pink Background with Text */}
          <div
            className="relative p-12 lg:p-16 flex flex-col justify-center"
            style={{ backgroundColor: "#E8CFCF" }}
          >
            {/* Decorative Elements */}
            {/* Star top left */}
            <div className="absolute top-8 left-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="#F5C6D6"
                />
              </svg>
            </div>

            {/* Small circle top right */}
            <div
              className="absolute top-12 right-12 w-8 h-8 rounded-full"
              style={{ backgroundColor: "#F5C6D6", opacity: 0.6 }}
            />

            {/* Dotted grid pattern */}
            <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "#9C6BA0", opacity: 0.4 }}
                />
              ))}
            </div>

            {/* Wavy line decoration */}
            <div className="absolute bottom-32 left-8">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path
                  d="M2 15C8 5 12 5 18 15C24 25 28 25 38 15"
                  stroke="#9C6BA0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Small gift illustration */}
            <div className="absolute bottom-16 right-16">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect
                  x="8"
                  y="12"
                  width="16"
                  height="16"
                  rx="2"
                  fill="#F5C6D6"
                  opacity="0.6"
                />
                <rect
                  x="8"
                  y="8"
                  width="16"
                  height="6"
                  rx="1"
                  fill="#9C6BA0"
                  opacity="0.5"
                />
                <rect
                  x="15"
                  y="8"
                  width="2"
                  height="20"
                  fill="#9C6BA0"
                  opacity="0.6"
                />
                <path
                  d="M16 8C16 8 14 4 12 4C10 4 10 6 12 8H16Z"
                  fill="#9C6BA0"
                  opacity="0.5"
                />
                <path
                  d="M16 8C16 8 18 4 20 4C22 4 22 6 20 8H16Z"
                  fill="#9C6BA0"
                  opacity="0.5"
                />
              </svg>
            </div>

            {/* Abstract circle with dots */}
            <div className="absolute top-1/2 right-8">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="#9C6BA0"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <circle cx="25" cy="10" r="2" fill="#9C6BA0" opacity="0.4" />
                <circle cx="40" cy="25" r="2" fill="#9C6BA0" opacity="0.4" />
                <circle cx="25" cy="40" r="2" fill="#9C6BA0" opacity="0.4" />
                <circle cx="10" cy="25" r="2" fill="#9C6BA0" opacity="0.4" />
              </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl uppercase mb-6"
                style={{
                  fontWeight: 900,
                  color: "#B8884A",
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                }}
              >
                HAPPY BIRTHDAY MY LOVE 🎂🩷
              </h1>
              <p
                className="text-xl lg:text-2xl uppercase tracking-[0.3em] mt-8"
                style={{
                  color: "#9C6BA0",
                  fontWeight: 500,
                }}
              >
                MARCH . 05 . 1995
              </p>
            </div>
          </div>

          {/* Right Side - Blue Background with Balloons */}
          <div
            className="relative p-12 lg:p-16 flex items-center justify-center min-h-[500px] lg:min-h-[600px]"
            style={{ backgroundColor: "#6FB0C3" }}
          >
            {/* Decorative stars */}
            <div className="absolute top-12 left-12">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5L10 1Z"
                  fill="#FFFFFF"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div className="absolute top-20 right-16">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L9 7L15 8L9 9L8 15L7 9L1 8L7 7L8 1Z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Small circles */}
            <div
              className="absolute top-32 left-20 w-6 h-6 rounded-full"
              style={{ backgroundColor: "#F5C6D6", opacity: 0.5 }}
            />
            <div
              className="absolute bottom-24 right-20 w-4 h-4 rounded-full"
              style={{ backgroundColor: "#FFFFFF", opacity: 0.6 }}
            />

            {/* Gift Box and Balloons */}
            <div className="relative">
              {/* Gift Box */}
              <div className="relative z-10">
                <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
                  {/* Box shadow */}
                  <ellipse
                    cx="90"
                    cy="130"
                    rx="60"
                    ry="8"
                    fill="#000000"
                    opacity="0.1"
                  />

                  {/* Box bottom */}
                  <rect
                    x="40"
                    y="60"
                    width="100"
                    height="70"
                    rx="4"
                    fill="#F5C6D6"
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                    }}
                  />

                  {/* Box lid */}
                  <rect
                    x="35"
                    y="50"
                    width="110"
                    height="15"
                    rx="2"
                    fill="#E8CFCF"
                  />

                  {/* Ribbon vertical */}
                  <rect
                    x="85"
                    y="50"
                    width="10"
                    height="80"
                    fill="#9C6BA0"
                    opacity="0.8"
                  />

                  {/* Ribbon horizontal */}
                  <rect
                    x="40"
                    y="75"
                    width="100"
                    height="8"
                    fill="#9C6BA0"
                    opacity="0.6"
                  />

                  {/* Bow */}
                  <path
                    d="M90 50C90 50 75 35 70 30C65 25 65 25 70 30C75 35 85 45 90 50Z"
                    fill="#9C6BA0"
                    opacity="0.7"
                  />
                  <path
                    d="M90 50C90 50 105 35 110 30C115 25 115 25 110 30C105 35 95 45 90 50Z"
                    fill="#9C6BA0"
                    opacity="0.7"
                  />
                  <circle cx="90" cy="50" r="5" fill="#9C6BA0" />
                </svg>
              </div>

              {/* Heart Balloons */}
              {/* Pink heart balloon 1 */}
              <div className="absolute -top-20 left-16 animate-float">
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
                  <defs>
                    <linearGradient
                      id="pinkGrad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F5C6D6" />
                      <stop offset="100%" stopColor="#E8CFCF" />
                    </linearGradient>
                    <filter id="shadow1">
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="4"
                        floodOpacity="0.2"
                      />
                    </filter>
                  </defs>
                  <path
                    d="M30 15C30 15 20 5 15 5C5 5 5 15 15 25L30 40L45 25C55 15 55 5 45 5C40 5 30 15 30 15Z"
                    fill="url(#pinkGrad1)"
                    filter="url(#shadow1)"
                  />
                  <ellipse
                    cx="30"
                    cy="42"
                    rx="3"
                    ry="8"
                    fill="#9C6BA0"
                    opacity="0.3"
                  />
                  <line
                    x1="30"
                    y1="40"
                    x2="30"
                    y2="65"
                    stroke="#9C6BA0"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* White heart balloon */}
              <div className="absolute -top-32 left-32 animate-float-delayed">
                <svg width="50" height="65" viewBox="0 0 50 65" fill="none">
                  <defs>
                    <linearGradient
                      id="whiteGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F5F5F5" />
                    </linearGradient>
                    <filter id="shadow2">
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="4"
                        floodOpacity="0.2"
                      />
                    </filter>
                  </defs>
                  <path
                    d="M25 12C25 12 17 4 13 4C5 4 5 12 13 20L25 32L37 20C45 12 45 4 37 4C33 4 25 12 25 12Z"
                    fill="url(#whiteGrad)"
                    filter="url(#shadow2)"
                  />
                  <ellipse
                    cx="25"
                    cy="34"
                    rx="2.5"
                    ry="7"
                    fill="#9C6BA0"
                    opacity="0.3"
                  />
                  <line
                    x1="25"
                    y1="32"
                    x2="25"
                    y2="60"
                    stroke="#9C6BA0"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Pink heart balloon 2 */}
              <div className="absolute -top-16 right-8 animate-float-slow">
                <svg width="55" height="68" viewBox="0 0 55 68" fill="none">
                  <defs>
                    <linearGradient
                      id="pinkGrad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD4E5" />
                      <stop offset="100%" stopColor="#F5C6D6" />
                    </linearGradient>
                    <filter id="shadow3">
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="4"
                        floodOpacity="0.2"
                      />
                    </filter>
                  </defs>
                  <path
                    d="M27.5 13C27.5 13 19 5 14.5 5C6 5 6 13 14.5 22L27.5 35L40.5 22C49 13 49 5 40.5 5C36 5 27.5 13 27.5 13Z"
                    fill="url(#pinkGrad2)"
                    filter="url(#shadow3)"
                  />
                  <ellipse
                    cx="27.5"
                    cy="37"
                    rx="2.8"
                    ry="7.5"
                    fill="#9C6BA0"
                    opacity="0.3"
                  />
                  <line
                    x1="27.5"
                    y1="35"
                    x2="27.5"
                    y2="63"
                    stroke="#9C6BA0"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
