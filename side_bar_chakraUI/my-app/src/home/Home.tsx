import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import SideBar from "../sidebar/SideBar";


const Home = () => {
  const [collapse, setCollapse] = React.useState(true);

  return (
    <HStack w="full" h="100vh" bg="gray.100" gap={0}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 250 : 0}
        bg="white"
        alignItems="start"
        pl={collapse ? 6 : 0}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        // borderRadius="3xl"
      >
        <SideBar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        // borderRadius="3xl"
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={100} color="gray.300">
          Main1
        </Text>
      </Flex>
    </HStack>
  );
};

export default Home;