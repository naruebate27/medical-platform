import React from "react";
import BackgroundImage from "../assets/bg.png"
import Footer from '../components/footer/Footer';
import Img from "../assets/principle.jpg"
const Principle = () => {
    return (
        <div className="containers"  >
            <div className="content">
                <p className="text header">
                    หลักการรักษาแผลพื้นฐาน
                </p>
                <img className="img" src={Img} alt="Img" /><br/><br/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>
                    <span style={{fontWeight: "bold" ,fontSize:"18px"}}> บาดแผลทุกชนิดมีหลักการรักษาคล้ายกันคือ การรักษาการติดเชื้อ, การตัดเนื้อตายและสิ่งแปลกปลอม, การรักษาความชุ่มชื้นของแผลให้เหมาะสม</span>
                </div><br/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>
                    <span style={{fontWeight: "bold" ,fontSize:"18px"}}> แผลที่มีสาเหตุไม่ชัดเจน โดยเฉพาะแผลที่เกิดในคนที่เป็นเบาหวาน, แขนขาที่มีหลอดเลือดไม่ดี หรือผู้ป่วยติดเตียง อาจจะต้องมีการดูแลเพิ่มเป็นพิเศษ เช่น แผลเบาหวานต้องคุมระดับน้ำตาลในเลือด ลดแรงกดทับที่เท้า, แผลกดทับและแผลขาดเลือด ก็ต้องหาวิธีการให้มีเลือดไปเลี้ยงส่วนที่เป็นแผล</span>
                </div>
                <div className="overlay" style={{background: `url(${BackgroundImage})`}}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Principle