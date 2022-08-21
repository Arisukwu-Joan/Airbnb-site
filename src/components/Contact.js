import React from "react";
// import swim from "../image/swim.png";
import star from "../image/star.png";

function Contact(props) {
  console.log(props);
  return (
    <div className="main-img">
      {/* <img src={`../image/${props.img}`} alt="" className="page-img" /> */}
      <img src={"/image/swim.png"} alt="" className="page-img" />

      <div className="star">
        <img src={star} alt="" className="star-img" />
        <p className="usa">{props.place}</p>
      </div>
      <div className="sub-title">
        <p className="life">{props.title}</p>
        <p className="life-span">{props.review}</p>
      </div>
    </div>
  );
}

export default Contact;
