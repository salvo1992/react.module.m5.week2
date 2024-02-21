import Footer from "../Footer/Footer";
import EnterPAge from "../Main/EnterPage";
import Navigation from "../Navbar/Navigation";
import AddComment from "../Form/AddComment";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <AddComment />
      <EnterPAge />
      <Footer />
    </>
  );
};
export default HomePage;