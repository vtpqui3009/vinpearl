import { Fragment } from "react";
import Container from "../components/Container/Container";
import OfferAndPromotion from "../components/OffersAndPromotions/OfferAndPromotion";
import ProductForYou from "../components/ProductForYou/ProductForYou";
import VinpearlPopulation from "../components/VinpearlPopulation/VinpearlPopulation";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: "140px" }}>
        <OfferAndPromotion />
        <ProductForYou />
        <VinpearlPopulation />
      </Container>
      <Footer />
    </Fragment>
  );
};
export default Home;
