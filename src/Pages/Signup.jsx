import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from '../Contexts/AuthContext';
import {Link as RouterLink,useNavigate} from "react-router-dom"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [strong,setStrong] = useState("")
  const { Signup ,updateprofilename,emailverify } = useContext(AuthContext)
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [iterror, setIterror] = useState("")
  const navigate = useNavigate()

  const getformdata = async () => {
    // Signup(emailRef.current.value,passwordRef.current.value)
    let strength = check_strength(passwordRef.current.value)

    if(strength){
      try {
        setIterror("")
        await Signup(emailRef.current.value, passwordRef.current.value);
        await updateprofilename(firstnameRef.current.value+" "+lastnameRef.current.value);
        await emailverify()
        navigate("/")
      } catch (error) {
        setIterror("Sorry there is some error")
      }
    }
  

  }

  function check_strength(password) {
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
   
   if (mediumRegex.test(password)) {
        setStrong("")
        return true;
    } else {
        setStrong("Password is weak")
        return false;
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            {strong ? <Alert status='error'>
            <AlertIcon />
            {strong}
          </Alert> : null }
          {iterror ? <Alert status='error'>
            <AlertIcon />
            {iterror}
          </Alert> : null}
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input ref={firstnameRef} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input ref={lastnameRef} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input ref={emailRef} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input ref={passwordRef} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                onClick={getformdata}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?<RouterLink to={"/login"}><span style={{color:"#469ae1"}} >Login</span></RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

