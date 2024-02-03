import { Link } from "react-router-dom"
import "./Footer.css"
import { FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer flex items-center min-h-[40vh]">
            <div className="w-[90%] mx-auto flex items-center justify-between flex-wrap py-10 gap-y-8">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-items-start gap-y-10">

                    <Link to="/">
                        <img src="/assets/img/footer-logo.png" alt="footer" className="w-[250px]" />
                    </Link>

                    <p className="font-semibold">&copy; Copyright 2024 . All Rights Reserved </p>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-wrap lg:flex-nowrap xl:flex-nowrap items-start justify-center lg:justify-evenly xl:justify-evenly gap-8">
                    <div className="flex flex-col gap-y-4 font-semibold">
                        <Link to="#">Sleep Test</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Sleep Problems</Link>
                        <Link to="#">How It Works</Link>
                    </div>

                    <img src="/assets/img/footer-line.png" alt="footer-line" className="hidden lg:block xl:block" />

                    <div className="flex flex-col gap-y-4 font-semibold">
                        <Link to="#">Talk To Sleep Expert</Link>
                        <Link to="#">Sleep Study At Home</Link>
                        <Link to="#">Terms & Conditions</Link>

                        <Link to="#">Privacy Policy</Link>
                    </div>

                    <img src="/assets/img/footer-line.png" alt="footer-line" className="hidden lg:block xl:block" />

                    <div className="flex flex-col gap-y-4 font-semibold">
                        <Link to="#">Contact Us:</Link>
                        <Link to="#">
                            <div className="flex items-center gap-x-2 gap-y-2">
                                <FaPhone />
                                +91 98672 27188
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="flex items-center gap-x-2 gap-y-2">
                                <FaMailBulk />
                                contact@remesleep.com
                            </div>
                        </Link>

                        <Link to="#">
                            <div className="flex items-center gap-x-2 gap-y-2">
                                <IoHomeSharp />
                                Flat No 404, Marathon Chambers, <br />
                                Near Lijjat Papad, Mulund (West),<br />
                                Mumbai - 400080
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer