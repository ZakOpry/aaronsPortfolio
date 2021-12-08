import "./App.css";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import PackagesPage from "./components/PackagesPage";
import TopNavBar from "./components/TopNavBar";
import ContactPage from "./components/ContactPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Media from "react-media";
import HamburgerNavBar from "./components/HamburgerNavBar";

function App() {
  return (
    <Router>
      <Media query="(min-width: 638px)">
        {(matches) => {
          return matches ? <TopNavBar /> : <HamburgerNavBar />;
        }}
      </Media>
      {/* <TopNavBar /> */}
      <Routes>
        <>
          <Route exact path="/" element={<HomePage />}>
            {/* <HomePage /> */}
          </Route>
          <Route path="packages" element={<PackagesPage />}>
            {/* <PackagesPage /> */}
          </Route>
          <Route path="about" element={<AboutPage />}>
            {/* <AboutPage /> */}
          </Route>
          <Route path="contact" element={<ContactPage />}>
            {/* <ContactPage /> */}
          </Route>
        </>
      </Routes>
    </Router>
  );
}

export default App;
