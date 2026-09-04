
import Hero from "../Components/Hero";
import WhyChooseUs from "./WhyChooseUs";
import LuxuryBanner from "../Components/LuxuryBanner";
import Services from "../Components/Services";
import Enquiry from "../Components/Enquiry";
import Categories from "../Components/Categories";




function Home() {
    return (
        <>


            <Hero />
            <Categories />
            <LuxuryBanner />
            <Services />
            <WhyChooseUs />
            <Enquiry />
            {/* <ProductCard /> */}


        </>


    );
}

export default Home;