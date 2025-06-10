import Image from "next/image";
import styles from "./SearchInput.module.scss";

export default function SearchInput() {
  return (
    <form className={styles.searchForm}>
      {/* Botão de Submit Pesquisa */}
      <button type="submit" className={styles.searchButton}>
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={25}
          height={25}
          className={styles.searchIcon}
        />
      </button>

      {/* Botão Em Camisetas */}
      <button type="button" className={styles.categoryButton}>
        Em Camisetas
        <Image
          src="/icons/select--arrow.svg"
          alt="Select Arrow"
          width={9}
          height={10}
          className={styles.selectArrow}
        />
      </button>

      {/* Input de Pesquisa */}
      <input
        type="text"
        placeholder="Buscar produtos"
        className={styles.searchInput}
      />
    </form>
  );
}
