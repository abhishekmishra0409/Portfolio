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
            <section className={"overflow-x-hidden text-neutral-300 selection:bg-cyan-50 selection:text-cyan-500"}>
                <div className="fixed top-0 -z-10 h-10 h-full w-full"></div>
                <div className={"container mx-auto px-8"}>
                    <Navbar/>
                    <First/>
                </div>
            </section>
            <section><About/></section>
            <section><Technology/></section>
            <Portfolio/>
            <section id={"contactSection"}><Contact/></section>
        </>
    )
};
export default App;
