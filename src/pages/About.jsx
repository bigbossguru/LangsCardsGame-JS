import cardBack from "../assets/card_back.png";
import cardFront from "../assets/card_front.png";

const About = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About page</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl m-1 mx-auto py-6 sm:px-6 lg:px-8">
          <div className="sm:px-0">
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  About Us
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  This application was created as part of the training and will
                  be used as a portfolio project in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="m-0 p-0 flex">
            <img
              className="w-1/2 scale-50 hover:scale-75"
              src={cardBack}
              alt="Back"
            />
            <img
              className="w-1/2 scale-50 hover:scale-75"
              src={cardFront}
              alt="Front"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
