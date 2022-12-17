import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from "../Images/Newfitnexylogo.jpg"
import {Link as RouterLink, Route} from "react-router-dom"

// borderColor={useColorModeValue('grey.200', 'gray.900')}
export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex

                bg={useColorModeValue('#1875d2', 'gray.800')}
                color={useColorModeValue('white', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: { marginLeft: "10px" } }}>
                    {/* <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                            logo
                    </Text> */}
                    <RouterLink to={"/"}>

                    <Image w={"170px"} border={"none"} src={logo} ></Image>
                    </RouterLink>


                    <Flex justifyContent={"center"} alignItems={"center"} display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>

                    <Button                      
                        fontSize={'md'}
                        fontWeight={400}
                        variant={'link'}
                        color={"white"}
                        >
                 <RouterLink to={"/login"}>
                        Sign In
                </RouterLink>
                    </Button>
                    <RouterLink to={"/signup"}>

                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'md'}
                        fontWeight={600}
                        color={'blue'}
                        bg={'white'}
                        _hover={{
                            bg: 'blue',
                            color: 'white'
                        }}>
                        Sign Up
                    </Button>
                </RouterLink>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('grey.600', 'gray.200');
    const linkHoverColor = useColorModeValue('black', 'white');
    const popoverContentBgColor = useColorModeValue('#1875d2', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>

                            <RouterLink to={navItem.href ?? navItem.href}>
                            <Text
                                p={2}
                                // href={navItem.href ?? '#'}
                                fontSize={'lg'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Text>
                         </RouterLink>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

//   : NavItem)


const DesktopSubNav = ({ label, href, subLabel }) => {
    
    return (
        
        <RouterLink to={subLabel ? href : null}>

        <Box
        
        role={'group'}
        display={'block'}
        p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('white', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'black' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'black'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    </RouterLink>
   
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

// as={Link}
// href={href ?? '#'}
//   : NavItem
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                 <RouterLink to={href ?? href}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
              </RouterLink>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <RouterLink key={child.label} to={child.subLabel ? child.href : null}>
                            {/* href={child.href} */}
                            <Text  py={2} >
                                {child.label}
                            </Text>
                            </RouterLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

// : Array<NavItem>
const NAV_ITEMS = [
    {
        label: 'GetApp',
        children: [
            {
                label: 'Workout App (ios)',
                href: 'https://apps.apple.com/app/apple-store/id449810000',
            },
            {
                label: 'Workout App (Android)',
                href: 'https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail',
            },
        ],
    },
    {
        label: 'Workout Plans',
        children: [
            {
                label: 'My Plans',
                subLabel: 'in',
                href: '/myplans',
            },
            {
                label: 'Create new Plan',
                subLabel: 'in',
                href: '/createnewplan',
            },
        ],
    },
    {
        label: 'Exercises',
        href: '/exercise',
    },
    {
        label: 'Blog',
        href: '/community',
    },
    {
        label: 'Coach',
        href: '/coach',
    },
    {
        label: 'Elite',
        href: '/elite',
    },
];