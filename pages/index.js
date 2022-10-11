import request from "../utils/request";
import { gql } from "graphql-request";
import { Image, StructuredText } from "react-datocms";

export const getStaticProps = async () => {
  const query = gql`
    query {
      startpage {
        mainImage {
          id
          responsiveImage {
            alt
            aspectRatio
            base64
            src
            srcSet
            title
            webpSrcSet
            width
            sizes
            height
            bgColor
          }
        }
        content {
          value
        }
      }
    }
  `;
  const res = await request({ query });
  const data = res.startpage;

  return {
    props: { data },
  };
};
const Home = ({ data }) => {
  return (
    <>
      <Image data={data.mainImage.responsiveImage} />
      <h2 className="my-4 text-[30px]">{data.title}</h2>
      <div className="max-w-[600px] ml-2 structured-text">
        <StructuredText data={data.content} />
      </div>
    </>
  );
};

export default Home;
