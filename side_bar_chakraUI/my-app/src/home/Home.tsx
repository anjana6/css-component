import { Avatar, Box, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdMenu} from "react-icons/md";
import SideBar from "../sidebar/SideBar";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'


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
        // alignItems="center"
        // justifyContent="center"
        flexDirection="column"
        position="relative"
        // borderRadius="3xl"
      >
        
        {/* <Text fontSize={100} color="gray.300">
          Main1
        </Text> */}
        <HStack spacing={{ base: '0', md: '6' }} justifyContent={'space-between'} px="5">
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          // position="absolute"
          // top={6}
          // left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <HStack>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'} justifyContent={'flex-end'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              // bg={useColorModeValue('white', 'gray.900')}
              // borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        </HStack>
      </HStack>
      </Flex>
    </HStack>
  );
};

export default Home;