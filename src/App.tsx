import Layout from "@/layout/layout";
import HelmetWrapper from "@/libs/helmetwrapper";
import HomePage from "@/pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import "@/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HelmetWrapper element={<HomePage />} />} />
      </Route>
    </Routes>
  );
}

export default App;
