"use client";

import { client } from "@/consts/client";
import { useGetENSName } from "@/hooks/useGetENSName";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Divider
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaRegMoon, FaTelegramPlane } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
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
              <Link href="/collection/84532/0xcc5Fcb80dc14C1de40c3CCb26fa4b0CEa0fc5665" passHref>
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
  const pathname = usePathname();
  const marketplacePath = "/collection/84532/0xcc5Fcb80dc14C1de40c3CCb26fa4b0CEa0fc5665";

  return (
    <Flex
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      w="250px"
      // bg={colorMode === "light" ? "gray.100" : "gray.900"}
      p={5}
      direction="column"
      justifyContent="space-between"
      display={{ base: "none", lg: "flex" }}
    >
      <Box>
        <Box mt={4} mb={10}>
          <Image
            src='/logo.jpg'
            height="80px"
            rounded="50px"
          />
        </Box>
        <VStack spacing={4} align="flex-start">
          <Link href="/" passHref className="w-full">
            <div className={`flex w-full px-4 py-2 text-xl rounded-md ${pathname === "/" ? "link-active" : "hover-bg"}`}>
              Home
            </div>
          </Link>
          <Link href={marketplacePath} passHref className="w-full">
            <div className={`flex w-full px-4 py-2 text-xl rounded-md ${pathname === marketplacePath ? "link-active" : "hover-bg"}`}>
              Marketplace
            </div>
          </Link>
          <Link href="/games" passHref className="w-full">
            <div className={`flex w-full px-4 py-2 text-xl rounded-md ${pathname === "/games" ? "link-active" : "hover-bg"}`}>
              Games
            </div>
          </Link>
          <Link href="/infos" passHref className="w-full">
            <div className={`flex w-full px-4 py-2 text-xl rounded-md ${pathname === "/infos" ? "link-active" : "hover-bg"}`}>
              Infos
            </div>
          </Link>
        </VStack>
      </Box>
      <Box>
        <Divider />
        <div className="flex flex-row justify-center gap-3 mt-4">
          <a href="https://discord.com/invite/unjG6yz4T3" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <DiscordLogoIcon className="w-8 h-8" />
          </a>
          <a href="https://x.com/Whisker_Witcoin" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <TwitterLogoIcon className="w-8 h-8" />
          </a>
          <a href="https://linktr.ee/WhiskerWIT" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <SiLinktree className="w-8 h-8" />
          </a>
          <a href="https://t.me/WhiskerCommunity" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <FaTelegramPlane className="w-8 h-8" />
          </a>
        </div>
      </Box>
    </Flex>
  );
}