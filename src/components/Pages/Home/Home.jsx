import Bannerhero from "../../Elements/Bannerhero"
import TabsSection from "../../Elements/TabsSection"
import Offert from "../../Elements/Offert"
import News from "../../Elements/News"
import Pricing from "../../Elements/Pricing"
import Contact from "../../Elements/Contact"


const Home = () => {

    return(
        <div>
            <Bannerhero/>
            <TabsSection/>
            <Offert/>
            <News/>
            <Pricing/>
            <Contact/>
        </div>
    )

}

export default Home