import HomePage from "@/pages/HomePage/HomePage";
import HelmetWrapperProvider from "@/providers/HelmetWrapperProvider";
import { Route, Routes } from "react-router-dom";
import "@/App.css";
import Layout from "@/layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={<HelmetWrapperProvider element={<HomePage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
