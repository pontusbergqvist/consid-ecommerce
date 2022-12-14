import { Image, StructuredText } from "react-datocms";
import { gql } from "graphql-request";
import request from "../../lib/datoCMS/request";
import responsiveImage from "../../lib/datoCMS/responsiveImage";
import { useContext } from "react";
import { ShopContext } from "../../components/context";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export const getStaticPaths = async () => {
  const query = gql`
    query {
      allProducts {
        id
      }
    }
  `;

  const res = await request({ query });
  const paths = res.allProducts.map((product) => {
    return {
      params: { product: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const query = gql`
  query {
    allProducts(filter: {id: {eq: ${params.product}}}) {
      id
      name
      price
      mainImage {
        responsiveImage {
          ${responsiveImage}
        }
      }
      alternativeImages {
        responsiveImage {
          ${responsiveImage}
        }
      }
      description {
        value
      }
    }
  }
  `;
  const res = await request({ query });
  const product = res.allProducts[0];
  return {
    props: { product },
  };
};

const Product = ({ product }) => {
  const context = useContext(ShopContext);
  return (
    <div>
      <Link href="/products">
        <div className="mb-3 flex items-center text-blue-600 cursor-pointer">
          <AiOutlineArrowLeft />
          <p className="ml-2 underline">Return to products</p>
        </div>
      </Link>
      <div className="flex laptop:flex-row flex-col">
        <div className="laptop:w-1/2 w-full grid grid-cols-2">
          <Image
            data={product.mainImage.responsiveImage}
            className="col-span-2"
          />
          {product.alternativeImages.map((image, index) => (
            <Image data={image.responsiveImage} key={index} />
          ))}
        </div>
        <div className="px-5">
          <div>
            <h2 className="text-[30px]">{product.name}</h2>
            <h3 className="text-[25px]">{`${product.price}:-`}</h3>
          </div>
          <div className="max-w-[600px] structured-text">
            <StructuredText data={product.description} />
          </div>
          <button
            className="bg-blue-500 text-white p-1 px-2 rounded"
            onClick={() =>
              context.addToCart({
                id: product.id,
                quantity: 1,
                name: product.name,
                price: product.price,
                mainImage: product.mainImage,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
