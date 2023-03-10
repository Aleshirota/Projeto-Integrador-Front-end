import { Header } from "../../components/header"
import {
    Flex,
    Box,
    FormControl,
    Stack,
    Button,
    useColorModeValue,
    Textarea,
    ScaleFade
} from "@chakra-ui/react";

export const Post = () => {

    return (
        <>
            <Header />

            <ScaleFade initialScale={0.9} in={true}>
                <Flex
                    minH={"100vh"}
                    align={"center"}
                    justify={"center"}
                    bg={useColorModeValue("gray.50", "gray.800")}
                >
                    <Stack spacing={8} mx={"auto"} w={"475px"} py={12} px={6}>
                        <Stack align={"center"}>

                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                        >
                            <Stack spacing={4}>

                                <FormControl
                                bg={"#EDEDED"}
                                 id="description" isRequired>
                                    {/* <FormLabel>Descrição</FormLabel> */}
                                    <Textarea

                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: "gray.300"
                                        }}
                                        placeholder="Escreva seu Post..."
                                        name="description"
                                        //   onChange={changeForm}
                                        //   value={form.description}
                                        minH="131px"
                                    />
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                  
                                    <Button
                                        // onClick={login}
                                        w='365px'
                                        h='51px'
                                        color={"white"}
                                        bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                                        borderRadius={12}

                                        _hover={{
                                            bg: "orange.500"
                                        }}
                                    >
                                        {/* {isLoading ? <Spinner /> : "Entrar"} */}
                                        Postar
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </ScaleFade>
        </>
    )
}