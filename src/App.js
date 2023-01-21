import "./App.css";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Home from "./pages/home";
import Test from "./pages/test";
import Theodo from "./pages/theodo";
import Matterjs from "./components/molecules/matterjsExample";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="theodo" element={<Theodo />} />
            <Route path="matterjs" element={<Matterjs />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default App;
