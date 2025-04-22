import { useState } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SpeakerProfile from "./Speaker/SpeakerProfile";
import Sidebar from "./common/SideBar";
import SpeakerManagement from "./Speaker/SpeakerManagment";
import NotFoundPage from "./common/NotFoundPage";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const isNotFound = location.pathname === "/404" || location.pathname === "*" || location.pathname.startsWith("/not-found");

  if (isNotFound) {
    return <NotFoundPage />;
  }

  return (
    <Layout className="min-h-screen">
      <Sider
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        className="hidden lg:block min-h-screen bg-white shadow-md"
      >
        <Sidebar />
      </Sider>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        style={{ padding: 0 }}
      >
        <Sidebar />
      </Drawer>

      <Layout className="bg-[#f8f9fc]">
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
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<SpeakerProfile />} />
            <Route path="/management" element={<SpeakerManagement />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
