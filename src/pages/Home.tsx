import { Footer } from "../components/global/Footer"
import { HeroSection } from "../components/partials/Hero/HeroSection"
import { Navbar } from "../components/partials/Hero/Navbar"

export const Home = (): JSX.Element => {
    return (
    <div>
        <Navbar />
        <HeroSection />
        <Footer />
    </div>
    )
}