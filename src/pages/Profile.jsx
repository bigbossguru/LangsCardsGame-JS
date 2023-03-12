import profile from "../assets/profile.png";

const Profile = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile page</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Profile
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  This is profile of user
                </p>
                <img
                  className="object-cover h-96 w-100 rounded-lg"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
