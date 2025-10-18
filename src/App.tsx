import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AttractionTest from "@/pages/AttractionTest";
import TestResult from "@/pages/TestResult";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<AttractionTest />} />
      <Route path="/result" element={<TestResult />} />
    </Routes>
  );
}
