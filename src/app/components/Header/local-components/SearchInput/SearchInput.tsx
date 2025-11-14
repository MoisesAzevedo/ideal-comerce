import Image from "next/image";
import styles from "./SearchInput.module.scss";
import { getAssetPath } from "@/utils/paths";

export default function SearchInput() {
  return (
    <form className={styles.searchForm} data-name="search-form">
      {/* Botão de Submit Pesquisa */}
      <button type="submit" className={styles.searchButton} data-name="search-submit">
        <Image
          src={getAssetPath("/icons/search.svg")}
          alt="Search"
          width={25}
          height={25}
          className={styles.searchIcon}
          data-name="icon-search"
        />
      </button>

      {/* Botão Em Camisetas */}
      <button type="button" className={styles.categoryButton} data-name="category-button">
        <span data-name="category-label">Em Camisetas</span>
        <Image
          src={getAssetPath("/icons/select--arrow.svg")}
          alt="Select Arrow"
          width={9}
          height={10}
          className={styles.selectArrow}
          data-name="icon-select-arrow"
        />
      </button>

      {/* Input de Pesquisa */}
      <input
        type="text"
        placeholder="Buscar produtos"
        className={styles.searchInput}
        data-name="search-input"
      />
    </form>
  );
}
