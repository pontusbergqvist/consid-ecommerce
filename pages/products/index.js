import request from "../../utils/request";
import { gql } from "graphql-request";
import { Image } from "react-datocms";

export const getStaticProps = async () => {
  const query = gql`
    query {
      allProducts {
        id
        name
        price
        mainImage {
          responsiveImage {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
    }
  `;
  const data = await request({ query });
  return {
    props: { data },
  };
};

const Produkter = ({ data }) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-16 mx-auto">
      {data.allProducts.map((product) => (
        <div key={product.id} className=" cursor-pointer rounded">
          <Image data={product.mainImage.responsiveImage} />
          <div className="py-1">
            <p className="text-[25px]">{product.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-[20px]">{product.price}:-</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Produkter;
