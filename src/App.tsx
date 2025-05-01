import { CartItemProps } from "./components/CarItems/interFace";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import CartItems from "./components/CarItems/cartItems";
import { InterFaceProducts } from "./components/Products/interFace";
const initCartItems = localStorage.getItem("cartItems");
const App = () => {
  const [product, setProducts] = useState<InterFaceProducts[]>([]);
  const [isLoding, setIsLodeing] = useState(false);
  const [cartItems, setCartItems]: [
    cartItems: CartItemProps[],
    setCartItems: React.Dispatch<React.SetStateAction<CartItemProps[]>>
  ] = useState<CartItemProps[]>(initCartItems ? JSON.parse(initCartItems) : []);
  const sampleProducts: InterFaceProducts[] = [
    {
      id: 1,
      title:
        "جهاز أمازون Kindle (16 جيجابايت) - جهاز Kindle الأخف والأصغر حجمًا بشاشة بدون توهّج وتصفّح أسرع عبر الصفحات وإضاءة أمامية",
      img: "https://m.media-amazon.com/images/I/51A81R5PX1L._AC_UL320_.jpg",
      price: 500,
      rate: 3,
      insteadOf: 800,
    },
    {
      id: 2,
      title:
        "سجادة يوجا سميكة للغاية لممارسة التمارين بحزام للحمل من أمازون بيسكس، سمك 1.3 سم/ 1/2 بوصة، أسود",
      img: "https://m.media-amazon.com/images/I/71I2r88GXhL._AC_UL480_FMwebp_QL65_.jpg",
      price: 700,
      rate: 4,
      insteadOf: 900,
    },
    {
      id: 3,
      title:
        "سماعة ايليت 8 اكتيف بتقنية ترو وايرليس من جابرا- سماعة رياضية بتصميم ثابت بالأذن - متانة من الدرجة العسكرية مع تقنية إلغاء",
      img: "https://m.media-amazon.com/images/I/41gGkBjThPL._AC_UL640_FMwebp_QL65_.jpg",
      price: 800,
      rate: 5,
      insteadOf: 1000,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setIsLodeing(true);
      setProducts(sampleProducts);
      setIsLodeing(false);
    };
    getData();
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      {isLoding && <p>Loding...</p>}
      {!isLoding && product && (
        <Products products={sampleProducts} setCartItems={setCartItems} />
      )}
      <CartItems cartItems={cartItems} />
    </>
  );
};

export default App;
