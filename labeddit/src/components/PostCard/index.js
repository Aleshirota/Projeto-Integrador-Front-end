import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Skeleton
} from "@chakra-ui/react";
import { goToLogin } from "../../routes/coordinator";

export const PostCard = ()=>{

  const navigate = useNavigate();
  const params = useParams();

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");

    if (!token) {
      goToLogin(navigate);
    } else {
      fetchPostDetails();
    }
  }, []);

  const fetchPostDetails = async () => {
    try {
      setIsLoading(true);

      const token = window.localStorage.getItem("labeddit-token");

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(
        BASE_URL + `/posts/${params.postId}`,
        config
      );

      setDetails(response.data);
      setIsLoading(false);
      console.log(response.data)
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data?.message); 
      // window.alert("Erro ao buscar post! Veja o console");
    }
  };

  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Skeleton w={"100%"} isLoaded={!isLoading}>
             
            </Skeleton>
          </Flex>
          <Skeleton isLoaded={!isLoading}>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
               
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  enviada por {details.creatorName}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>{details.name}</Text>
                </VStack>

                <VStack spacing={{ base: 4, sm: 6 }}>
                  
                </VStack>
              </Stack>
            </Stack>
          </Skeleton>
        </SimpleGrid>
      </Container>
    </>
  );
}
