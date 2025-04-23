import { useState } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SpeakerProfile from "./Speaker/SpeakerProfile";
import Sidebar from "./common/SideBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpeakerManagement from "./Speaker/SpeakerManagment";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Router>
      <Layout className="min-h-screen">
        {/* Desktop Sidebar */}
        <Sider
          width={250}
          breakpoint="lg"
          collapsedWidth="0"
          className="hidden lg:block min-h-screen bg-white shadow-md"
        >
          <Sidebar />
        </Sider>

        {/* Mobile Drawer Toggle */}
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar />
        </Drawer>

        <Layout className="bg-[#f8f9fc]">
          {/* Mobile Header with Toggle */}
          <Header className="bg-white px-4 py-2 flex lg:hidden items-center shadow-sm">
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={() => setDrawerVisible(true)}
              className="text-xl"
            />
            <h1 className="ml-4 text-lg font-semibold">Speaker Profile</h1>
          </Header>

          <Content className="p-4">
            <Routes>
              <Route path="/profile" element={<SpeakerProfile />} />
              <Route path="/management" element={<SpeakerManagement/>} />
              {/* Add more routes as needed */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
