import { useQuery } from "react-query";

const fetchQuotes = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=wisdom|inspirational|love|happiness&maxLength=130");
  return await res.json();
};

const useQuoteAPI = () => {
  return useQuery("quotes", fetchQuotes, {
    refetchOnWindowFocus: false,
    refetchInterval: 30000
  });
};

export default useQuoteAPI;
