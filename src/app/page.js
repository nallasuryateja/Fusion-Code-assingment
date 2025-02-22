import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center text-center text-black">
      {/* Hero Section */}
      {/* <div className="relative w-full h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Children playing"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Child's Perfect Schedule
            <br /> in Just a Few Clicks
          </h1>
          <p className="text-lg md:text-xl mt-3">Less Planning, More Living.</p>
          <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg flex items-center gap-2">
            <span>✨ Join the waiting list</span>
          </button>
        </div>
      </div> */}
      <div className="relative w-full h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Children playing"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Child's Perfect Schedule
            <br /> in Just a Few Clicks
          </h1>
          <p className="text-lg md:text-xl mt-3">Less Planning, More Living.</p>
          {/* <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg flex items-center gap-2">
            <span>✨ Join the waiting list</span>
          </button> */}
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg flex items-center gap-2">
              <span>✨ Join the waiting list</span>
            </button>
          </div>

          {/* <button className="w-full max-w-xs px-6 py-3 bg-[#FF97A8] hover:bg-[#FF8095] text-black rounded-full flex items-center justify-center gap-2">
            <span className="text-[18px] font-medium font-lato tracking-[-0.5px]">
              ✨ Join the waiting list
            </span>
          </button> */}
        </div>
      </div>

      {/* Why JustLiv Section */}
      <div className="w-full max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why JustLiv?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">✨ Custom Calendar</h3>
            <p className="text-gray-600">
              Our Custom Activities Calendar instantly creates a personalized
              schedule based on your preferences, budget, and location.
            </p>
            <Image
              src="/laptop.png"
              alt="Custom Calendar"
              width={300}
              height={200}
              className="mt-4 rounded-lg"
            />
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              ✨ Tailored to Your Interests
            </h3>
            <p className="text-gray-600">
              Filters let you choose activities by age, category, price, and
              more. Social features help you sync schedules with friends.
            </p>
            <Image
              src="/child.png"
              alt="Tailored Interests"
              width={300}
              height={200}
              className="mt-4 rounded-lg"
            />
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              ✨ Stress-Free Bulk Booking
            </h3>
            <p className="text-gray-600">
              Book all your child's activities in just a few clicks. Our
              platform handles the details so you don't have to.
            </p>
            <Image
              src="/mother1.png"
              alt="Bulk Booking"
              width={300}
              height={200}
              className="mt-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="w-full bg-gradient-to-b from-blue-900 to-blue-700 text-white py-12 px-6"
        style={{ backgroundImage: 'url("/images/sky.png")' }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">How it works</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-full">
              <Image
                src="/images/browse-icon.png"
                alt="Browse"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold flex flex-start">Browse</h3>
              <p>Discover activities from our partner booking providers.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-full">
              <Image
                src="/images/build-icon.png"
                alt="Build"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold flex flex-start">Build</h3>
              <p>
                Share your child's interests, schedule, and preferences. Watch
                as JustLiv creates the perfect calendar filled with activities.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-4 rounded-full">
              <Image
                src="/images/book-icon.png"
                alt="Book"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold flex flex-start">Book</h3>
              <p>
                Finalize your selections with one click and enjoy peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section - Updated styling */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto [@media(width<=350px)]:w-[340px] md:w-[550px] w-[360px] md:px-0 px-6 text-center relative">
          <h2 className="text-3xl font-semibold mb-4 flex md:justify-center justify-start md:items-center items-start space-x-1 relative">
            <span className="text-2xl font-normal font-primary">
              Our Mission
            </span>
            <div className="absolute md:right-15 right-1 -top-3">
              <svg
                width="45"
                height="49"
                viewBox="0 0 45 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0497 45.5727C28.4988 38.654 29.8625 31.4818 27.5505 27.607C25.2385 23.7322 19.3963 24.1961 17.0432 27.8665C16.9546 23.5074 12.2157 20.0595 8.21977 22.1553C4.22389 24.2512 1.63929 31.0791 12.0497 45.5727Z"
                  fill="#FF8197"
                />
                <path
                  d="M36.308 27.9505C44.9503 21.7783 44.802 17.4359 42.952 15.4895C41.102 13.5431 37.7713 14.5781 36.8863 17.0172C36.2636 14.4983 33.0607 13.1177 31.0156 14.8581C28.9706 16.5985 28.365 20.901 36.308 27.9505Z"
                  fill="#FF8197"
                />
                <path
                  d="M25.4004 9.84594C31.9953 8.27897 32.9534 5.67652 32.3286 4.08047C31.7039 2.48443 29.4859 2.29404 28.3753 3.52267C28.6139 1.88379 27.0531 0.296399 25.4252 0.832616C23.7973 1.36883 22.4031 3.76616 25.4004 9.84594Z"
                  fill="#FF8197"
                />
              </svg>
            </div>
          </h2>
          <p className="font-lato text-[16px] text-[#384252] px-0 md:px-4 mb-6 md:text-center text-start">
            Parents need a simple way to find, book, and track their kids
            activities. Businesses need a better way to be found and to keep
            families coming back.
          </p>
          <p className="text-xl font-medium mb-6 md:text-center text-start">
            <span className="text-[16px] font-normal font-lato">
              Our purpose is to
            </span>{" "}
            <br />
            <span className="font-bold font-lato text-[22px]">
              make parents lives
            </span>{" "}
            <span className="text-[#FF8095] text-[22px] font-bold font-lato">
              easier<span className="text-black font-lato">,</span> happier
              <span className="text-black font-lato">,</span>
              <span className="text-black font-lato"> and </span>less stressful
            </span>
          </p>
          <p className="text-[16px] font-lato text-[#384252] mb-6 md:text-center text-start">
            As parents and business owners, we get it.
          </p>
          <Image
            src="/family.png"
            alt="Children Playing"
            width={500}
            height={300}
            className="w-full max-w-lg mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative w-full h-[433px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: 'url("/images/girls.png")' }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat block md:hidden"
          style={{ backgroundImage: 'url("/images/girlMobile.png")' }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-normal text-white mb-2 font-primary">
                Ready to Simplify Your Life?
              </h1>
              <p className="text-[16px] text-white font-lato">
                Be the first to know when we launch! Join our waiting list and
                get exclusive updates and early access to our journey.
              </p>
            </div>
            <button className="w-full px-6 py-3 bg-[#FF97A8] hover:bg-[#FF97A8] text-black rounded-full flex items-center justify-center gap-2">
              <span className="text-[18px] font-medium font-lato tracking-[-0.5px]">
                ✨ Join the waiting list
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3A4E78] text-white py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Image
              src="/logo1.png"
              alt="JustLiv Logo"
              width={116}
              height={40}
              className="w-29"
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://www.instagram.com/justlivatx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-[16px] font-medium font-lato">
                Connect with us on Instagram ♡
              </span>
            </a>

            <div className="flex flex-col items-center space-y-2 pt-16 w-full">
              <a href="/privacy-policy" className="text-[16px] font-lato">
                Privacy policy
              </a>
              <a
                href="/accessibility-statement"
                className="text-[16px] font-lato"
              >
                Accessibility Statement
              </a>
            </div>

            <a
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <p className="text-white text-[16px] font-normal font-lato mt-6">
              © 2024 by JustLiv
            </p>
          </div>
        </div>
      </footer>
      {/* <footer className="bg-[#3A4E78] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Image
              src="/images/logo1.png"
              alt="JustLiv Logo"
              width={116}
              height={40}
              className="w-29"
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://www.instagram.com/justlivatx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-[16px] font-medium font-lato">
                Connect with us on Instagram ♡
              </span>
            </a>

            <div className="flex flex-col items-center space-y-2 pt-16">
              <a href="/privacy-policy" className="text-[16px] font-lato">
                Privacy policy
              </a>
              <a
                href="/accessibility-statement"
                className="text-[16px] font-lato"
              >
                Accessibility Statement
              </a>
            </div>

            <a
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <p className="text-white text-[16px] font-normal font-lato">
              © 2024 by JustLiv
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
