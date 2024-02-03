import "./Hero.css"
import { Button, IconButton } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div style={{ background: `url("/assets/img/frame@2x.png")`, backgroundSize: "cover", backgroundBlendMode: "darken", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="w-full">
            <Navbar />
            <div className="w-[80%] lg:w-[90%] xl:w-[90%] mx-auto min-h-[100vh] flex items-center pt-10 1300px:items-start 1400px:items-start 1600px:items-start 1300px:pt-24 1400px:pt-48">
                <div className="w-full">
                    <h2 className="text-white leading-snug tracking-wide font-Poppins font-semibold hero-main-heading">
                        <span className="text-[#A3DAD5]">Snoring</span> is a sign of <br />
                        underlying <span className="text-[#A3DAD5]">sleep apnea,</span> <br />
                        affecting 1 in 3 people & can <br />
                        be <span className="text-[#A3DAD5]">life-threatening</span> if untreated.
                    </h2>

                    <p className="text-white font-semibold py-4 hero-sub-heading">
                        Backed by years of scientific research, our sleep apnea test helps <br />
                        devise custom plans to improve your sleep within a few days.
                    </p>

                    <div className="my-10">
                        <Link to="/" className="bg-[#E9DCEC] text-[#5660AA] px-8 rounded-full py-4">
                            SCHEDULE A HOME SLEEP APNEA TEST
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
