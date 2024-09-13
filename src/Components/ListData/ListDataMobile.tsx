import ListItem from "./components/ListItem";
import styles from "./ListDataMobile.module.css";

const ListDataMobile = ({ tableData, headers, handler }: any) => {
  
  const handleClick = (data: string) => {
    handler(data);
  };

  return (
    <div className={styles.listMobileContainer}>
      <div className={styles.listMobileMain}>
        {tableData?.map((data, i) => {
          return (
            <ListItem
              key={`data-${i}`}
              data={data}
              headers={headers ? headers : []}
              handler={() => handleClick(data.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListDataMobile;
