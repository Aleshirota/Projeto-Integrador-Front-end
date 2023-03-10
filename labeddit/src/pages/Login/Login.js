
import { useForm } from "../../hooks/use-form"
import logoLabeddit from "../../assets/Group 1.jpg"
import { 
    LoginPageContainer,
    FormContainer,
    Logolabeddit
} from "./styled"

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
  Spinner
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../routes/coordinator";
import { color } from "framer-motion";



export const Login = ()=>{
  const navigate = useNavigate();
    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (e)=>{
e.preventDefault()

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
                onChange={onChangeInputs}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="password" onChange={onChangeInputs} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                // onClick={login}
                w='365px' 
                h='51px'
                color={"white"}
                bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                 borderRadius={27}
                _hover={{
                  bg: "orange.500"
                }}
              >
                {/* {isLoading ? <Spinner /> : "Entrar"} */}
                Continuar
              </Button>
              
              <Button
                // onClick={login}
                onClick={() => goToSignup(navigate)}
                w='365px' 
                h='51px' 
                color={"#FE7E02"}
                background={"white"}
                // bgGradient='linear(to-l,  #F9B24E, #FF6489)'
                borderRadius={27}
                border={"2px"}
                
                _hover={{
                  bg: "#EDEDED"
                
                }}
              >
                {/* {isLoading ? <Spinner /> : "Entrar"} */}
                Criar uma conta!
                
              </Button>
            </Stack>
            {/* <Stack pt={6}> */}
              {/* <Text align={"center"}>
                Ainda não tem conta?{" "}
                <Link
                  onClick={() => goToSignup(navigate)}
                  color={"blue.400"}
                >
                  Cadastrar
                </Link>
              </Text> */}
            {/* </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>




       
    )
    
}