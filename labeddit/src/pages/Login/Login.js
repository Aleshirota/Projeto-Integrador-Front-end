import logoLabeddit from "../../assets/Group 1.jpg"
import { 
   
    Linha,
    Logolabeddit
} from "./styled"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Spinner
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { goToPost, goToSignup } from "../../routes/coordinator";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export const Login = ()=>{

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    }
    
    const loginPage = async () => {
      try {
        setIsLoading(true);
  
        const body = {
          email: form.email,
          password: form.password
        };
  console.log(response)
        const response = await axios.post(BASE_URL + "/users/login", body);
        window.localStorage.setItem("labeddit-token", response.data.token);
        window.alert("Login realizado com sucesso")
        setIsLoading(false);
        goToPost(navigate);
      } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data?.message); 
        window.alert("Erro ao fazer login! Veja o console");
      }
    }

    return(

<Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Logolabeddit src={logoLabeddit} alt="logoLabeddit" />
          <Text fontSize={"lg"} color={"gray.600"}>
            O projeto de rede social Labenu
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                autoComplete="off"
                name="email"
                onChange={changeForm}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input 
              type="password" 
              name="password" 
              onChange={changeForm} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={loginPage}
                w='365px' 
                h='51px'
                color={"white"}
                bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                 borderRadius={27}
                _hover={{
                  bg: "orange.500"
                }}
              >
                {isLoading ? <Spinner /> : "Continuar"}
              </Button>
           <Linha/>
              <Button
                onClick={() => goToSignup(navigate)}
                w='365px' 
                h='51px' 
                color={"#FE7E02"}
                background={"white"}
                borderRadius={27}
                border={"2px"}
                _hover={{
                  bg: "#EDEDED"
                }}
              >
                Criar uma conta!
                
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>




       
    )
    
}