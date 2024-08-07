import styles from "./ListItem.module.css";
import { textTruncateHandler } from "../../../../utils/handlers/textTruncate";

const ListItem = ({
  Casa,
  email,
  Nombre,
}: {
  Casa: number | undefined;
  email: string | undefined;
  Nombre: string | undefined;
}) => {
  return (
    <div className={styles.listMobileItem}>
      <p>Casa: {Casa}</p>
      <p>Email: {textTruncateHandler(email, 15)}</p>
      <p>Nombre: {Nombre}</p>
    </div>
  );
};

export default ListItem;
