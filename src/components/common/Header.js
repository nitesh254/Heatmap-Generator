import React, {useState, useEffect} from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { auth } from "../pages/Login/firebase";  
import { onAuthStateChanged, signOut } from "firebase/auth";
const Header = () => {
  const [authUser, setAuthUser] = useState(null); 
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleLogout = async () => {
    try {
       
      await auth.signOut();
      
       
    } catch (error) {
      
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
    { authUser ?
    (<div className="flex justify-between items-center p-4 bg-gray-200 header">
      <div className="title">Heatmap Generator</div>
      <div>
        <button className="logout-button">Logout</button>
      </div>
    </div>) : (
      ""
    )}
    </>
  );
};

export default Header;
