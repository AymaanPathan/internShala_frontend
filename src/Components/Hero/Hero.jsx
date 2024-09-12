import heroImg from "./hero.jpg";

export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={heroImg}
          alt=""
        />
        {/* src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" */}
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-md font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            SwiftApply
          </p>
          <h2
            className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#4A4A4A" }}
          >
            Your Internshala
            <br className="hidden md:block" />
            <span className="inline-block text-blue-600">
              Application Assistant
            </span>
          </h2>
          <p
            className="pr-5 mb-5 text-base text-gray-700 md:text-lg"
            style={{ fontFamily: "Roboto, sans-serif", color: "#6B7280" }}
          >
            SwiftApply revolutionizes the way you apply for internships on
            Internshala. Powered by cutting-edge automation technology,
            SwiftApply streamlines and personalizes your application process.
          </p>
          <div className="flex items-center">
            <a
              href="#form"
              className="bg-blue-600 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get started
            </a>
            <a
              href="/"
              aria-label="Learn more"
              className="inline-flex items-center font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
