import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Results from "./Results";
import useBreedList from "./useBreedList";
// import ThemeContext from "./ThemeContext";
import changeAnimal from "./actionCreators/changAnimal";
import changeLocation from "./actionCreators/changLocation";
import changeTheme from "./actionCreators/changTheme";
import changeBreed from "./actionCreators/chanBreedl";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const [location, updateLocation] = useState("");
  // const [animal, updateAnimal] = useState("");
  // const [breed, updateBreed] = useState("");


  // like this redux will know which state changes and will update serach params
  // it wont update if anything apart from these states changes

  // this is just readiing and not updating , we need dispacther for this
  const animal = useSelector((state) => state.animal);
  const theme = useSelector((state) => state.theme);
  const breed = useSelector((breed) => breed);
  const location = useSelector((state) => state.location);

  // this will update actions , this will action to redux
  const dispatch = useDispatch();

  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  
  // const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
               dispatch(changeAnimal(e.target.value))
            }}
            onBlur={(e) => {
               dispatch(changeAnimal(e.target.value))
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) =>dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
