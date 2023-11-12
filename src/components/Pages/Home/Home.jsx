import Bannerhero from "../../Elements/Bannerhero"
import TabsSection from "../../Elements/TabsSection"
import Offert from "../../Elements/Offert"
import News from "../../Elements/News"
import Pricing from "../../Elements/Pricing"
import Contact from "../../Elements/Contact"
import Kpi from "../../Elements/Kpi"
import NextCharla from "../../Elements/NextCharla"

const Home = () => {

    return(
        <div>
            <Bannerhero/>
            <TabsSection/>
            <Offert/>
            <News/>
            <NextCharla/>
            <Pricing/>
            
        </div>
    )

}

export default Home