import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/MyFooter";
import LatestReleases from "./components/Latest-release";

function App() {
  return (
    <div className="App ">
      <MyNavbar />
      <Welcome />
      <LatestReleases />
      <Footer />
    </div>
  );
}

export default App;
