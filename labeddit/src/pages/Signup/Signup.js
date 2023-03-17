import { Header } from "../../components/header"
import {
    
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Text,
    useColorModeValue,
    Checkbox, 
    Spinner
    } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Titulo } from "./styled";
import { useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/url";
import { goToLogin } from "../../routes/coordinator";

export const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
      name: "",
      email: "",
      password: ""
    });

    const changeForm = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };

    const signupPage = async () => {
      try {
        setIsLoading(true);
  
        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        };
  
        const response = await axios.post(BASE_URL + "/users/signup", body);
        window.localStorage.setItem("labeddit-token", response.data.token);
  window.alert("conta criada com sucesso")
        setIsLoading(false);
        goToLogin(navigate);
      } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data?.message); 
        window.alert("Erro ao cadastrar conta! Veja o console");
      }
    };
    return (
        <>
            <Header />
            
            <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
         <Titulo>Olá, boas vindas ao LabEddit;</Titulo>
          
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Apelido</FormLabel>
              <Input
                type="text"
                autoComplete="off"
                name="name"
                onChange={changeForm}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                autoComplete="off"
                name="email"
                onChange={changeForm}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input 
             type={showPassword ? "text" : "password"}
              name="password"
               onChange={changeForm} 
               />
            </FormControl>
           
            <Stack pt={6}>
              <Text align={"center"}>
                Ao continuar, você concorda com o nosso {" "}
                <Link
                //   onClick={() => goToSignup(navigate)}
                  color={"blue.400"}
                >
                  Contrado de usuário {""}
                </Link>
                e nossa {" "}
                <Link
                //   onClick={() => goToSignup(navigate)}
                  color={"blue.400"}
                >
                  Política de Privacidade
                </Link>
              </Text>
            </Stack>
            <Checkbox 
            defaultChecked>
            Eu concordo em receber emails 
            sobre coisas legais no Labeddit
            </Checkbox>

            <Stack spacing={10}>
             
              <Button
                onClick={signupPage}
                w='365px' 
                h='51px' 
                color={"white"}
                bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                borderRadius={27}
                
                _hover={{
                  bg: "orange.500"
                }}
              >
                {isLoading ? <Spinner /> : "Cadastrar"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </>
    )
}