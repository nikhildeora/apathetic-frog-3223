import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
  } from '@chakra-ui/react';
  import "../Styles/Blogs.css"

  
  const BlogTags = (props) => {
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        {props.tags.map((tag) => {
          return (
            <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </HStack>
    );
  };
  
  
  export const BlogAuthor = (props) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src={props.image}
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        
      </HStack>
    );
  };
  
  const SingleBlog = () => {
  const {blog} = useContext(DataContext)

    return (
      <Container maxW={'7xl'} p="12">
        
        <Heading as="h2" marginTop="5">
          Our Latest Blogs
        </Heading>
        <Divider marginTop="5" />
        
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      blog.image
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={['Exercise', 'Be Healthy']} marginTop="3" />
              <Heading  marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  {blog.name}
                </Link>
              </Heading>
              <Text  marginTop="2" textAlign={"left"}>
                {blog.description} 
              </Text>
              <BlogAuthor
                name={blog.authorname}
                image = {blog.authourimage}
              />
            </Box>
          
       
        
      </Container>
    );
  };
  
  export default SingleBlog; 

// const SingleBlog = () => {
// const {blog} = useContext(DataContext)
// console.log(blog);

//   return (
//     <>
    
//     </>
//   )
// }

// export default SingleBlog;