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
    CheckboxGroup,
    Spinner
    } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import { Titulo } from "./styled";



export const Signup = () => {
    const navigate = useNavigate();
    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })
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
            <FormControl id="apelido">
              <FormLabel>Apelido</FormLabel>
              <Input
                type="apelido"
                autoComplete="off"
                name="apelido"
                onChange={onChangeInputs}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                autoComplete="off"
                name="email"
                onChange={onChangeInputs}
              />
            </FormControl>
            <FormControl id="senha">
              <FormLabel>Senha</FormLabel>
              <Input type="senha" 
              name="senha"
               onChange={onChangeInputs} />
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
                Cadastrar
                
              </Button>
            
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </>
    )

}