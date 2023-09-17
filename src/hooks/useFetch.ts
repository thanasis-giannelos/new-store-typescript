import { useEffect, useState } from "react";

function useFetch<T>(
  url: string,
  initialState: T
): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url: string) => {
      // setLoading(true);
      try {
        const res = await fetch(url);
        const jsonData = (await res.json()) as T;
        setData(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  return { data, loading };
}

export default useFetch;
