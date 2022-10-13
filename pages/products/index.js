import request from "../../utils/request";
import { gql } from "graphql-request";
import { Image } from "react-datocms";
import Link from "next/link";

export const getStaticProps = async () => {
  const query = gql`
    query {
      allProducts {
        id
        name
        price
        mainImage {
          responsiveImage(imgixParams: { fit: clamp, auto: format }) {
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

const Products = ({ data }) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-16 mx-auto">
      {data.allProducts.map((product) => (
        <Link href={`products/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="cursor-pointer rounded flex flex-col justify-between bg-f3 p-2"
          >
            <Image
              data={product.mainImage.responsiveImage}
              className="h-full"
            />
            <div className="py-1">
              <p className="text-[25px]">{product.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-[20px]">{product.price}:-</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Products;
