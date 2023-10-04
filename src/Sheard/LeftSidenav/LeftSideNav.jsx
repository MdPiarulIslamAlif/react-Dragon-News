
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
     const [category , setCategory] = useState([]);

    useEffect(()=>{
     fetch('categories.json')
     .then(res=>res.json())
     .then(data=>setCategory(data))
    },[])

     return (
       <div className="space-y-6 font-bold">
         <h2 className="text-2xl font-bold">
           All Category
         </h2>
         {category.map((categoris) => (
           <Link className=" block ml-5" 
           key={categoris.id}
           to={`/categoris/${categoris.id}`}
           >
               {categoris.name}
               </Link>
         ))}
       </div>
     );
};

export default LeftSideNav;