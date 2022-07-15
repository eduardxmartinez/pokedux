import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name,image,abilities}) => {
  return (
    <Card
      title={name}
      key={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire,magic" />
      <h2>Abilities</h2>
      {abilities.map((ability) => {
        return <p>{ability.ability.name}</p>;
      })}
    </Card>
  );
}

export default PokemonCard;