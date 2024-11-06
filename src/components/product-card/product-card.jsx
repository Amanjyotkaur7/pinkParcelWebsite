import { Star } from "lucide-react";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  name,
  image,
  price,
}: {
  name: string,
  image: string,
  price: number,
}) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.image} />
    </div>

    <div className={styles.content}>
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.ratingContainer}>
        <Star className={styles.star} />
        <Star className={styles.star} />
        <Star className={styles.star} />
        <Star className={styles.star} />
        <Star className={styles.star} />
      </div>

      <p className={styles.price}>Rs. {price.toFixed(2)}</p>

      <button type="button" className={styles.button}>
        Add to cart
      </button>
    </div>
  </div>
);

export default ProductCard;
