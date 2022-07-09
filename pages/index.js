import { Container, Box, Heading } from "@chakra-ui/react"

export default function Page(){
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Ciao, mi chiamo Andrea
      </Box>
        <Box display={{ md: "flex "}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrea Doghetti
          </Heading>
        </Box>
      </Box>
    </Container>
  )
}
