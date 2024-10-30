import React from "react";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Header />

      <div className="mt-20">
        <section
          classname="academy-typing-hero"
          id="academy-container"
        ></section>
        <div className="academy-typing-hero__container">
          <div className="academy-typing-hero__persona-left">
            <img
              className="academy-typing-hero__persona--image academy-hero-image-1"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-11.png"
            />
            <img
              className="academy-typing-hero__persona--image academy-hero-image-3"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-24.png"
            />
          </div>
          <div className="academy-typing-hero__content">
            <div className="academy-typing-hero__content--typing-effect">
              <div className="academy-typing-hero__content--animation">
                <button className="academy-typing-hero__content--animation-button pause-play-animation">
                  <img
                    src="https://academy.hubspot.com/hubfs/assets/academy/pause-icon.svg"
                    alt="pause animation"
                    data-pausetext="pause animation"
                    data-playtext="play animation"
                  />
                </button>
                <button className="academy-typing-hero__content--animation-button stop-animation">
                  <img
                    src="https://academy.hubspot.com/hubfs/assets/academy/stop-icon.svg"
                    alt="stop animation"
                  />
                </button>
              </div>
              <h1 className="academy-typing-hero__content--title" aria-label>
                Web
                <span
                  className="academy-typing-hero__content--title-text typing"
                  data-firstloop="Your Career"
                  data-secondloop="Your Organization"
                  data-thirdloop="Better"
                >
                  Pro
                </span>
              </h1>
            </div>
            <p className="academy-typing-hero__content--description">
              From quick, practical courses to comprehensive certifications,
              learn everything you need to know about the most sought-after
              business skills.
            </p>
            <div className="academy-typing-hero__ctas">
              <a
                tabIndex={0}
                className="academy-typing-hero__ctas--cta cta--primary cta--large academy-home-hero"
                href="https://app.hubspot.com/signup-hubspot/academy?hubs_signup-cta=academy-home-hero&hubs_signup-url=academy.hubspot.com"
                data-hs-event-96027165={1}
              >
                Sign up for free courses
              </a>
            </div>
            <ul className="academy-typing-hero__content--features">
              <li>100% free &amp; online</li>
              <li>Unlimited access</li>
              <li>Hundreds of topics</li>
            </ul>
          </div>
          <div className="academy-typing-hero__persona-right">
            <img
              className="academy-typing-hero__persona--image academy-hero-image-2"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-18.png"
            />
            <img
              className="academy-typing-hero__persona--image academy-hero-image-4"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-7.png"
            />
          </div>
          <div className="academy-typing-hero__persona-bottom">
            <img
              className="academy-typing-hero__persona--image academy-hero-image-5"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-6.png"
            />
            <img
              className="academy-typing-hero__persona--image academy-hero-image-6"
              alt
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/images/backgrounds/thumbnails/thumbnail-10.png"
            />
          </div>
        </div>
        <div className="academy-typing-hero__boxshadow" />
      </div>

      <Cards />

      <div className="flex flex-col md:flex-row items-center h-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center bg-teal-700 text-white p-10 h-96">
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold mb-4">Learn New Skills</h2>
            <p className="mb-8">
              Get up to speed quickly on popular business topics with our free
              courses.
            </p>
            <button className="bg-white text-teal-700 font-semibold px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition duration-300">
              View all courses
            </button>
          </div>
        </div>

        {/* Divider with OR */}
        <div className="relative w-full md:w-auto  md:h-auto flex items-center justify-center">
          <div className="absolute flex items-center justify-center bg-white rounded-full w-12 h-12 font-bold text-gray-500 border-4 border-white -top-4 md:top-auto md:left-1/2 transform md:-translate-x-1/2">
            OR
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-center bg-yellow-600 text-white p-10 h-96">
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold mb-4">Earn Recognition</h2>
            <p className="mb-8">
              Grow your career by completing certifications and adding
              industry-recognized badges to your LinkedIn profile.
            </p>
            <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300">
              View all certifications
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------- */}
      <div className=" bg-white text-center md:py-20">
        <h2 className="text-3xl font-bold mb-4">
          Globally Recognized Certifications
        </h2>
        <p className="text-gray-600 mb-8">
          Join the 165,000+ professionals who’ve grown their careers by getting
          certified with HubSpot Academy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
          {/* Inbound */}
          <div className="flex flex-col items-center">
            <img
              src="https://academy.hubspot.com/hubfs/assets/hubspot.com/academy/icons/certs/inbound.svg"
              alt="Inbound"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Inbound
            </h3>
            <p className="text-gray-600 text-sm">
              Attract leads, engage prospects, and delight customers using the
              inbound methodology.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/social-media.svg"
              alt="Social Media"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Social Media
            </h3>
            <p className="text-gray-600 text-sm">
              Extend your reach and generate leads with a multi-channel social
              media strategy.
            </p>
          </div>

          {/* Email Marketing */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/email-marketing.svg"
              alt="Email Marketing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Email Marketing
            </h3>
            <p className="text-gray-600 text-sm">
              Communicate with impact, drive growth, and deliver revenue with
              strategic email.
            </p>
          </div>

          {/* Content Marketing */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/content-marketing.svg"
              alt="Content Marketing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Content Marketing
            </h3>
            <p className="text-gray-600 text-sm">
              Fuel your business by creating and promoting remarkable content.
            </p>
          </div>

          {/* Inbound Sales */}
          <div className="flex flex-col items-center">
            <img
              src="https://f.hubspotusercontent00.net/hubfs/53/assets/hubspot.com/academy/icons/certs/seo.svg"
              alt="Inbound Sales"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Inbound Sales
            </h3>
            <p className="text-gray-600 text-sm">
              Get certified. Grow your pipeline. Close more deals. Grow your
              career.
            </p>
          </div>
        </div>

        <button className="mt-8 px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-300">
          View all certifications
        </button>
      </div>

      {/* ----------------------------------------------------------------------------------------- */}
      <div className="bg-gray-50 py-12 text-center">
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://yt3.googleusercontent.com/659JDto85S5pZxIu7hhVtwzD1K9tHDWf-e3U8tJTB5qABPiwvuxZM7yiTK_STIYVWYVdKnFetm8=s900-c-k-c0x00ffffff-no-rj"
            alt="HubSpot Icon"
            className="w-ful h-52 mb-2"
          />
          <h2 className="text-3xl font-bold">
            Why learn with HubSpot Academy?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-lg px-4">
          {/* Advance your career */}
          <div className="text-left md:text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Advance your career
            </h3>
            <p className="text-gray-600">
              Invest in yourself and your career by staying up to date on the
              latest trends in digital marketing, sales, customer support, and
              more.
            </p>
          </div>

          {/* Show off your skills */}
          <div className="text-left md:text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Show off your skills
            </h3>
            <p className="text-gray-600">
              Add a globally recognized certification to your LinkedIn profile
              to show your employer — or future employer — you know your stuff.
            </p>
          </div>

          {/* Grow Your Business */}
          <div className="text-left md:text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Grow Your Business
            </h3>
            <p className="text-gray-600">
              Build your business strategy on the inbound methodology to
              generate more leads, close more deals, and delight your customers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
