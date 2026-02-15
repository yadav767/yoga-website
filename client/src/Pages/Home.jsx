import Navigation from '../Components/Navigation'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Journey from '../Components/Journey'
import UniqueTeaching from '../Components/UniqueTeaching'
import Experience from '../Components/Experience'
import ClientBenefits from '../Components/ClientBenefits'
import Nutrition from '../Components/Nutrition'
import Vision from '../Components/Vision'
import Investment from '../Components/Investment'
import Offerings from '../Components/Offerings'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div className='app'>
            <Navigation />
            <Hero />
            <About />
            <Journey />
            <UniqueTeaching />
            <Experience />
            <ClientBenefits />
            <Nutrition />
            <Vision />
            <Investment />
            <Offerings />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home