import { useParams } from "react-router-dom";
import Header from "../../Sheard/Header/Header";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";

const News = () => {
     const {id} = useParams()
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-2xl">this news details</h2>
          <h1>{id}</h1>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
