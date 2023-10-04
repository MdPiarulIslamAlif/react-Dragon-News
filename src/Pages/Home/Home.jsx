import Header from "../../Sheard/Header/Header";
import LeftSideNav from "../../Sheard/LeftSidenav/LeftSideNav";
import Navbar from "../../Sheard/Navbar/Navbar";
import RightSideNav from "../../Sheard/RightSideNav/RightSideNav";
import BreackingNews from "./BreackingNews";

const Home = () => {
     return (
       <div>
          <Header></Header>
          <BreackingNews></BreackingNews>
          <Navbar></Navbar>


         <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
          <div className="border">
               <LeftSideNav></LeftSideNav>
          </div>
          <div className=" md:col-span-2 border">
               <h2 className="text-3xl font-bold"> news coming soon....</h2>
          </div>
          <div className="border">
               <RightSideNav></RightSideNav>
          </div>
         </div>
       </div>
     );
};

export default Home;