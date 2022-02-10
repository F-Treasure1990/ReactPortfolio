import { useEffect, useState } from "react";

const useFetch = url => {
  const [fetchedData, setFetchedData] = useState("");
  useEffect(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFetchedData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return fetchedData;
};

export default useFetch;
