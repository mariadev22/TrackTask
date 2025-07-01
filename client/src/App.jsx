import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import AddNote from "./routes/Home/add-note";
import UpdateNote from "./routes/Home/note";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 min-h-screen font-sans">
      <div className="flex flex-col box-border w-screen max-w-5xl px-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-900 text-sm/normal text-wrap leading-relaxed">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path="/note/:id" element={<UpdateNote />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
