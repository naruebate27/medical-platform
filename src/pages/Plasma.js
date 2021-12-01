import React ,{ useState} from "react";
import { Modal, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import BackgroundImage from "../assets/bg.png";
import poster from "../assets/poster.jpg"
import Footer from '../components/footer/Footer';
import video from "../assets/Plasma05.mp4"
function Plasma() {
    const screen = window.innerWidth
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const [videoFilePath, setVideoFilePath] = useState(video);
    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
        };
        <input type=".MP4" onChange={handleVideoUpload} />
    
    return (
            <div className="containers"  >
                <div className="content">
                    <p className="text header">
                        โครงการวิจัยพลาสมา
                    </p>
                    {/* <img className="img" src={Img} alt="Img" /><br/><br/> */}
                    <div className='player-wrapper'>
                        <ReactPlayer className="react-player"
                            url={videoFilePath}
                            volume={100}
                            muted="true"
                            controls={true}  
                            playing={true}
                            playsInline
                            width='100%'
                            height='100%'
                        />
                    </div><br/>
                    <img className="poster" src={poster} alt="poster" /><br/>
                    <div style={{display:"inline" }}>
                        <span style={{fontWeight: "bold", fontSize: "20px" }}>โครงการศึกษาประสิทธภาพในการรักษาแผลโดยใช้</span>
                        <span style={{fontWeight: "bold", color:"#FB6D3A" ,fontSize:"18px"}}>พลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( แอลทีเอพีพี )</span>
                    </div><br/>
                    <div style={{display:"inline"}}>
                        <span style={{color:"#503E9D" ,fontWeight: "bold" ,fontSize: "18px"}}>รับสมัครอาสาสมัคร</span>
                        <span>ที่มีแผลดังต่อไปนี้ </span>
                    </div>
                    <div className="list">
                        <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                        <span>แผลกดทับ</span>&nbsp;&nbsp;<br/>
                        <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                        <span>แผลเท้าเบาหวาน</span>&nbsp;&nbsp;<br/>
                        <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                        <span>แผลสัตว์เลี้ยงลูกด้วยนมกัด</span>&nbsp;&nbsp;<br/>
                        <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                        <span>แผลผ่าตัดเนื้อตายโรคแบคทีเรียกินเนื้อ</span>&nbsp;<br/>
                        <span style={{color:"#FB6D3A", fontSize:"25px" }}>●</span>&nbsp;
                        <span>แผลจากการปลูกถ่ายผิวหนัง</span>&nbsp;&nbsp;
                    </div><br/>
                    <div style={{alignItems: "center", textAlign: "center", display:"flex" ,justifyContent: "space-around", flexWrap: "wrap"}}>
                        <span style={{color:"#FB6D3A" }}>อาสาสมัครจะได้รับการรักษาแผลด้วยพลาสมาโดยไม่เสียค่าใช้จ่ายและได้รับค่าเดินทางบางส่วน</span><br/>
                        <span style={{color:"#FB6D3A", alignItems: "center", textAlign: "center" ,lineHeight: "20px"}}>ท่านจะได้รับการสนับสนุนค่าฉายพลาสมาและวัสดุทำแผลตามสิทธิ์การรักษา ไม่รวมค่าบริการหรือค่าธรรมเนียมการรักษา</span><br/>
                    </div>
                    <div className="cards">
                        <div style={{display:"inline"}}>
                            <span className="anime">หากท่านสนใจเข้าร่วมโครงการ</span>
                            <span> สามารถติดต่อโรงพยาบาลที่ท่านมีสิทธ์การรักษาจาก 1 ใน 5 แห่ง ดังนี้ </span>
                        </div><br/>
                        <span>&nbsp; ● &nbsp;โรงพยาบาลศิริราช สาขาศัลยศาสตร์ตกแต่ง ตึกสยามินทร์ ชั้นที่ 12 โทร 02-419-8002</span>
                        <a href="#" target="_blank" onClick={handleShow1} style={{color:'#FB6D3A',fontWeight:'bold'}}> {`ดูเพิ่มเติม >`}</a>
                        <Modal
                        size={screen >= 992 ? "lg" : "sm" } 
                        show={show1} 
                        onHide={handleClose1} 
                        style={{opacity:1}} 
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title>รายละเอียดเพิ่มเติม</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                <Col xs={3} md={3}>
                                    <span style={{fontWeight:'bold'}}>สถานพยาบาล</span><br/>
                                    <span style={{fontWeight:'bold'}}>จุดบริการ</span><br/>
                                    <span style={{fontWeight:'bold'}}>เบอร์ติดต่อ</span><br/>
                                    <span style={{fontWeight:'bold'}}>วันและเวลาทำการ</span><br/>
                                </Col>
                                <Col xs={1} md={1}>
                                    <span>:</span><br/>
                                    <span>:</span><br/>
                                    <span>:</span><br/>
                                    <span>:</span><br/>
                                </Col>
                                <Col xs={8} md={8}>
                                    <span>โรงพยาบาลศิริราช</span><br/>
                                    <span>สาขาศัลยศาสตร์ตกแต่ง ตึกสยามินทร์ ชั้นที่ 12</span><br/>
                                    <span>02-419-8002 ( คุณหนิง หรือ พ.ณัฐพงศ์ )</span><br/>
                                    <span>ทุกวันจันทร์-ศุกร์ เวลา 9.00-12.00 น. และ 13.00-15.00 น. เว้นวันหยุดราชการ</span>
                                </Col>
                                </Row>
                            </Modal.Body>
                        </Modal><br />
                        <span>&nbsp; ● &nbsp;โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง แผนกผู้ป่วยนอกศัลยกรรม ชั้น 3 โทร 053-914168</span>
                        <a href="#" target="_blank" onClick={handleShow2} style={{color:'#FB6D3A',fontWeight:'bold'}}> {`ดูเพิ่มเติม >`}</a>
                        <Modal 
                        size={screen >= 992 ? "lg" : "sm" } 
                        show={show2} 
                        onHide={handleClose2} 
                        style={{opacity:1}} 
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title>รายละเอียดเพิ่มเติม</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <span style={{fontWeight:'bold'}}>สถานพยาบาล</span><br/>
                                        <span style={{fontWeight:'bold'}}>จุดบริการ</span><br/>
                                        <span style={{fontWeight:'bold'}}>เบอร์ติดต่อ</span><br/>
                                        <span style={{fontWeight:'bold'}}>วันและเวลาทำการ</span><br/>
                                    </Col>
                                    <Col xs={1} md={1}>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <span>โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง</span><br/>
                                        <span>แผนกผู้ป่วยนอกศัลยกรรม ชั้น 3</span><br/>
                                        <span>053-914-168 ( คุณยุวดี หรือ อาจารย์ พญ.พิตะวัน )</span><br/>
                                        <span>ทุกวันจันทร์-ศุกร์ เวลา 9.00-12.00 น. และ 13.00-16.00 น.</span>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal><br />
                        <span>&nbsp; ● &nbsp;โรงพยาบาลสงขลานครินทร์ ภาควิชาศัลยศาสตร์ ชั้นที่ 15 ตึกศรีเวชวัฒน์ โทร 074-451401</span>
                        <a href="#" target="_blank" onClick={handleShow3} style={{color:'#FB6D3A' ,fontWeight:'bold'}}> {`ดูเพิ่มเติม >`}</a>
                        <Modal 
                        size={screen >= 992 ? "lg" : "sm" } 
                        show={show3} 
                        onHide={handleClose3} 
                        style={{opacity:1}} 
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title>รายละเอียดเพิ่มเติม</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <span style={{fontWeight:'bold'}}>สถานพยาบาล</span><br/>
                                        <span style={{fontWeight:'bold'}}>จุดบริการ</span><br/>
                                        <span style={{fontWeight:'bold'}}>เบอร์ติดต่อ</span><br/>
                                        <span style={{fontWeight:'bold'}}>วันและเวลาทำการ</span><br/>
                                        <span style={{fontWeight:'bold'}}>เพิ่มเติม</span>
                                    </Col>
                                    <Col xs={1} md={1}>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <span>โรงพยาบาลสงขลานครินทร์</span><br/>
                                        <span>ภาควิชาศัลยศาสตร์ ชั้น 15 ตึกศรีเวชวัฒน์</span><br/>
                                        <span>074-451-401 หรือ 074-451-760</span><br/>
                                        <span>ทุกวันพฤหัสบดี เวลา 13.00-16.00 น.</span><br/>
                                        <span>สามารถติดต่อนัดหมายที่คลินิกผู้ป่วยนอกศัลยกรรมโรงพยาบาลสงขลานครินทร์ ( wound and lymph clinic ) โทร 074-451-760</span>
                                    </Col>
                                    </Row>
                            </Modal.Body>
                        </Modal><br />                        
                        <span>&nbsp; ● &nbsp;โรงพยาบาลนครพิงค์ แผนกศัลยกรรม​ ชั้น 1​ อาคารผู้ป่วยนอก โทร 053-999200 ต่อ​ 6308</span>
                        <a href="#" target="_blank" onClick={handleShow4} style={{color:'#FB6D3A',fontWeight:'bold'}}> {`ดูเพิ่มเติม >`}</a>
                        <Modal 
                        size={screen >= 992 ? "lg" : "sm" } 
                        show={show4} 
                        onHide={handleClose4} 
                        style={{opacity:1}} 
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title>รายละเอียดเพิ่มเติม</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={3} md={3}>
                                        <span style={{fontWeight:'bold'}}>สถานพยาบาล</span><br/>
                                        <span style={{fontWeight:'bold'}}>จุดบริการ</span><br/>
                                        <span style={{fontWeight:'bold'}}>เบอร์ติดต่อ</span><br/>
                                        <span style={{fontWeight:'bold'}}>วันและเวลาทำการ</span><br/>
                                    </Col>
                                    <Col xs={1} md={1}>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <span>โรงพยาบาลนครพิงค์</span><br/>
                                        <span>แผนกศัลยกรรม​ ชั้น 1​ อาคารผู้ป่วยนอก หรือคลินิคแผลและทวารเทียม</span><br/>
                                        <span>053-999-200 ต่อ​ 6308</span><br/>
                                        <span>ทุกวันพุธ​ เวลา​ 9.00-15.00 น.</span><br/>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal><br />                        
                        <span>&nbsp; ● &nbsp;โรงพยาบาลสระบุรี งานตรวจพิเศษศัลยกรรม อาคารอุบัติเหตุ ชั้น 2 โทร 036-343-500 ต่อ 2210 หรือ 08-99011419</span>
                        <a href="#" target="_blank" onClick={handleShow5} style={{color:'#FB6D3A',fontWeight:'bold'}}> {`ดูเพิ่มเติม >`}</a>
                        <Modal 
                        size={screen >= 992 ? "lg" : "sm" } 
                        show={show5} 
                        onHide={handleClose5} 
                        style={{opacity:1}} 
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title>รายละเอียดเพิ่มเติม</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={3} md={3} sm={3}>
                                        <span style={{fontWeight:'bold'}}>สถานพยาบาล</span><br/>
                                        <span style={{fontWeight:'bold'}}>จุดบริการ</span><br/>
                                        <span style={{fontWeight:'bold'}}>เบอร์ติดต่อ</span><br/>
                                        <span style={{fontWeight:'bold'}}>วันและเวลาทำการ</span><br/>
                                    </Col>
                                    <Col xs={1} md={1} sm={3}>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                        <span>:</span><br/>
                                    </Col>
                                    <Col xs={8} md={8} sm={3}>
                                        <span>โรงพยาบาลสระบุรี</span><br/>
                                        <span>งานตรวจพิเศษศัลยกรรม อาคารอุบัติเหตุ ชั้น 2</span><br/>
                                        <span>036-343-500 ต่อ 2210 หรือ 089-901-1419</span><br/>
                                        <span>ทุกวันจันทร์-ศุกร์ เวลา 08.00-16.30 น. เว้นวันหยุดราชการ</span><br/>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal><br />                    
                    </div>
                    <div className="overlay" style={{background: `url(${BackgroundImage})`}}/>
                    <Footer/>
                </div>
            </div>
    )
}

export default Plasma