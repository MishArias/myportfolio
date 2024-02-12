import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Experience />
			<Project />
			<Skills />
			<Contact />

			<SocialLinks />
		</div>
	);
}

export default App;
