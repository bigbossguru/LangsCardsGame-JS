import VocabularyForm from "../components/VocabularyForm";

const MyVocabulary = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Vocabulary page
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Add your personal vocabulary
              </h1>
            </div>
          </div>
          <VocabularyForm />
        </div>
      </main>
    </>
  );
};

export default MyVocabulary;
