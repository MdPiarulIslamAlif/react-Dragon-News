import { useLoaderData } from "react-router-dom";
import Header from "../../Sheard/Header/Header";
import LeftSideNav from "../../Sheard/LeftSidenav/LeftSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import BreackingNews from "./BreackingNews";
import NewsCard from "./NewsCard";

const Home = () => {
     const news = useLoaderData();

     return (
       <div>
          <Header></Header>
          <BreackingNews></BreackingNews>
          <Navbar></Navbar>


         <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
          <div className="">
               <LeftSideNav></LeftSideNav>
          </div>
          {/* this is news container */}
          <div className=" md:col-span-2 space-y-10">
              {
                news.map(aNews=><NewsCard 
                    key={aNews.id} 
                    aNews={aNews}>

                    </NewsCard>)
              }
          </div>
          <div className="">
               <RightSideNav></RightSideNav>
          </div>
         </div>
       </div>
     );
};

export default Home;