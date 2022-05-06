import { Link } from "react-router-dom";
const OfferAndPromotionCard = ({ offerAndPromotionData }) => {
  const { id, title, imageUrl } = offerAndPromotionData;
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.35)] z-10 rounded" />
      <Link to={`/post/detail/${id}`}>
        <h2 className="absolute top-4 left-4  text-white font-bold  w-4/5 z-20">
          {title}
        </h2>
      </Link>
      <img src={imageUrl} alt="" className="w-full h-72 rounded" />
      <Link to={`/post/detail/${id}`}>
        <button className="absolute bottom-4 right-4 bg-yellow-600 px-6 py-2 rounded text-sm text-white z-20">
          Xem chi tiết
        </button>
      </Link>
    </div>
  );
};
export default OfferAndPromotionCard;
