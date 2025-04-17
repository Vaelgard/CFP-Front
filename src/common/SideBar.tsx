import { Avatar, Menu, Layout } from 'antd';
import {
  UserOutlined,
  EditOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  ScheduleOutlined,
  DatabaseOutlined,
  ApiOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => (
  <Sider
    width={250}
    className="!bg-white min-h-screen shadow-md"
  >
   <div className="bg-[#f8f9fc] rounded-xl p-4 flex justify-center">
  <img
    src="/CFP.png"
    alt="Logo"
    className="h-[60px] w-[100px] scale-250"
  />
</div>

    <div className="relative text-white px-4 py-5 bg-[url('/background.png')] bg-cover bg-center mb-5">
        <div className="flex items-center gap-3">
          <Avatar size={48} className="bg-black">Y</Avatar>
          <div>
            <div className="text-base font-semibold leading-tight">
              MERIAF Youness
            </div>
            <div className="text-xs leading-tight opacity-90">
              youness@x-hub.io
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-white text-xl cursor-pointer">
          ⋮
        </div>
      </div>

    {/* Menu Section */}
    <Menu
      mode="inline"
      defaultSelectedKeys={['edit']}
      className="mt-4 text-sm font-medium"
    >
      <Menu.Item key="edit" icon={<EditOutlined />} className="!bg-[#f0f5ff] text-[#2e2e2e] font-semibold">
        Edit profile
      </Menu.Item>
      <Menu.Item key="submissions" icon={<HomeOutlined />}>
        My submissions
      </Menu.Item>

      <Menu.ItemGroup key="platform" title={<span className="text-xs text-gray-400">PLATFORM MANAGER</span>}>
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="organizers" icon={<TeamOutlined />}>Organizers</Menu.Item>
        <Menu.Item key="speakers" icon={<UserOutlined />}>Speakers</Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="event" title={<span className="text-xs text-gray-400">Event name</span>}>
        <Menu.Item
          key="analytics"
          icon={<BarChartOutlined />}
          className="bg-[#f7f4fa] text-[#6c63ff] font-semibold"
        >
          Analytics
        </Menu.Item>
        <Menu.Item key="event-setting" icon={<SettingOutlined />}>
          Event setting
        </Menu.Item>
        <Menu.Item key="global-setting" icon={<SettingOutlined />}>
          Global setting
        </Menu.Item>

        <Menu.SubMenu key="accommodation" icon={<HomeOutlined />} title="Accommodation">
          <Menu.Item key="acc-setting">Accommodation setting</Menu.Item>
          <Menu.Item key="reservation-list" className="bg-[#f7f4fa]">
            Reservation list
          </Menu.Item>
        </Menu.SubMenu>
      </Menu.ItemGroup>

      <Menu.Item key="speaker-manage" icon={<UserOutlined />}>
        Speaker management
      </Menu.Item>
      <Menu.Item key="session-manage" icon={<ScheduleOutlined />}>
        Session management
      </Menu.Item>
      <Menu.Item key="schedule-manage" icon={<ScheduleOutlined />}>
        Schedule management
      </Menu.Item>
      <Menu.Item key="export-data" icon={<DatabaseOutlined />}>
        Export data
      </Menu.Item>
      <Menu.Item key="team-manage" icon={<TeamOutlined />}>
        Team management
      </Menu.Item>
      <Menu.Item key="api-embed" icon={<ApiOutlined />}>
        API/Embed
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
