"use client";

import { client } from "@/consts/client";
import { useGetENSName } from "@/hooks/useGetENSName";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { FaCircleInfo } from "react-icons/fa6";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { PiStorefrontFill } from "react-icons/pi";
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
import { FaRegMoon, FaTelegramPlane, FaExternalLinkAlt } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoSunny, IoGameController } from "react-icons/io5";
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
              <Link href="/collection/8453/0xDEE1651cac5319A2e7f7aD260852DeF4724EC103" passHref>
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
  const marketplacePath = "/collection/8453/0xDEE1651cac5319A2e7f7aD260852DeF4724EC103";

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
        <Box mt={4} mb={10} className="flex items-center justify-center">
          <Image
            src='/logo-whisker.png'
            height="120px"
            className="rounded-full"
          />
        </Box>
        <VStack spacing={4} align="flex-start">
          <Link href="/" passHref className="w-full">
            <div className={`flex items-center justify-start w-full px-4 py-2 text-xl rounded-md ${pathname === "/" ? "link-active" : "hover-bg"}`}>
              <RiHomeSmile2Fill className="mr-2 text-cardText" />
              <span className="text-cardText">Home</span>
            </div>
          </Link>
          <Link href={marketplacePath} passHref className="w-full">
            <div className={`flex items-center justify-start w-full px-4 py-2 text-xl rounded-md ${pathname === marketplacePath ? "link-active" : "hover-bg"}`}>
              <PiStorefrontFill className="mr-2 text-cardText" />
              <span className="text-cardText">Marketplace</span>
            </div>
          </Link>
          <Link href="/games" passHref className="w-full">
            <div className={`flex items-center justify-start w-full px-4 py-2 text-xl rounded-md ${pathname === "/games" ? "link-active" : "hover-bg"}`}>
              <IoGameController className="mr-2 text-cardText" />
              <span>Games</span>
            </div>
          </Link>
          <Link href="/infos" passHref className="w-full">
            <div className={`flex items-center justify-start w-full px-4 py-2 text-xl rounded-md ${pathname === "/infos" ? "link-active" : "hover-bg"}`}>
              <FaCircleInfo className="mr-2 text-cardText" />
              <span className="text-cardText">Infos</span>
            </div>
          </Link>
          <Link href="https://mint.witwhisker.com/" passHref className="w-full" target="_blank" rel="noopener noreferrer">
            <div className={`flex items-center justify-start w-full px-4 py-2 text-xl rounded-md hover-bg`}>
              <FaExternalLinkAlt className="mr-2 text-cardText" />
              <span className="text-cardText">Mint</span>
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