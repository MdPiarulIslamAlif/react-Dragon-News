import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagramSquare } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-4">
        <h2 className="text-xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          {" "}
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          {" "}
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-xl font-bold mb-3">Find Us</h2>
        <a
          className="flex items-center text-lg border p-3 rounded-t-lg"
          href="">
          <FaFacebook className=""></FaFacebook>
          <span className="ml-2">Facebook</span>
        </a>
        <a className="flex items-center text-lg border-x p-3 " href="">
          <FaTwitter className=""></FaTwitter>
          <span className="ml-2">Twitter</span>
        </a>
        <a
          className="flex items-center text-lg border p-3 rounded-b-lg"
          href="">
          <FaInstagramSquare className=""></FaInstagramSquare>
          <span className="ml-2">Instagram</span>
        </a>
      </div>
      {/* Q-zone */}
      <div className="p-4 space-y-2 mb-4">
        <h2 className="text-xl font-bold">Q-zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
