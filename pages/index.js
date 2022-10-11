import request from "../utils/request";
import { gql } from "graphql-request";
import { StructuredText } from "react-datocms";

export const getStaticProps = async () => {
  const query = gql`
    query {
      startpage {
        title
        mainImage {
          url
          alt
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
      <img
        src={data.mainImage.url}
        alt={data.mainImage.alt ? data.mainImage.alt : "Homepage header"}
        className="mx-auto"
      />
      <h2 className="my-4 text-[30px]">{data.title}</h2>
      <div className="max-w-[600px] ml-2 structured-text">
        <StructuredText data={data.content} />
      </div>
    </>
  );
};

export default Home;
