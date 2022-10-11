import { Image, StructuredText } from "react-datocms";
import { gql } from "graphql-request";
import request from '../../utils/request';
import responsiveImage from "../../utils/responsiveImage";

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
      params: { product: product.id }
    }});

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const query = gql`
  query {
    allProducts(filter: {id: {eq: ${params.product}}}) {
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
    props: { product }
  }
}

const Product = ({ product }) => {
  console.log(product)
  return (
    <div className="flex laptop:flex-row flex-col">
      <div className="laptop:w-1/2 w-full grid grid-cols-2">
          <Image data={product.mainImage.responsiveImage} className="col-span-2" />
          {product.alternativeImages.map(image => <Image data={image.responsiveImage} />)}
      </div>
      <div className="px-5">
        <div>
          <h2 className="text-[30px]">{product.name}</h2>
          <h3 className="text-[25px]">{`${product.price}:-`}</h3>
          <button className="bg-blue-500 text-white p-1 px-2 rounded">Lägg till</button>
        </div>
        <div className="max-w-[600px] structured-text">
          <StructuredText data={product.description} />
        </div>
      </div>
    </div>
  )
}

export default Product;