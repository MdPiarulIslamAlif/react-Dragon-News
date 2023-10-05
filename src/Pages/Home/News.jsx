import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Sheard/Header/Header";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";

const News = () => {
     const {id} = useParams();
    const [detail, setDetails] = useState([]);
    const { title,details, image_url } = detail;
     
     //data load form routes
     const news = useLoaderData();

 
     useEffect(()=>{
      const findData = news.find((news) => news._id == id);
      setDetails(findData);
     },[id,news])
      console.log(detail);

   //find my data id  
   
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <img src={image_url} alt="" />
          <h1 className="text-2xl font-extrabold mb-3 mt-6">{title}</h1>
          <h2 className="text-2xl">{details}</h2>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
