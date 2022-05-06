import { Link } from "react-router-dom";
const OfferAndPromotionFlexCard = ({ offerAndPromotionData }) => {
  const { id, title, imageUrl, dueDate } = offerAndPromotionData;
  return (
    <div className="relative flex gap-10 mb-10">
      <div className="w-2/5">
        <img src={imageUrl} alt="" className="w-full h-72 rounded" />
      </div>
      <div className="w-3/5">
        <Link to={`/post/detail/${id}`}>
          <h2 className=" font-bold  w-4/5 z-20">{title}</h2>
        </Link>
        <span>{`Hạn dùng: ${dueDate}`}</span>
      </div>
    </div>
  );
};
export default OfferAndPromotionFlexCard;
