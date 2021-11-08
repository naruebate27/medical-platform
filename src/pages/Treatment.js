import React from "react";
import BackgroundImage from "../assets/bg.png"
import Footer from '../components/footer/Footer';
import Img from "../assets/treatment.jpg"
const Treatment = () => {
    return (
        <div className="containers"  >
            <div className="content">
                <p className="text header">
                    การรักษาเสริมกระตุ้นการหายของแผล
                </p>
                <img className="img" src={Img} alt="Img" /><br/><br/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>
                    <span style={{lineHeight: "27px" ,fontWeight: "bold" ,fontSize:"18px"}}> ปัจจุบันวงการแพทย์ยังมีการพัฒนาการรักษาเสริมเพิ่มจากการรักษาตามมาตรฐานเพื่อกระตุ้นการหายของแผล เช่น </span>&nbsp;
                </div><br/><br/>
                <span style={{fontWeight:"500", lineHeight: "27px"}}>&nbsp;&nbsp; ● การใช้พลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ หรือแอลทีเอพีพี (LTAPP) ซึ่งเป็นเทคโนโลยีใหม่ที่นำมาใช้ในการดูแลบาดแผลมีฤทธิ์ฆ่าเชื้อแบคทีเรียได้หลายชนิดและสามารถกระตุ้นหายของแผลได้</span>&nbsp;<br/>
                <span style={{fontWeight:"500", lineHeight: "27px"}}>&nbsp;&nbsp; ● การใช้สารกระตุ้นการเจริญของเซลล์หรือโกรทแฟคเตอร์ (Growth Factor) มีฤทธิ์กระตุ้นการแบ่งตัวของเซลล์ตามชนิดของสารนั้น เช่น กระตุ้นเซลล์ผิวหนังให้แบ่งตัวได้มากขึ้นทำให้แผลหายได้ดีขึ้น</span>&nbsp;<br/>
                <span style={{fontWeight:"500", lineHeight: "27px"}}>&nbsp;&nbsp; ● การบำบัดด้วยออกซิเจนความกดบรรยากาศสูง หรือไฮเปอร์แบริคออกซิเจน (Hyperbaric Oxygen) เพื่อเพิ่มระดับออกซิเจนในเลือดที่ไปเลี้ยงแผลมีประโยชน์ในแผลที่มีสาเหตุจากการขาดเลือด</span>&nbsp;<br/>
                <div className="overlay" style={{background: `url(${BackgroundImage})`}}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Treatment