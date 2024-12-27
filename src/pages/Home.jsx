import Header3 from "../components/header/Header3";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Class from "../components/class/Class";
 import Header1 from "../components/header/Header1";
import Header2 from "../components/header/Header2";
import Hero from "../components/hero/Hero";
import Service from "../components/service/Service";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
                  <Header1 />
                  <Header2 />
                  <Header3 />
                  <Hero />
                  <About />
                  <Service />
                  <Class/>
                  <Blog />
                  <Footer />

                  
    </>
  );
}

export default Home;
