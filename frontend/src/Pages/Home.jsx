import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import TransactionTable from "../components/TransactionTable";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import { Accoding_Month, AllData, Searching_Data } from "../Redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SelectTag from "../components/SelectTag";
import MonthModal from "../components/MonthModal";
const Home = () => {
  const [search, setSearch] = useState("");
  const id = React.useRef();

  const { Transactions, loading } = useSelector(
    (details) => ({
      Transactions: details.TransactionData.data,
      loading: details.TransactionData.loading,
    }),
    shallowEqual
  );
  const [page, setPage] = useState(1);
  const limit = useRef(10);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search === "") {
      dispatch(AllData(page, limit.current));
    } else {
      dispatch(Searching_Data(search));
    }
  }, [search, page]);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(id.current, "currentid");
    if (id.current) clearTimeout(id.current);
    id.current = setTimeout(() => {
      setSearch({ ...search, value });
    }, 2000);
  };
  const handleMonth = (e) => {
    dispatch(Accoding_Month(e.target.value));
  };

  return (
    <Box className="min-h-[70vh] lg:min-w-[78vw] md:min-w-[95vw] sm:min-w-[100vw] min-w-[100vw] shadow-2xl m-auto bg-white mt-2">
      <Box className="m-auto md:w-[95%] sm:w-[100%]">
        <Flex className="justify-between items-center p-4">
          <Flex className="justify-center	items-center gap-2.5">
            <FaUserCircle className="text-3xl text-[#1d4ed8]" />
            <Text className="text-lg text-slate-600">Transactions</Text>
          </Flex>
          <input
            type="text"
            className="rounded-md md:py-2 md:px-6 shadow-md"
            placeholder="Search..."
            onChange={handleChange}
          />

          <Box gap={8} display={{ lg: "flex", sm: "none", base: "none" }}>
            <SelectTag name="Select Month" fun={handleMonth} />
            <MonthModal />
          </Box>
          <Link to="/chart" className="w-20">
            <Button colorScheme="whatsapp" w="100%">
              Stats
            </Button>
          </Link>
        </Flex>

        <Box
          gap={8}
          justifyContent={"flex-end"}
          display={{ lg: "none", sm: "flex", base: "flex" }}
          mt={2}
        >
          <SelectTag name="Select Month" fun={handleMonth} />
          <MonthModal />
        </Box>
        {loading ? (
          <Center className="mt-12">...Loading</Center>
        ) : (
          <>
            <TableContainer mt="1.4rem">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>Price</Th>
                    <Th>Category</Th>
                    <Th>Sold</Th>
                    <Th>Image</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Transactions.length > 0 &&
                    Transactions.map((ele, i) => (
                      <TransactionTable key={i} {...ele} />
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Pagination page={page} setPage={setPage} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
