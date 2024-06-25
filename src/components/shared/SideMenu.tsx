"use client";

import { client } from "@/consts/client";
import { useGetENSName } from "@/hooks/useGetENSName";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useColorMode,
  useDisclosure,
  Image,
  Flex,
  Text,
  Divider
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";

export function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { disconnect } = useDisconnect();
  const account = useActiveAccount();
  const { data: ensName } = useGetENSName({ address: account?.address });
  const { colorMode, toggleColorMode } = useColorMode();
  const wallet = useActiveWallet();

  return (
    <>
      <Button
        display={{ lg: "none", base: "block" }}
        ref={btnRef}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
              {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="/" passHref>
                <Box
                  as="a"
                  fontSize='3xl'
                  w='full'
                  px={4}
                  py={2}
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700", textDecoration: "none" }}
                  borderRadius="md"
                >
                  Home
                </Box>
              </Link>
              <Link href="/marketplace" passHref>
                <Box
                  as="a"
                  fontSize='3xl'
                  w='full'
                  px={4}
                  py={2}
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700", textDecoration: "none" }}
                  borderRadius="md"
                >
                  Marketplace
                </Box>
              </Link>
              <Link href="/games" passHref>
                <Box
                  as="a"
                  fontSize='3xl'
                  w='full'
                  px={4}
                  py={2}
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700", textDecoration: "none" }}
                  borderRadius="md"
                >
                  Games
                </Box>
              </Link>
              <Link href="/infos" passHref>
                <Box
                  as="a"
                  fontSize='3xl'
                  w='full'
                  px={4}
                  py={2}
                  _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700", textDecoration: "none" }}
                  borderRadius="md"
                >
                  Infos
                </Box>
              </Link>
            </VStack>
            <Box mt={8}>
              <ConnectButton theme={colorMode} client={client} />
            </Box>
            {account && (
              <Link href="/profile">
                Profile {ensName ? `(${ensName})` : ""}
              </Link>
            )}
          </DrawerBody>
          <DrawerFooter>
            {account && (
              <Button
                onClick={() => {
                  if (wallet) disconnect(wallet);
                }}
              >
                Logout
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function SideMenuDesktop() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      w="250px"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      p={5}
      direction="column"
      justifyContent="space-between"
      display={{ base: "none", lg: "flex" }}
    >
      <Box>
        <Box mt={4} mb={10} ml={10}>
          <Image
            src='/logo.jpg'
            height="80px"
            rounded="50px"
          />
        </Box>
        <VStack spacing={4} align="flex-start">
          <Link href="/" passHref className="w-full">
            <div className="flex w-full px-4 py-2 text-3xl rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Home
            </div>
          </Link>
          <Link href="/marketplace" passHref className="w-full">
            <div className="flex w-full px-4 py-2 text-3xl rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Marketplace
            </div>
          </Link>
          <Link href="/games" passHref className="w-full">
            <div className="flex w-full px-4 py-2 text-3xl rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Games
            </div>
          </Link>
          <Link href="/infos" passHref className="w-full">
            <div className="flex w-full px-4 py-2 text-3xl rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Infos
            </div>
          </Link>
        </VStack>
      </Box>
      <Box>
        <Divider />
        <ConnectButton theme={colorMode} client={client} />
      </Box>
    </Flex>
  );
}