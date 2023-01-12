import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "../../assets/scss/main.css";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Homepage;
