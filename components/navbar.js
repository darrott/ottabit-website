import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Container,
  Box, 
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from "@chakra-ui/react"

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = "#202023" 
  return (
    <NextLink href={href}>
    <Link
      p={2}
      bg={active ? 'glassTeal' : undefined }
      color={active ? '#202023' : inactiveColor }
      >
      {children}
      </Link>
    </NextLink>
  )  
}

const Navbar = props => {
  const path = props
  
  return(
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#ffffff40"
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" alignItems="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
          <Stack 
            direction={{ base: "column:", md: "row" }}
            display={{ base: 'none', md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
            <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
          <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                  <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
