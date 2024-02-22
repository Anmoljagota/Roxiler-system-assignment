import React from "react";
import { Tr, Td, Image } from "@chakra-ui/react";
import Styles from "../AllCss/AllCss.module.css";
const TransactionTable = ({
  _id,
  title,
  description,
  image,
  price,
  sold,
  category,
  
}) => {
  console.log("hlo...");
  return (
    // <Skeleton isLoaded={loading1} w={"100%"}>
    <Tr>
      <Td className={Styles.td1}>{_id}</Td>
      <Td className={Styles.td2}>{title}</Td>
      <Td className={Styles.td3}>{description}</Td>
      <Td className={Styles.td4}>{price}</Td>
      <Td className={Styles.td5}>{category}</Td>
      <Td className={Styles.td6}>{sold ? "Sold" : "Not Sold"}</Td>
      <Td className={Styles.td7}>
        <Image src={image} height="100px" width="150px" />
      </Td>
    </Tr>
    // </Skeleton>
  );
};

export default React.memo(TransactionTable);
