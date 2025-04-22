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

const menuItems = [
  {
    key: 'edit',
    label: 'Edit profile',
    icon: <EditOutlined />,
    className: '!bg-[#f0f5ff] text-[#2e2e2e] font-semibold',
  },
  {
    key: 'submissions',
    label: 'My submissions',
    icon: <HomeOutlined />,
  },
  {
    type: 'group',
    key: 'platform',
    title: 'PLATFORM MANAGER',
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: <AppstoreOutlined /> },
      { key: 'organizers', label: 'Organizers', icon: <TeamOutlined /> },
      { key: 'speakers', label: 'Speakers', icon: <UserOutlined /> },
    ],
  },
  {
    type: 'group',
    key: 'event',
    title: 'Event name',
    items: [
      {
        key: 'analytics',
        label: 'Analytics',
        icon: <BarChartOutlined />,
        className: 'bg-[#f7f4fa] text-[#6c63ff] font-semibold',
      },
      { key: 'event-setting', label: 'Event setting', icon: <SettingOutlined /> },
      { key: 'global-setting', label: 'Global setting', icon: <SettingOutlined /> },
      {
        type: 'submenu',
        key: 'accommodation',
        label: 'Accommodation',
        icon: <HomeOutlined />,
        items: [
          { key: 'acc-setting', label: 'Accommodation setting' },
          {
            key: 'reservation-list',
            label: 'Reservation list',
            className: 'bg-[#f7f4fa]',
          },
        ],
      },
    ],
  },
  { key: 'speaker-manage', label: 'Speaker management', icon: <UserOutlined /> },
  { key: 'session-manage', label: 'Session management', icon: <ScheduleOutlined /> },
  { key: 'schedule-manage', label: 'Schedule management', icon: <ScheduleOutlined /> },
  { key: 'export-data', label: 'Export data', icon: <DatabaseOutlined /> },
  { key: 'team-manage', label: 'Team management', icon: <TeamOutlined /> },
  { key: 'api-embed', label: 'API/Embed', icon: <ApiOutlined /> },
];

const Sidebar = () => (
  <Sider width={250} className="!bg-white min-h-screen shadow-md">
    <div className="bg-[#f8f9fc] rounded-xl p-4 flex justify-center">
      <img src="/Profil.svg" alt="CFP Logo" className="h-[60px] w-[100px] scale-250" />
    </div>

    <div className="relative text-white px-4 py-5 bg-[url('/background.png')] bg-cover bg-center mb-5">
      <div className="flex items-center gap-3">
        <Avatar size={48} className="bg-black">Y</Avatar>
        <div>
          <div className="text-base font-semibold leading-tight">MERIAF Youness</div>
          <div className="text-xs leading-tight opacity-90">youness@x-hub.io</div>
        </div>
      </div>
      <div className="absolute top-4 right-4 text-white text-xl cursor-pointer">⋮</div>
    </div>

    <Menu mode="inline" defaultSelectedKeys={['edit']} className="mt-4 text-sm font-medium">
      {menuItems.map((item) => {
        if (item.type === 'group') {
          return (
            <Menu.ItemGroup
              key={item.key}
              title={<span className="text-xs text-gray-400">{item.title}</span>}
            >
              {item.items.map((subItem) => {
                if (subItem.type === 'submenu') {
                  return (
                    <Menu.SubMenu
                      key={subItem.key}
                      icon={subItem.icon}
                      title={subItem.label}
                    >
                      {subItem.items.map((menu) => (
                        <Menu.Item key={menu.key} className={menu.className}>
                          {menu.label}
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                }

                return (
                  <Menu.Item key={subItem.key} icon={subItem.icon} className={subItem.className}>
                    {subItem.label}
                  </Menu.Item>
                );
              })}
            </Menu.ItemGroup>
          );
        }

        return (
          <Menu.Item key={item.key} icon={item.icon} className={item.className}>
            {item.label}
          </Menu.Item>
        );
      })}
    </Menu>
  </Sider>
);

export default Sidebar;
