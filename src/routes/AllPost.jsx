import { Fragment } from "react";
import Container from "../components/Container/Container";
import OfferAndPromotionFlexCard from "../components/OffersAndPromotions/OfferAndPromotionFlexCard";
import OFFER_PROMOTION_DATA from "../components/OffersAndPromotions/OFFER_PROMOTION_DATA";
import Footer from "../components/Footer/Footer";
const PostDetail = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: "140px" }}>
        <h1 className="text-3xl font-semibold my-4">
          Ưu đãi - Khuyến mại Vinpearl
        </h1>
        {OFFER_PROMOTION_DATA.map((data) => (
          <OfferAndPromotionFlexCard
            key={data.id}
            offerAndPromotionData={data}
          />
        ))}
      </Container>
      <Footer />
    </Fragment>
  );
};
export default PostDetail;
