import React, { useState } from 'react';
import { 
  Route,
  Redirect,
  Switch,
  useHistory
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Plasma from './pages/Plasma';
import FAQ from './pages/FAQ';
import Knowledge from './pages/Knowledge';
import LTAPP from './pages/LTAPP';
import Principle from './pages/Principle';
import TCELS from './pages/TCELS';
import Treatment from './pages/Treatment';
import Contact from './pages/Contact';
// import Navbar from './components/Navbar/Navbar'
import 'antd/dist/antd.css';
import './App.css'
import Logo from './assets/Logo1.png'
import Promote from './assets/Contact.png'
import 'boxicons';

const { Content, Sider } = Layout;

const App = () => {
  const history = useHistory()
  const screen = window.innerWidth
  const [collapsed, setCollapsed] = useState(screen >= 922 ? false : true)
  const onCollapse = (collapsed) => {
      setCollapsed(collapsed)
  }  
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          className="siderhome"
          collapsible
          collapsed={collapsed} 
          collapsedWidth={screen >= 992 ? 170 : 55 } 
          width={screen >= 2000 ? 500 : 380} 
          onCollapse={onCollapse}
          trigger={null}
        >
            <div className="logo" onClick={() => history.push('/Plasma')}>
              <img  src={Logo} alt="Logo" />
              {!collapsed && <p> Medical Platform</p>}
            </div><br/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" title="โครงการวิจัยพลาสมา">
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}} onClick={() => history.push('/Plasma')}>
                <i class='bx bx-grid-alt' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word"}}>โครงการวิจัยพลาสมา</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="2" title="ความรู้เรื่องแผลชนิดต่างๆ">
            <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Knowledge')}>
            <i class='bx bxs-book-heart' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word"}}>ความรู้เรื่องแผลชนิดต่างๆ</span>}
            </div>
            </Menu.Item>
            <Menu.Item key="3" title="หลักการรักษาแผลพื้นฐาน">
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Principle')}>
                <i class='bx bx-plus-medical' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word"}}>หลักการรักษาแผลพื้นฐาน</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="4" title="การรักษาเสริมกระตุ้นการหายของแผล">
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Treatment')}>
                <i class='bx bx-clinic' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word"}}>การรักษาเสริมกระตุ้นการหายของแผล</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="5" title="เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( LTAPP )">
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/LTAPP')}>
                <i class='bx bxs-server' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word" ,whiteSpace: "normal" ,lineHeight: "20px"}}>เทคโนโลยีพลาสมาอุณหภูมิต่ำที่ความดันบรรยากาศ ( LTAPP )</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="6" title="ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ ( TCELS )">
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/TCELS')}>
                <i class='bx bxs-vial' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word" ,whiteSpace: "normal" ,lineHeight: "20px"}}> ศูนย์ความเป็นเลิศด้านชีววิทยาศาสตร์ ( TCELS )</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="7" title="คำถามที่พบบ่อย"> 
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/FAQ')}>
                <i class='bx bx-question-mark' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word" }}> คำถามที่พบบ่อย</span>}
              </div>
            </Menu.Item>
            <Menu.Item key="8" title="ติดต่อสอบถาม/สนใจเข้าร่วมโครงการ"> 
              <div style={{display: 'flex', alignItems: 'center', margin:"5px 0"}}  onClick={() => history.push('/Contact')}>
              <i class='bx bx-conversation' style={{color:"#7A67C7", fontSize:"30px", marginRight: 15}}></i>
                {!collapsed && <span style={{ wordBreak: "break-word" }}> ติดต่อสอบถาม / สนใจเข้าร่วมโครงการ</span>}
              </div>
            </Menu.Item>
          </Menu>
          {!collapsed && <img className="Promote" src={Promote} alt="Promote" style={{marginTop:"100px" ,marginLeft:"50px"}}/>}
        </Sider>

        <Layout className="site-layout">
        {/* <Navbar/> */}
          <Content style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Plasma" />
                </Route>
                <Route path='/Plasma' exact>
                  <Plasma/>
                </Route>
                <Route path='/Treatment' exact>
                  <Treatment/>
                </Route>
                <Route path='/Knowledge' exact>
                  <Knowledge/>
                </Route>
                <Route path='/Principle' exact>
                  <Principle/>
                </Route>
                <Route path='/LTAPP' exact>
                  <LTAPP/>
                </Route>
                <Route path='/TCELS' exact>
                  <TCELS/>
                </Route>
                <Route path='/FAQ' exact>
                  <FAQ/>
                </Route>
                <Route path='/Contact' exact>
                  <Contact/>
                </Route>
              </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
