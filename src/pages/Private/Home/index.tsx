import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import ModalPicture from './ModalPicture';
import PictureList from './PictureList';

const Links = ['Book'];

const NavLink = ({ children }: { children: string }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.500', 'gray.800'),
    }}
    href="/"
  >
    {children}
  </Link>
);

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleLogout() {
    setIsLoading(true);
    sessionStorage.clear();
    setTimeout(() => history.push('/home'), 2000);
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              mr={4}
              leftIcon={<AddIcon />}
              onClick={(): void => setModalIsVisible(true)}
            >
              Add new image
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                colorSchema="blackAlpha"
                rounded="full"
                variant="link"
                cursor="pointer"
                _hover={{ bg: 'gray.700' }}
              >
                <Avatar
                  size="sm"
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={handleLogout}
                  icon={<CloseIcon />}
                  color="red.500"
                >
                  Log out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <ModalPicture
        isOpen={modalIsVisible}
        onClose={(): void => setModalIsVisible(false)}
      />
      <Box ml={80} mt={30} mb={30}>
        <Heading mb={6}>Picture Book</Heading>
      </Box>
      <PictureList />
    </>
  );
};
export default Home;
