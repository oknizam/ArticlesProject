import React from "react";
import "./App.css";
import Home from "./Pages/Home";
// import { ErrorBoundary } from "react-error-boundary"; 
// import { ArticlesFetchError } from "./Components/Error/ErrorBoundry"; 


const App: React.FC = () => {
  return (
    // <ErrorBoundary
    //   FallbackComponent={ArticlesFetchError}
    //   onError={() => console.log("Error happened!")}
    // >
      <Home />
    //  </ErrorBoundary>
  );  
};

export default App;
