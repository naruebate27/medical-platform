// // import React, { useState } from "react";
// // import { 
// //   useHistory
// // } from 'react-router-dom';
// // import { Drawer, Button } from "antd";
// // import { MenuOutlined } from "@ant-design/icons";
// // import "./Navbar.css";
// // import { Menu } from 'antd';

// // const NavBar = () => {
// //   const history = useHistory()
// //   const [visible, setVisible] = useState(false);
// //   return (
// //     <nav className="navbar">
// //       <Button
// //         className="menu"
// //         type="primary"
// //         icon={<MenuOutlined />}
// //         onClick={() => setVisible(true)}
// //       />
// //       <Drawer
// //         title="Medical-Platform"
// //         placement="left"
// //         onClick={() => setVisible(false)}
// //         onClose={() => setVisible(false)}
// //         visible={visible}
// //       >
// //           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
// //             <Menu.Item key="1">
// //               <div style={{display: 'flex', alignItems: 'center', margin:"0 0"}} onClick={() => history.push('/Plasma')}>
// //                 <i class='bx bx-grid-alt' style={{color:"#7A67C7", fontSize:"20px", marginRight:5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}>โครงการวิจัยพลาสมา</span>
// //               </div>
// //            </Menu.Item>
// //             <Menu.Item key="2">
// //             <div style={{display: 'flex', alignItems: 'center', margin:"0 0"}}  onClick={() => history.push('/Knowledge')}>
// //             <i class='bx bxs-book-heart' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}>ความรู้เรื่องแผลชนิดต่างๆ</span>
// //             </div>
// //           </Menu.Item>
// //             <Menu.Item key="3">
// //               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Principle')}>
// //                 <i class='bx bx-plus-medical' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}>หลักการรักษาแผลพื้นฐาน</span>
// //               </div>
// //            </Menu.Item>
// //             <Menu.Item key="4">
// //               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Treatment')}>
// //                 <i class='bx bx-clinic' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}>การรักษาเสริมกระตุ้นการหายของแผล</span>
// //               </div>
// //             </Menu.Item>
// //             <Menu.Item key="5" icon={null}>
// //               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/LTAPP')}>
// //                 <i class='bx bxs-server' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}>เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( LTAPP )</span>
// //               </div>
// //             </Menu.Item>
// //             <Menu.Item key="6" >
// //               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/TCELS')}>
// //                 <i class='bx bxs-vial' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}> ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ ( TCELS )</span>
// //             </div>
// //             </Menu.Item>
// //             <Menu.Item key="7">
// //               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/FAQ')}>
// //                 <i class='bx bx-question-mark' style={{color:"#7A67C7", fontSize:"20px", marginRight: 5}}></i>
// //                 <span style={{color:"#7A67C7", fontSize:"15px"}}> คำถามที่พบบ่อย</span>
// //               </div>
// //           </Menu.Item>
// //           </Menu>
// //       </Drawer>
// //     </nav>
// //   );
// // };

// // export default NavBar;

// import React, { useState } from 'react';
// import { 
//   Route,
//   Redirect,
//   Switch,
//   useHistory
// } from 'react-router-dom';
// import { Layout, Menu } from 'antd';
// // import Plasma from './pages/Plasma';
// // import FAQ from './pages/FAQ';
// // import Knowledge from './pages/Knowledge';
// // import LTAPP from './pages/LTAPP';
// // import Principle from './pages/Principle';
// // import TCELS from './pages/TCELS';
// // import Treatment from './pages/Treatment';
// // import Navbar from './components/Navbar/Navbar'
// import 'antd/dist/antd.css';
// // import './App.css'
// import Logo from '../../assets/Logo1.png'
// // import Promote from './assets/Contact.png'
// import 'boxicons';

// const { Content, Sider } = Layout;

// const Navbar = () => {
//   const history = useHistory()
//   const [collapsed, setCollapsed] = useState(false)

//   const onCollapse = (collapsed) => {
//     setCollapsed(collapsed)
//   }
  
//   return (
//     <div>
//     <div className="navbar">
//       <Layout className ="mobile">
//         <Sider 
//           className="Navbar"
//           collapsible 
//           collapsed={collapsed} 
//           collapsedWidth={170} 
//           width={10} 
//           onCollapse={onCollapse}
//           trigger={null}
//           >
//         <div className="logo" onClick={() => history.push('/Plasma')}>
//           <img  src={Logo} alt="Logo" onClick={() => onCollapse(!collapsed)} />
//           {!collapsed && <p> Medical Platform</p>}
//         </div><br/>
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1">
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}} onClick={() => history.push('/Plasma')}>
//                 <i class='bx bx-grid-alt' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}>โครงการวิจัยพลาสมา</span>}
//               </div>
//             </Menu.Item>
//             <Menu.Item key="2">
//             <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Knowledge')}>
//             <i class='bx bxs-book-heart' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}>ความรู้เรื่องแผลชนิดต่างๆ</span>}
//             </div>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Principle')}>
//                 <i class='bx bx-plus-medical' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}>หลักการรักษาแผลพื้นฐาน</span>}
//               </div>
//             </Menu.Item>
//             <Menu.Item key="4">
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Treatment')}>
//                 <i class='bx bx-clinic' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}>การรักษาเสริมกระตุ้นการหายของแผล</span>}
//               </div>
//             </Menu.Item>
//             <Menu.Item key="5" icon={null}>
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/LTAPP')}>
//                 <i class='bx bxs-server' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}>เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( LTAPP )</span>}
//               </div>
//             </Menu.Item>
//             <Menu.Item key="6" >
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/TCELS')}>
//                 <i class='bx bxs-vial' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}> ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ ( TCELS )</span>}
//               </div>
//             </Menu.Item>
//             <Menu.Item key="7">
//               <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/FAQ')}>
//                 <i class='bx bx-question-mark' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
//                 {!collapsed && <span style={{ wordBreak: "break-all"}}> คำถามที่พบบ่อย</span>}
//               </div>
//             </Menu.Item>
//           </Menu>
//           {/* {!collapsed && <img className="Promote" src={Promote} alt="Promote" style={{marginTop:"100px" ,marginLeft:"50px"}}/>} */}
//         </Sider>
//         </Layout>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
