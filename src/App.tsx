import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import { MantineProvider } from "@mantine/core";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
