import React from "react";
import Footer1 from "../../assets/footer1.png";
import Footer2 from "../../assets/LOGO_TCEL.png";
// import Line from "../../assets/line-brands.png";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer" >
            <div className="content2">
                <div className="footer-logo">
                    <p className="text">
                        สนับสนุนโดย
                    </p>
                    <img className="Footer2" src={Footer2} alt="Footer2" />&nbsp;&nbsp;
                    <img className="Footer1" src={Footer1} alt="Footer1" /> 
                </div>
                {/* <p className="text2">สามารถติดต่อ รพ.ตามสิทธิ์หรือใกล้บ้านท่าน</p> */}
                {/* <img className="lineLogo" src={Line} alt="Line" /> */}
               
            </div>
        </div>
    )
}

export default Footer