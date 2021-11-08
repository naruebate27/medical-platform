import React from "react";
// import {useHistory} from "react-router"
import { Row, Col } from 'antd';
// import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from 'emailjs-com'
// import BackgroundImage from "../assets/bg.png";
import Footer from '../components/footer/Footer';
import Line from '../assets/Frame.png'
import QR from '../assets/qr.png'
import swal from 'sweetalert2';
// window.Swal = swal;

const Contact = () => {
    // const history = useHistory();
    function sendMail(e) {
        console.log(e);

        e.preventDefault();

        emailjs.sendForm(
            'service_kaqp909',
            'template_hwu4oae',
            e.target,
            'user_EbDgnLZZgVNmGsGNsJzz6'
        ).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        new swal({
            title: "ส่งข้อความสำเร็จ",
            text: "ระบบได้ส่งข้อความของคุณแล้ว",
            type: "success"
        }).then(function() {
            window.location = "/Plasma";
        });

        // history.push("/Plasma") 
    }
    return (
            // <div className="containers"  >
                <div className="content">
                    <div className = "form-box">
                    <div style={{display:"inline"}}>
                        {/* <span className="text header" style={{display:"inline" ,color:"blue"}}>
                            ติดต่อสอบถาม
                        </span> */}
                        <span style={{fontWeight: "bold",fontSize:"20px"}}>
                        ติดต่อสอบถาม / สนใจเข้าร่วมโครงการ
                        </span>
                    </div><br/>
                    {/* <p style={{display:"inline",marginLeft:"15px",fontWeight: "bold"}}>
                        ติดต่อผ่านช่องทาง Line Officail <img className="contact-line" style={{marginLeft:"5px"}} src={Line} alt="Line" />
                    </p><br/><br/> */}<br/>
                    <Row>
                        <Col sm={12} xs={24}>
                    <span style={{fontWeight: "bold",color:"#503E9D",display:"inline"}}>
                        แบบฟอร์มติดต่อ
                    </span><br/>
                    <span style={{fontSize:"16px"}}>
                        หากมีข้อสงสัย กรุณากรอกข้อมูลของคุณ เจ้าหน้าที่จะติดต่อกลับเพื่อตอบทุกคำถาม
                    </span><br/><br/>
                            <form onSubmit={sendMail} className="contactForm">
                            <div className="form-row" >
                                <input 
                                    type='text' 
                                    name='name'
                                    className = "form-input"
                                    placeholder="ชื่อ นามสกุล"
                                    required
                                />
                                <input 
                                    type='email' 
                                    name={'user-email'}
                                    className = "form-input"
                                    placeholder="อีเมล"
                                    required
                                />
                                <input 
                                    type='text' 
                                    name={'phone'}
                                    className = "form-input"
                                    placeholder="เบอร์โทรศัพท์ติดต่อกลับ"
                                    required
                                />

                                <input 
                                    type='text' 
                                    name={'topic'}
                                    className = "form-input"
                                    placeholder="เรื่องที่ต้องการติดต่อ"
                                    required
                                />

                                <textarea 
                                    type='text' 
                                    name={'message'} 
                                    rows='4'
                                    className = "form-input"
                                    placeholder="รายละเอียดที่ต้องการติดต่อ"
                                    required
                                />

                                {/* <div className="g-recaptcha" >
                                    <ReCAPTCHA
                                        sitekey="6LcCddocAAAAAFmSbyrQaaeYAaLbT9MNnV7Pkco1"
                                    />
                                </div> */}
                                <button 
                                    type = "submit"
                                    id= "submitBtn"
                                    className = "submitBtn"> 
                                    ส่งข้อความ
                                </button>
                            </div>
                            </form>
                            </Col>
                            <Col sm={12} xs={24} >
                                <span className="lineadd" style={{fontWeight: "bold"}}>
                                    เพิ่มช่องทางติดต่อผ่าน
                                </span>
                                <span style={{fontWeight: "bold",color:"red"}}> LINE OFFICIAL</span>
                                <p style={{fontSize:"16px"}}>
                                    กดที่ปุ่ม Add Friends หรือเพิ่มเพื่อนด้วยการสแกน QR CODE 
                                </p>
                                <div style={{alignItems: "center", textAlign: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
                                    <div style={{flexDirection:"column", alignItems: "center", textAlign: "center", display:"flex" ,justifyContent: "space-around", flexWrap: "wrap"}}>
                                        <a href="https://line.me/R/ti/p/@plasmathailand?from=page">
                                            <img className="contact-line" src={Line} alt="Line" />
                                        </a><br/>
                                        <img className="contact-line2" src={QR} alt="Line2" />
                                    </div><br/>
                                    <div style={{flexDirection:"column", alignItems: "center", textAlign: "center"}}>
                                        <span style={{color:"#FB6D3A", fontSize:"20px" }}>●</span>&nbsp;
                                        <span>มีเจ้าหน้าที่ รับ - ตอบคำถาม</span> <br/>
                                        <span style={{color:"#FB6D3A", fontSize:"20px" }}>●</span>&nbsp; 
                                        <span>อัปเดตข่าวสารโครงการวิจัย</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="overlay" style={{background: `url(${BackgroundImage})`}}/> */}
                    <Footer/>
                </div>
            // </div>
    )
}

export default Contact