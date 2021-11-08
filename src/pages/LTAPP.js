import React from "react";
import BackgroundImage from "../assets/bg.png"
import Footer from '../components/footer/Footer';
import Img from "../assets/LTAPP.jpg"
const LTAPP = () => {
    return (
        <div className="containers"  >
            <div className="content">
                <p className="text header">
                    เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( LTAPP )
                </p>
                <img className="img" src={Img} alt="Img" /><br/><br/>
                <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                <span style={{lineHeight: "27px",fontWeight: "bold" ,fontSize:"18px"}}>เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ หรือแอลทีเอพีพ (LTAPP) เป็นการทำให้แก๊สเกิดการแตกตัวเป็นประจุไอออน ซึ่งมีการดัดแปลงให้มีอุณหภูมิต่ำลงกว่าพลาสมาทั่วไป</span>&nbsp;<br/>
                <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                <span style={{lineHeight: "27px",fontWeight: "bold" ,fontSize:"18px"}}>ในทางการแพทย์มีการนำพลาสมามาใช้ในการรักษาแผล พบว่ามีฤทธิ์ทำลายเชื้อแบคทีเรียได้หลายชนิดกระตุ้นการสร้างหลอดเลือดฝอย และเพิ่มการหลั่งสารกระตุ้นการเจริญของเซลล์ทำให้แผลหายได้ดี</span>&nbsp;<br/>
                <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                <span style={{lineHeight: "27px",fontWeight: "bold" ,fontSize:"18px"}}>ผลการศึกษาการรักษาแผลกดทับในผู้ป่วยติดเตียงด้วยพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศช่วยให้แผลหายเร็วขึ้นและติดเชื้อลดลง</span>
                <div className="overlay" style={{background: `url(${BackgroundImage})`}}/>
                <Footer/>
            </div>
        </div>
    )
}

export default LTAPP