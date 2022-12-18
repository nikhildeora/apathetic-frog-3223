import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import {Link as RouterLink,useNavigate} from "react-router-dom"

export default function Login() {
  const { Login } = useContext(AuthContext)
  const [iterror, setIterror] = useState("")
  const [loading,setLoading] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const loginwithdata = async () => {
    // Login(emailRef.current.value,passwordRef.current.value)
     
    try {
      setIterror("");
      await Login(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch (error) {
      setIterror("invalid username or password")
    }

    
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          {iterror ? <Alert status='error'>
            <AlertIcon />
            {iterror}
          </Alert> : null}
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input ref={emailRef} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input ref={passwordRef} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <RouterLink to={"/forgotpass"}><span style={{color:"#469ae1"}} >Forgot password?</span></RouterLink>
                
              </Stack>
              <Button
                bg={'blue.400'}
                onClick={loginwithdata}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Need an account? <RouterLink to={"/signup"}><span style={{color:"#469ae1"}} >signup</span></RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}