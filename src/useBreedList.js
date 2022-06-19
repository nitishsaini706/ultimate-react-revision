import { useState, useEffect } from 'react';

//creating custom hook 

const local = {};

export default function useBreedList(animal) {

    const [BreedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");


    useEffect(() => {
        if (!animal) {
            setBreedList([]);;
        }
        else if (local[animal]) {
            setBreedList(local[animal]);
        }
        else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2-apis.com/breeds?anima=${animal}`
            );

            const json = await res.json();

            local[animal] = json.breeds || [];
        }
    },[animal]);

    return [ BreedList,status]

}