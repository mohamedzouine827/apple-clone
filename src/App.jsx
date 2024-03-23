import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Highlights from "./components/Highlights.jsx";
import Features from "./components/Features.jsx";
import HowItWroks from "./components/HowItWroks.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <main className="bg-black">
            <Navbar />
            <HeroSection />
            <Highlights />
            <Features />
            <HowItWroks />
            <Footer />
        </main>
    )
}

export default App
