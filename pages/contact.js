import request from "../utils/request";
import { gql } from "graphql-request";
import { StructuredText } from "react-datocms";

export const getStaticProps = async () => {
  const query = gql`
    query {
      allPages(filter: { id: { eq: "24919305" } }) {
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
  const data = res.allPages[0];
  return {
    props: { data },
  };
};

const Contact = ({ data }) => {
  return (
    <>
      <img
        src={data.mainImage.url}
        alt={data.mainImage.alt ? data.mainImage.alt : "Contact page header"}
        className="mx-auto"
      />
      <h2 className="my-4 text-[30px]">{data.title}</h2>
      <div className="max-w-[600px] ml-2 structured-text">
        <StructuredText data={data.content} />
      </div>
    </>
  );
};

export default Contact;
