import { useState } from "react";
import ProductCard from "../product-card/product-card";
import styles from "./own-bucket.module.css";

export default function Page() {
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  const toggleAvailability = (option) => {
    setSelectedAvailability((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const resetFilters = () => setSelectedAvailability([]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Your Own Bucket</h1>

      <div className={styles.filterSection}>
        {/* Filter Section */}
        <div className={styles.filterOptions}>
          <div className={styles.filterLabel}>Filter:</div>
          <div>
            <button
              type="button"
              className={styles.filterButton}
              onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}
            >
              Availability
            </button>
            {isAvailabilityOpen && (
              <div className={styles.filterDropdown}>
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownHeaderText}>0 selected</span>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className={styles.resetButton}
                  >
                    Reset
                  </button>
                </div>
                <div>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes("In stock")}
                      onChange={() => toggleAvailability("In stock")}
                      className={styles.checkbox}
                    />
                    <span>In stock (15)</span>
                  </label>
                  <label
                    className={`${styles.checkboxLabel} ${styles.disabledCheckboxLabel}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAvailability.includes("Out of stock")}
                      onChange={() => toggleAvailability("Out of stock")}
                      className={styles.checkbox}
                      disabled
                    />
                    <span>Out of stock (0)</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => setPriceOpen(!isPriceOpen)}
              className={styles.filterButton}
            >
              Price
            </button>
            {isPriceOpen && (
              <div className={styles.filterDropdown}>
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownHeaderText}>
                    The highest price is Rs.200.00
                  </span>
                  <button type="button" className={styles.resetButton}>
                    Reset
                  </button>
                </div>
                <div className={styles.priceInputContainer}>
                  <label>
                    <span>&#8377;</span>
                    <input
                      type="number"
                      placeholder="From"
                      className={styles.priceInput}
                    />
                  </label>
                  <label>
                    <span>&#8377;</span>
                    <input
                      type="number"
                      placeholder="To"
                      className={styles.priceInput}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sort By Section */}
        <div className={styles.sortSection}>
          <span className={styles.sortLabel}>Sort by:</span>
          <select className={styles.sortSelect}>
            <option>Featured</option>
            <option value="best-selling" selected>
              Best selling
            </option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Date, old to new</option>
            <option>Date, new to old</option>
          </select>
          <span className={styles.productCount}>15 products</span>
        </div>
      </div>
      <div className={styles.productSection}>
        <ProductCard />
      </div>
    </div>
  );
}
