import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetch(url);
        const response = await fetchedData.json();
        setData(response);
      } catch (err) {
        setFetchError("There was an error fetching the data");
      }
    }
    getData();
  }, [])
  return {data, fetchError};
};

export default useFetch;
