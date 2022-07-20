import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice"
import StarButton from "./StarButton";

const PokemonCard = ({name,image,abilities, types, id, favorite}) => {
  const dispatch =  useDispatch();

  const typesString = types.map( type => type.type.name).join(", ")

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }
  return (
    <Card
      title={name}
      key={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={()=>handleFavorite()} />}
    >
      <Meta description={typesString} />
      <h2>Abilities</h2>
      {abilities.map((ability) => {
        return <p>{ability.ability.name}</p>;
      })}
    </Card>
  );
}

export default PokemonCard;