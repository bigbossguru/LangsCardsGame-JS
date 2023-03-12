import { useState } from "react";
import axios from "axios";

const useTranslate = () => {
  const [translatedWord, setTranslatedWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wordTranslate = async (text, sourceLanguage, targetLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("https://libretranslate.de/translate", {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
      });
      setTranslatedWord(response.data.translatedText);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { translatedWord, loading, error, wordTranslate };
};

export default useTranslate;
