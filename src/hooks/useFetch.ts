import { useEffect, useRef, useState } from "react";

function useFetch<T>(
  url: string,
  initialState: T,
  dataBeenFetched: boolean
): { data: T; loading: boolean; dataBeenFetched: boolean } {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);
      const jsonData = (await res.json()) as T;
      setData(jsonData);
      dataBeenFetched = true;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dataBeenFetched) fetchData(url);
  }, [url]);

  return { data, loading, dataBeenFetched };
}

export default useFetch;
