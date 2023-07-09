import Header from "./components/Header.js";
import HomeMainContent from "./components/HomeMainContent.js";
import ReviewContent from "./components/ReviewContent.js";
import BottomSection from "./components/BottomSection.js";
import Footer from "./components/Footer.js";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeMainContent />
      <ReviewContent />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Home;
