import "./Navbar.css"
import { Link } from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full relative top-0 left-0 bg-transparent">
            <div className="w-[90%] mx-auto py-6 navbar flex items-center justify-between flex-wrap">
                <Link to="/">
                    <img src="/assets/img/nav-logo.png" alt="logo" className="w-[200px] lg:w-[250px] xl:w-[300px]" />
                </Link>

                <div className="block lg:hidden xl:hidden">
                    <IconButton className="bg-white shadow-lg shadow-black" onClick={() => setOpen(!open)}>
                        <CiMenuFries size={20} className="text-green-500" />
                    </IconButton>
                </div>

                <div className="nav-links hidden lg:flex xl:flex items-center justify-between">
                    <Link to="/" className="nav-item">Sleep Test</Link>
                    <Link to="/" className="nav-item">Services</Link>
                    {/* <Menu>
                        <MenuButton fontSize={18} fontWeight="600" color="#fff" bg="transparent" _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }} as={Button} rightIcon={<FaAngleDown />}>
                        Services
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu> */}
                    <Link to="/" className="nav-item">About</Link>
                    <Link to="/" className="nav-item">Blog</Link>
                </div>

                {/* respnav */}
                {
                    open && (
                        <div style={{
                            boxShadow: "0 .125px 1px 0 rgba(0,0,0,0.6)"
                        }} className="absolute top-16 left-0 right-0 lg:hidden xl:hidden w-[95%] mx-auto min-h-[200px] bg-white rounded-md px-4 py-4 mt-4 z-50 transition-all duration-300 ease-in-out flex flex-col gap-y-4">
                            <Link to="/" className="text-center">Home</Link>
                            <Link to="/" className="text-center">Sleep Test</Link>
                            <Menu>
                                <MenuButton fontSize={16} color="#555fab" bg="transparent" _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }} as={Button} rightIcon={<FaAngleDown />}>
                                    Services
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                            <Link to="/" className="text-center">About</Link>
                            <Link to="/" className="text-center">Blog</Link>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar