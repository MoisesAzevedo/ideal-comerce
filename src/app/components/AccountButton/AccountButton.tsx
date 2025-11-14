import Image from "next/image";
import { getAssetPath } from "@/utils/paths";
import SelectArrow from "../Header/local-components/Navigation/SelectArrow";
import styles from "./AccountButton.module.scss";

interface AccountButtonProps {
  variant?: 'header' | 'sidebar';
  onClick?: () => void;
}

export default function AccountButton({ variant = 'header', onClick }: AccountButtonProps) {
  return (
    <button 
      className={`${styles.accountButton} ${styles[variant]}`}
      onClick={onClick}
      data-name={`account-button-${variant}`}
    >
      <Image
        src={getAssetPath('/icons/military-user.svg')}
        alt="Conta"
        width={20}
        height={20}
        className={styles.accountIcon}
        data-name="account-icon"
      />
      <span className={styles.accountLabel} data-name="account-label">Entrar</span>
      <span className={styles.accountArrow} data-name="account-arrow">
        <SelectArrow color="#f8f8f8" />
      </span>
    </button>
  );
}
