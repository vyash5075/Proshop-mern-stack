import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen></Homescreen>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
