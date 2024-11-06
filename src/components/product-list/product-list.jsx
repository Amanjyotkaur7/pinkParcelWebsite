import ProductCard from "../product-card/product-card";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const products = [
    {
      id: "1",
      name: "HERSHEY'S Dark Bar | Deliciously Dark Cocoa Rich Chocolate | 40g",
      image: "/image/choco.png",
      price: 60.0,
    },
    {
      id: "2",
      name: "Pack of pocket tissues",
      image: "/image/tissue.png",
      price: 10.0,
    },
    {
      id: "3",
      name: "Gillette Venus Razor - (Pack of 1, Pink) - Razor for Women",
      image: "/image/venus.png",
      price: 70.0,
    },
    {
      id: "4",
      name: "Whisper Choice Ultra XL 6 Pads",
      image: "/image/whispher.png",
      price: 49.0,
    },
    {
      id: "5",
      name: "Sirona Tampon Regular To Medium Flow",
      image: "/image/tampon.png",
      price: 200.0,
    },
    {
      id: "6",
      name: "Nivea Soft Cream",
      image: "/image/nivea.png",
      price: 80.0,
    },
    {
      id: "7",
      name: "ORGANIC INDIA Tulsi Green Tea Lemon Ginger Teabags",
      image: "/image/tea.png",
      price: 8.3,
    },
    {
      id: "8",
      name: "MIRABELLE COSMETICS KOREA Rose Facial Serum Sheet Mask",
      image: "/image/rosefacial.png",
      price: 110.0,
    },
    {
      id: "9",
      name: "Stayfree Secure Cotton Regular 6 Pads",
      image: "/image/stayfree.png",
      price: 35.0,
    },
    {
      id: "10",
      name: "Vwash",
      image: "/image/vwash.png",
      price: 45.0,
    },
    {
      id: "11",
      name: "POND'S Light Moisturizer, 25g",
      image: "/image/ponds.png",
      price: 49.0,
    },
    {
      id: "12",
      name: "Stayfree Secure Wings XL 6 Pads",
      image: "/image/stayfree.png",
      price: 41.0,
    },
    {
      id: "13",
      name: "Sofy BodyFit Soft XL 6 Pads",
      image: "/image/sofy.png",
      price: 39.0,
    },
    {
      id: "14",
      name: "Whisper Ultra Wings XL+ 7 Pads",
      image: "/image/whisper3.png",
      price: 89.0,
    },
    {
      id: "15",
      name: "Whisper Choice Regular Wings 6 Pads",
      image: "/image/whispher2.png",
      price: 34.0,
    },
  ];

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
