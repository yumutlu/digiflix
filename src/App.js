import React, { Suspense } from "react";

// NPM Packages
import { BrowserRouter as Router, Routes } from "react-router-dom";

// Router Import
import PageRouter from "./helpers/PageRouter";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Suspense fallback="loading">
      <GlobalProvider>
        <Router>
          <Routes>
            <PageRouter />
          </Routes>
        </Router>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
