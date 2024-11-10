import Layout from "@/layout/layout";
import HomePage from "@/page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import "@/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
