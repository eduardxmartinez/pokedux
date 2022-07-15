import axios from "axios";

export const getPokemon = async () => {
  try {
    const res = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151");
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};
