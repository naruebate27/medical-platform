import React from "react";
import BackgroundImage from "../assets/bg.png";
import Footer from '../components/footer/Footer';
import Img from "../assets/knowledge.jpg"
const Knowledge = () => {
    return (
        <div className="containers"  >
            <div className="content">
                <p className="text header">
                    ความรู้เรื่องแผลชนิดต่างๆ
                </p>
                <img className="img" src={Img} alt="Img" /><br/><br/>
                <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                <span style={{lineHeight: "27px",fontWeight: "bold" ,fontSize:"18px"}}>โดยปกติร่างกายของเราสามารถซ่อมแซมและสร้างเนื้อเยื่อใหม่ได้ ในบางสภาวะร่างกายจะสร้างเซลล์ใหม่ได้ไม่ดี เช่น ขาดสารอาหาร, โรคเบาหวาน, สูงอายุ ทำให้แผลหายช้า</span>&nbsp;<br/>
                <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                <span style={{lineHeight: "27px",fontWeight: "bold" ,fontSize:"18px"}}>โดยทั่วไปบาดแผลที่ไม่หายเกิน 8 อาทิตย์ถือว่าเป็นแผลเรื้อรังเช่นแผลเบาหวาน, แผลกดทับ, แผลขาดเลือด ซึ่งต้องได้รับการรักษาที่สาเหตุของแผลแต่ละชนิด</span>&nbsp;<br/>
                <div className="overlay" style={{background: `url(${BackgroundImage})`}}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Knowledge