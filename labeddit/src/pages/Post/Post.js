import { Header } from "../../components/header"
import {
    Flex,
    Box,
    FormControl,
    Stack,
    Button,
    useColorModeValue,
    Textarea,
    ScaleFade,
    Spinner,
    Grid
} from "@chakra-ui/react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { BASE_URL } from "../../constants/url";
import { PostCard } from "../../components/PostCard";



export const Post = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: ""
    });

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const createPost = async () => {
        try {
            setIsLoading(true);

            const token = window.localStorage.getItem("labeddit-token");

            const config = {
                headers: {
                    Authorization: token
                }
            };

            const body = {
                name: form.name

            };

            await axios.post(BASE_URL + "/posts", body, config);

            setIsLoading(false);
            setForm({
                name: ""
            });

            window.alert("Post criado com sucesso!");
        } catch (error) {
            setIsLoading(false);
            console.error(error?.response?.data?.message);
            window.alert("Erro ao criar Post! Veja o console");
        }
    };

    return (
        <>
            <Header />

            <ScaleFade initialScale={0.9} in={true}>
                <Flex
                    // border={"2px"}
                    minH={"10vh"}
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
                                        onChange={changeForm}
                                        value={form.description}
                                        minH="131px"
                                    />


                                </FormControl>

                                <Stack spacing={10} pt={2}>

                                    <Button
                                        w='365px'
                                        h='51px'
                                        color={"white"}
                                        bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                                        borderRadius={12}

                                        _hover={{
                                            bg: "orange.500"
                                        }}
                                        onClick={createPost}
                                    >
                                        {isLoading ? <Spinner /> : "Postar"}

                                    </Button>

                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </ScaleFade>
            <PostCard/>
        </>

    )
}