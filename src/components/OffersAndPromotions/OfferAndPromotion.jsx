import { Link } from "react-router-dom";
import OfferAndPromotionCard from "./OfferAndPromotionCard";
import OFFER_PROMOTION_DATA from "./OFFER_PROMOTION_DATA";
const OfferAndPromotion = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-4">Ưu đãi - Khuyến mại</h1>
      <div className="grid grid-cols-2 gap-6">
        {OFFER_PROMOTION_DATA.filter((data) => data.id < 5).map((data) => (
          <OfferAndPromotionCard key={data.id} offerAndPromotionData={data} />
        ))}
      </div>
      <Link
        to="/post/all"
        className="flex items-centr justify-center w-full my-4"
      >
        <button className="px-10 py-3 text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white text-sm font-semibold">
          XEM THÊM ƯU ĐÃI
        </button>
      </Link>
    </div>
  );
};
export default OfferAndPromotion;
