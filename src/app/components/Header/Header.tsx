import Image from "next/image";
import styles from "./Header.module.scss";
import SearchInput from "./local-components/SearchInput/SearchInput";
import UserActions from "./local-components/UserActions/UserActions";
import { getAssetPath } from "@/utils/paths";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        {/* Logo */}
        <Image
          src={getAssetPath("/logo-ideal.svg")}
          alt="Ideal Logo"
          width={61}
          height={61}
          className={styles.logo}
        />

        {/* Input de Pesquisa */}
        <SearchInput />

        {/* Ações do Usuário */}
        <UserActions />

        {/* Conteúdo do header */}
      </div>
    </header>
  );
}
