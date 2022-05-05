import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";

export const useFetchGifs = (keyword) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(keyword).then((imgs) =>
      setstate({
        data: imgs,
        loading: false,
      })
    );
  }, [keyword]);

  return state;
};
