import "./app.scss"
import {Navbar} from "./Components/Navbar.jsx";
import {First} from "./Components/First.jsx";
import {About} from "./Components/About.jsx";
import {Technology} from "./Components/Technology.jsx";
import {Portfolio} from "./Components/Portfolio.jsx";
import {Contact} from "./Components/Contact.jsx";

const App = () => {
    return (
        <>
            <div className="app">
                <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                    <div
                        className="fixed top-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
                    <div className={"container mx-auto px-8"}>
                        <Navbar/>
                        <First/>
                    </div>
                </section>

                <section className="bg-neutral-900 py-20">
                    <div className="container mx-auto px-8">
                        <About/>
                    </div>
                </section>

                <section className="bg-neutral-900 py-20">
                    <div className="container mx-auto px-8">
                        <Technology/>
                    </div>
                </section>

                <section className="bg-neutral-900 py-20">
                    <div className="container mx-auto px-8">
                        <Portfolio/>
                    </div>
                </section>

                <section id="contactSection" className="bg-neutral-900 py-20">
                    <div className="container mx-auto px-8">
                        <Contact/>
                    </div>
                </section>
            </div>
        </>
    )
};
export default App;