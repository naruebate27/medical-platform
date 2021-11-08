import React from "react";
// import BackgroundImage from "../assets/bg.png";
import Footer from '../components/footer/Footer';
// import Img from "../assets/cover.png"
const TCELS = () => {
    return (
        <div className="containers"  >
            <div className="content" style={{height:"750px"}}>
                <p className="text header">
                    ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ ( TCELS )
                </p>
                {/* <img className="img" src={Img} alt="Img" /><br/><br/> */}
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>
                    <span style={{fontWeight: "bold" ,fontSize:"17px"}}> ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ (TCELS) เป็นองค์การมหาชนภายใต้การกำกับดูแลของกระทรวง การอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม โดยมีพันธกิจดังนี้ </span>&nbsp;
                </div><br/><br/>
                <span>&nbsp;&nbsp; ● สนับสนุนและบ่มเพาะงานวิจัยและนวัตกรรมด้านการแพทย์และสุขภาพ</span>&nbsp;<br/>
                <span>&nbsp;&nbsp; ● สร้างสภาพแวดล้อม โครงสร้างพื้นฐาน และบุคลากรในประเทศ ให้เหมาะสมกับการเกิดนวัตกรรมด้านการแพทย์ และสุขภาพระดับมาตรฐานสากล</span>&nbsp;<br/>
                <span>&nbsp;&nbsp; ● ผลักดันงานวิจัยให้นำไปใช้ได้จริง เชื่อมโยงและนำพาเครือข่ายเข้าสู่อุตสาหกรรมการแพทย์ครบวงจร</span>&nbsp;<br/><br/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>
                    <span style={{fontWeight: "bold" ,fontSize:"17px"}}> โครงการศึกษาประสิทธิภาพของการใช้พลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศในการรักษาแผล เป็นหนึ่งในโครงการที่ได้รับการสนับสนุนการดำเนินโครงการจากศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ (TCELS)</span>&nbsp;
                </div>
                {/* <div className="overlay" style={{background: `url(${BackgroundImage})`}}/> */}
                <Footer/>
            </div>
        </div>
    )
}

export default TCELS