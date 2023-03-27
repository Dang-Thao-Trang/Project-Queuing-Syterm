import { Avatar } from "antd";
import React from "react";
import { FaBell } from "react-icons/fa";

import "./UserName.scss";
import AvatarUser from "../../assets/images/unsplash_Fyl8sMC2j2Q.png";

const UseName = () => {
  return (
    <div className="user">
      <div className="icon">
        <FaBell className="img_icon" />
      </div>
      <img src={AvatarUser} alt="AvatarUser" />
      <div className="nameUser">
        <span>Xin chào</span>
        <p>Lê Quỳnh Ái Vân</p>
      </div>
    </div>
  );
};

export default UseName;
