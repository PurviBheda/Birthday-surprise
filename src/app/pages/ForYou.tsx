export function ForYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24">
      {/* Main Container */}
      <div
        className="w-full max-w-5xl rounded-[2rem] p-12 lg:p-20 relative overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative Background Shapes */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 198, 214, 0.3), rgba(232, 207, 207, 0.3))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(111, 176, 195, 0.25), rgba(156, 107, 160, 0.25))",
          }}
        />

        {/* Decorative Stars */}
        <div className="absolute top-12 left-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="#F5C6D6"
            />
          </svg>
        </div>

        <div className="absolute top-24 right-20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5L10 1Z"
              fill="#6FB0C3"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="absolute bottom-16 right-16">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1L10.5 7.5L17 9L10.5 10.5L9 17L7.5 10.5L1 9L7.5 7.5L9 1Z"
              fill="#9C6BA0"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h2
            className="text-4xl lg:text-6xl xl:text-7xl mb-8"
            style={{
              fontWeight: 800,
              color: "#B8884A",
              letterSpacing: "0.05em",
              lineHeight: 1.3,
            }}
          >
            To My Forever💘
          </h2>

          <div
            className="text-lg lg:text-2xl leading-relaxed space-y-6 max-w-3xl mx-auto"
            style={{
              color: "#9C6BA0",
              fontWeight: 400,
            }}
          >
            <p>Happy Birthday Jaanuu 🎂</p>
            <p>I Love You 😚🩷</p>

            <p>
              5th March, 2.5 years back, this was just a normal day for me.
              But I could never have imagined that this was the day when the
              love of my life was born 🥹. Your beautiful smile, your cute eyes
              that i keep falling for, your kuchu puchu nose 😚, your messy hair,
              everything about you, I just love it. Ummahhhh 😚😚😚 I wish I
              were there to wish you and celebrate your special day, but kai
              nai... hu to tamari andar besine tamaro birthday celebrate karis heheee 😛
            </p>

            <p>
              Wishing you the happiest birthday my love 🎂
            </p>

            <p>
              Parvati’s blessings are always with you 😌✋🏻
            </p>

            <p
              className="text-2xl lg:text-3xl mt-10"
              style={{
                fontWeight: 600,
                color: "#B8884A",
              }}
            >
              Sending you lots of love and chummiss 😚💖😚💖😚
            </p>
          </div>

          {/* Decorative Bottom Animation */}
          <div className="mt-12 flex justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full animate-pulse"
              style={{ backgroundColor: "#F5C6D6", opacity: 0.6 }}
            />
            <div
              className="w-12 h-12 rounded-full animate-pulse"
              style={{
                backgroundColor: "#6FB0C3",
                opacity: 0.6,
                animationDelay: "0.3s",
              }}
            />
            <div
              className="w-12 h-12 rounded-full animate-pulse"
              style={{
                backgroundColor: "#9C6BA0",
                opacity: 0.6,
                animationDelay: "0.6s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
