import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <div>
      <MainNavigation />
      <main
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>An error occured</h1>
        <p>Could not find this page</p>
      </main>
    </div>
  );
};

export default ErrorPage;
