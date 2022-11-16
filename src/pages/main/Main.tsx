import { useEffect } from "react";
import Blog from "../blog/Blog";

const Main = () => {
  useEffect(() => {
    console.log("Main");
  }, []);
  return (
    <div>
      <Blog />
    </div>
  );
};

export default Main;
