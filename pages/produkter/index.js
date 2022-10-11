import request from "../../utils/request";
import { gql } from "graphql-request";

export const getStaticProps = async () => {
  const query = gql`
    query {
      allProducts {
        id
        name
        price
        mainImage {
          url
          alt
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
          <img
            src={product.mainImage.url}
            alt={product.mainImage.alt ? product.mainImage.alt : product.name}
            className="aspect-square object-cover rounded-t"
          />
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
