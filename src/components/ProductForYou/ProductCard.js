import { LightningBoltIcon, ClockIcon } from "@heroicons/react/outline";
const ProductCard = ({ productData }) => {
  const { imageUrl, title, buyer, price, time } = productData;
  return (
    <div className="h-96 flex flex-col m-4 border border-gray-400 rounded">
      <div className="h-3/5 w-full">
        <img
          src={imageUrl}
          alt={`${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-2/5 w-full p-4 flex flex-col">
        <span className="font-semibold post-title">{title}</span>
        <div className="flex mt-auto flex-col">
          {time && (
            <div className="text-sm flex items-center mb-2">
              <ClockIcon className="w-4 h-4 mr-2" /> <span>{time}</span>
            </div>
          )}
          <div className="flex mt-auto justify-between items-center text-sm">
            <div className="flex items-center">
              <LightningBoltIcon className="w-4 h-4 mr-2" />{" "}
              <span>{buyer}</span>
            </div>
            <span className="text-xl text-yellow-600 font-semibold">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
