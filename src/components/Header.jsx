import { Heading, Button, Flex, Stack, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      h={{ xsm: "60vh", md: "40vh" }}
      bgImage={`url("https://img.freepik.com/foto-gratis/motociclista-silueta-conquista-pico-montana-al-anochecer-generado-ia_188544-40679.jpg?w=1060&t=st=1701223524~exp=1701224124~hmac=269faa1aa2ebf9cda3bb6e7aeb30cd4d1623ce7f11e94989e4fa6b696c0c9ae0")`}
      backgroundPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading
          color="white"
          textAlign="center"
          fontWeight="light"
          letterSpacing="5px"
        >
          DOMINA EL TERRENO
        </Heading>

        <Stack
          direction={{ xsm: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button
            variant="outline"
            margin="2px"
            size="lg"
            fontWeight="light"
            borderRadius="0px"
            color="telegram"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            VER DETALLES
          </Button>

          <Button
            variant="outline"
            size="lg"
            margin="2px"
            fontWeight="light"
            borderRadius="0px"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            VER VIDEO
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
