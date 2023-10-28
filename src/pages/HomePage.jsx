import cards from "../assets/cards.mp4";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <video
          className="h-full w-full object-cover object-fit z-0 bg-gray-900 bg-opacity-70 backdrop-blur-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={cards} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to our Languages Cards Game!
          </h1>
          <p className="text-lg">
            Card language game is an exciting and educational game that helps
            players to learn new vocabulary in a fun and interactive way.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
