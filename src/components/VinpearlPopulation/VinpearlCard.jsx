import { Link } from "react-router-dom";
const VinpearlCard = ({ vinpearlData }) => {
  const { id, imageUrl, title, description, place } = vinpearlData;
  return (
    <Link className="relative w-full h-[560px] rounded" to={`/vinpearl/${id}`}>
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.35)] z-10 rounded" />
      <img
        src={imageUrl}
        alt={`${title}`}
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute bottom-10  w-[90%] left-[5%] text-white text-center z-40">
        <div className="text-xl font-semibold">{place}</div>
        <div className="font-medium mt-4">{description}</div>
      </div>
    </Link>
  );
};
export default VinpearlCard;
