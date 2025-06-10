import Image from "next/image";
import styles from "./Header.module.scss";
import SearchInput from "./local-components/SearchInput/SearchInput";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        {/* Logo */}
        <Image
          src="/logo-ideal.svg"
          alt="Ideal Logo"
          width={61}
          height={61}
          className={styles.logo}
        />

        {/* Input de Pesquisa */}
        <SearchInput />

        {/* Conteúdo do header */}
      </div>
    </header>
  );
}
