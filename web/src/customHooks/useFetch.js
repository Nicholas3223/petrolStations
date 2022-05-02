import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetch(url);
        const response = await fetchedData.json();
        setData(response);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [])
  return [data];
};

export default useFetch;
