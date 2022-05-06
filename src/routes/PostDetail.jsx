import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import OFFER_PROMOTION_DATA from "../components/OffersAndPromotions/OFFER_PROMOTION_DATA";
import Footer from "../components/Footer/Footer";
const PostDetail = () => {
  const { pid } = useParams();
  const postDetailData = OFFER_PROMOTION_DATA.filter(
    (data) => data.id === Number(pid)
  );

  return (
    <Fragment>
      <Container style={{ marginTop: "140px" }}>
        {" "}
        {postDetailData.map((post) => (
          <div key={post.id}>
            <img
              src={post.bannerUrl}
              alt={`${post.title}`}
              className="w-full h-48 object-cover"
            />
            <h1 className="text-3xl font-semibold my-2 text-gray-700">
              {post.title}
            </h1>
            <div className="flex items-center text-sm">
              <div className="flex items-center mr-4">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span>{post.time}</span>
                <span className="ml-4">|</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{`Hạn áp dụng: ${post.dueDate}`}</span>
                <span className="ml-4">|</span>
              </div>
            </div>
            {/* <p
                  className="my-5"
                  dangerouslySetInnerHTML={{ __html: loadedBlog.content }}
                /> */}
          </div>
        ))}
      </Container>
      <Footer />
    </Fragment>
  );
};
export default PostDetail;
