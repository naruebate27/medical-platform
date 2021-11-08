import React from "react";
import Footer from '../components/footer/Footer';
import Img from "../assets/qa.png"

const FAQ = () => {
    return (
        <div className="containers"  >
            <div className="content">
                <p className="text header">
                    คำถามที่พบบ่อย
                </p>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>ผลการรักษาแผลด้วยเครื่องพลาสมาดีหรือไม่</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>ผลการศึกษาการักษาแผลกดทับในผู้ป่วยติดเตียงด้วยพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศช่วยให้แผลหายเร็วขึ้นและติดเชื้อลดลง</span>&nbsp;<br/>
                </div><br/>
                <div style={{display:"flex" ,alignItems: "center", justifyContent: "space-evenly" , flexDirection: "column"}}>
                    <span style={{marginLeft: "20px" , fontSize:"17px"}}>ภาพแสดงแผลกดทับที่มีขนาดเล็กลงอย่างมากใน 8 สัปดาห์ หลังรักษาด้วยพลาสมาอุณหภูมิต่ำที่ความดัยนบรรยากาศ</span>&nbsp;
                    <img className="img" src={Img} alt="Img" style={{height:"200px" , width:"200px" }}/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>การรักษาด้วยพลาสมาเจ็บหรือไม่</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>การรักษาด้วยพลาสมาเป็นการใช้พลาสมาฉายไปที่แผล ไม่ได้มีการสัมผัสกับแผลโดยตรง อาจจะมีความรู้สึกอุ่นบริเวณที่ทำการรักษา</span>&nbsp;<br/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>มีผลข้างเคียงที่รุนแรงหรือไม่</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>การรักษาด้วยพลาสมาจะทำโดยแพทย์ผู้เชี่ยวชาญ และยังไม่มีรายงานผลข้างเคียงที่รุนแรง อาจมีความรู้สึกอุ่นขณะที่ทำการรักษา</span>&nbsp;<br/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>ต้องมาบ่อยแค่ไหน</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>การฉายพลาสมาสำหรับแผลแต่ละชนิดจะต่างกัน โดยทั่วไปจะฉาย 2 ครั้ง/สัปดาห์สำหรับแผลกดทับ ทั้งนี้ขึ้นอยู่กับดุลยพินิจของแพทย์ผู้รักษา</span>&nbsp;<br/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>ค่าใช้จ่ายในการรักษาด้วยพลาสมา</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>ผู้เข้าร่วมโครงการจะได้รับการฉายพลาสมาโดยไม่เสียค่าใช้จ่าย และได้รับการสนับสนุนอุปกรณ์ทำแผลตามสิทธิ์การรักษา ทั้งนี้ไม่รวมค่าบริการทางการแพทย์และค่าธรรมเนียมอื่นๆ</span>&nbsp;<br/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>แผลประเภทใดที่เข้าร่วมโครงการได้</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>โครงการวิจัยนี้รับผู้เข้าร่วมที่มีแผล 5 ชนิด ได้แก่ แผลเท้าเบาหวาน , แผลกดทับ , แผลผ่าตัดเนื้อตาย , โรคแบคทีเรียกินเนื้อ , บาดแผลสัตว์เลี้ยงลูกด้วยนมกัด และแผลจากการผ่าตัดปลูกถ่ายผิวหนัง</span>&nbsp;<br/>
                </div>
                <hr/>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                    <span>ถ้าสนใจ จะเข้าร่วมโครงการได้อย่างไร</span>&nbsp;<br/>
                </div>
                <div style={{display:"inline"}}>
                    <span style={{color:"#FB6D3A"}}>ตอบ </span>
                    <span>หากท่านสนใจเข้าร่วมโครงการสามารถติดต่อโรงพยาบาลที่ท่านมีสิทธิ์การรักษาจาก 1 ใน 5 แห่ง ดังนี้</span>&nbsp;
                </div><br/><br/>
                <span>&nbsp;&nbsp; ● โรงพยาบาลศิริราช สาขาศัลยศาสตร์ตกแต่ง ตึกสยามินทร์ ชั้นที่ 12 โทร 02-419-8002</span><br/>
                <span>&nbsp;&nbsp; ● โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง แผนกผู้ป่วยนอกศัลยกรรม ชั้น 3 โทร 053-914168</span><br/>
                <span>&nbsp;&nbsp; ● โรงพยาบาลสงขลานครินทร์ ภาควิชาศัลยศาสตร์ ชั้นที่ 15 ตึกศรีเวชวัฒน์ โทร 074-451401</span><br/>
                <span>&nbsp;&nbsp; ● โรงพยาบาลนครพิงค์ แผนกศัลยกรรม​ ชั้น 1​ อาคารผู้ป่วยนอก โทร 053-999200 ต่อ​ 6308</span><br/>
                <span>&nbsp;&nbsp; ● โรงพยาบาลสระบุรี งานตรวจพิเศษศัลยกรรม อาคารอุบัติเหตุ ชั้น 2 โทร 036-343-500 ต่อ 2210 หรือ 08-99011419</span><br/>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default FAQ