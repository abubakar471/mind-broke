import "./Home.css"
import { Link } from "react-router-dom"
import Hero from "../../components/Hero/Hero";
import ServiceOffers from "../../components/ServiceOffers/ServiceOffers";
import About from "../../components/About/About";

const Home = () => {
    return (
        <div className="">
            <Hero />
            <About />
            <ServiceOffers />
        </div>
    )
}


export default Home