import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
const TransactionCard = ({
  _id,
  title,
  description,
  image,
  price,
  sold,
  category,
}) => {
  console.log(_id, "image");
  return (
    <Box
      p={6}
      //   className="shadow-custom"

      style={{
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
      }}
    >
      <Image src={image} height={"150px"} w={"150px"} />
      <Text fontWeight={"bold"} textAlign={"center"} mt={3}>{title}</Text>
      <Text mt={3}>{description}</Text>
      <Text fontWeight={"bold"} mt={3}>Price :{price}</Text>
    </Box>
  );
};

export default TransactionCard;
