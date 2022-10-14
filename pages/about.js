import request from "../lib/datoCMS/request";
import responsiveImage from "../lib/datoCMS/responsiveImage";
import { gql } from "graphql-request";
import { Image, StructuredText } from "react-datocms";

export const getStaticProps = async () => {
  const query = gql`
    query {
      allPages(filter: { id: { eq: "24919296" } }) {
        title
        mainImage {
          responsiveImage {
            ${responsiveImage}
          }
        }
        content {
          value
        }
      }
    }
  `;

  const res = await request({ query });
  const data = res.allPages[0];
  return {
    props: { data },
  };
};

const About = ({ data }) => {
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

export default About;
