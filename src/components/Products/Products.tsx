import { InterFaceProducts } from "./interFace";
import Product from "./product";
interface ProductsProps {
  products: InterFaceProducts[];
  setCartItems: React.Dispatch<React.SetStateAction<InterFaceProducts[]>>;
}

const Products = ({ products, setCartItems }: ProductsProps) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              setCartItems={setCartItems}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
