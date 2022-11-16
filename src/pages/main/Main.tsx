import { useEffect } from "react";
import Header from "src/components/header/Header";
import List from "src/components/list/List";

const Main = () => {
  useEffect(() => {
    console.log("Main");
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#2E2E2E",
        minHeight: "100vh",
        color: "#F2F2F2",
      }}
    >
      <Header />
      <List />
    </div>
  );
};

export default Main;
