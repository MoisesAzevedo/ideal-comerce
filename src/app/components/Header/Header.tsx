import styles from "./Header.module.scss";
import SearchInput from "./local-components/SearchInput/SearchInput";
import UserActions from "./local-components/UserActions/UserActions";
import Navigation from "./local-components/Navigation/Navigation";
import { getAssetPath } from "@/utils/paths";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          {/* Logo */}

          <img
            src={getAssetPath("/logo-mod.png")}
            alt="Ideal Logo"
            className={styles.logo}
          />

          {/* Input de Pesquisa */}
          <SearchInput />

          {/* Ações do Usuário */}
          <UserActions />

          {/* Conteúdo do header */}
        </div>
      </header>
      <Navigation />
    </>
  );
}
