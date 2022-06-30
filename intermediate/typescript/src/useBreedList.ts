import { useState, useEffect } from "react";
import {Animal ,breedListApi} from "./APIResponsetypes";

const localCache:{
  [index:string] : string[];
} = {};

type status = "unloaded" | "loading" | "loaded" 

export default function useBreedList(animal:Animal) {
  const [breedList, setBreedList] = useState([] as string[] );
  const [status, setStatus] = useState("unloaded"  as string);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
