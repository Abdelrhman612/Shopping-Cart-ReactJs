import { InterFaceProducts } from "./interFace";
import starIcon from "../../assets/icons/icons8-star-48.png";

interface ProductsProps {
  products: InterFaceProducts[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                width="100px"
                height="100px"
              />
              <p>{product.title}</p>
              <p>
                rate: {product.rate}
                {Array(product.rate)
                  .fill(0)
                  .map((index) => (
                    <img
                      key={index}
                      src={starIcon}
                      alt="star icon"
                      width="15px"
                      height="15px"
                    />
                  ))}
              </p>
              <p>Price: {Number(product.price).toLocaleString()} جنيه</p>
              <p>
                insteadOf:{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {product.insteadOf} جنيه
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
