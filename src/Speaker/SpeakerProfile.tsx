import { Card, Tabs, Table, Button, Avatar, Input, Select } from 'antd';
import { ArrowLeftOutlined, SearchOutlined, ReloadOutlined, SyncOutlined, UserOutlined, ExportOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { ClassAttributes, HTMLAttributes, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import {  
  columnsSubmission,
  columnsEvents,
  dataSubmission,
  dataEvents,
  socialLinks, } from '../data/speakerProfileData';
const { TabPane } = Tabs;
const interests = [
  "Ui/UX Design",
  "Product Owner",
  "Scrum",
  "Artificial Intelligence",
];

const SpeakerProfile = () => {
  const [showCard, setShowCard] = useState(false);

  const customTableHeader = {
    header: {
      row: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>) => <tr {...props} className="bg-[#F7F4FA]" />,
    },
  };
  const [activeKey, setActiveKey] = useState('1');

  return (
    <>
      <h1 className="text-2xl font-bold text-[#2e2e2e] ml-1 mb-4">Speaker Profile</h1>
      <Card style={{ height: 'calc(100vh - 100px)', overflow: 'auto' }}>

          <div className="flex items-center text-[#6c63ff] mb-4 cursor-pointer">
            <ArrowLeftOutlined className="mr-2" />
            <span className="text-md font-semibold">Back to speakers list</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
            <div className="mb-4 cursor-pointer" onClick={() => setShowCard(!showCard)}>
            <Card
              className="shadow-lg rounded-2xl border border-gray-200 transition duration-200 hover:shadow-xl"
              style={{ backgroundColor: '#F7F4FA' }}
            >
              <div className="flex items-center gap-4">
                <Avatar size={64} className="bg-[#6c63ff] text-white">Y</Avatar>
                <div>
                  <div className="font-bold text-[#2e2e2e]">MERIAF Youness</div>
                  <div className="text-sm text-gray-500">Full Stack Intern @ xHub</div>
                </div>
              </div>
            </Card>
          </div>

            </div>
            {/* Conditionally Rendered Card */}
            {showCard && (
               <Card className="shadow-lg rounded-2xl border border-gray-200 flex-grow p-4" >
               <h2 className="text-lg font-semibold text-gray-900 mb-2">Speaker information</h2>
               <p className="text-sm text-gray-700 flex items-center gap-1 mb-1">
                <span className="text-purple-700">🛠</span> Product Design
              </p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p className="flex items-center gap-2">
                  <MailOutlined className="text-purple-700" /> youness.meriaf@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <PhoneOutlined className="text-purple-700" /> +212 6 44 55 55 55
                </p>
                <p className="flex items-center gap-2">
                  <EnvironmentOutlined className="text-purple-700" /> Morocco
                </p>
              </div>

         
              <div className="text-sm space-y-1 mb-4">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.url}
                    style={{ color: 'purple' }}
                    className="flex items-center gap-3 hover:underline"
                  >
                    {link.name} <ExportOutlined />
                  </a>
                  
                  ))}
                </div>
              </div>
         
               <div className="mb-4">
                 <h3 className="text-sm font-medium text-gray-900 mb-1">Bio</h3>
                 <p className="text-xs text-justify text-gray-600">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
               </div>
         
               <div className="mb-4">
                 <h3 className="text-sm font-medium text-gray-900 mb-1">Interests</h3>
                 <div className="flex flex-wrap gap-2">
                   {interests.map((item) => (
                     <Button
                     type="text"
                     className="!bg-purple-900 !text-white !border-none rounded-lg px-3 py-1 text-sm"
                   >
                     {item}
                   </Button>
                   
                   ))}
                 </div>
               </div>
         
               <div>
                 <h3 className="text-sm font-medium text-gray-900 mb-2">Previous Co-Speakers</h3>
                 <div className="flex flex-wrap gap-2">
                   {[...Array(4)].map((_, idx) => (
                     <div
                       key={idx}
                       className="flex items-center border border-purple-600 rounded-full px-3 py-1 gap-1 bg-white shadow-sm"
                     >
                       <Avatar
                         size="small"
                         icon={<UserOutlined />}
                         className="bg-[#6c63ff] text-white"
                       />
                       <span className="text-sm text-black">Rachid Wanmid</span>
                     </div>
                   ))}
                 </div>
               </div>
             </Card>
            )}
          </div>
            <div className="md:col-span-3">
              <Card className="shadow-lg rounded-2xl border border-gray-200" >
              <Tabs
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
                tabBarGutter={24}
                className="[&_.ant-tabs-ink-bar]:hidden [&_.ant-tabs-nav]:mb-0"
                renderTabBar={(props, DefaultTabBar) => (
                  <DefaultTabBar
                    {...props}
                    className="!bg-[#F7F4FA] px-4 pt-2"
                  />
                )}
              >
                <TabPane
                  key="1"
                  tab={
                    <div
                      className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-all relative z-10 ${
                        activeKey === '1'
                          ? 'bg-white text-purple-700 shadow-sm'
                          : 'text-gray-500'
                      }`}
                    >
                      Speaker's Submission(20)
                    </div>
                  }
                > 
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                    <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="md:w-1/3 w-full rounded-md" />
                    <div className="flex gap-2">
                        <Select
                          defaultValue="Session format"
                          className="w-40"
                          options={[{ label: 'Quickie (15 min)', value: 'Quickie' }]}
                        />
                        <Select 
                          defaultValue="Session Status" 
                          className="w-40"
                          options={[{ label: 'Accepted', value: 'Accepted' }, { label: 'Submitted', value: 'Submitted' }, { label: 'Approved', value: 'Approved' }]}
                        />
                        <Button className="bg-[#6c63ff] text-white border-none">Filter</Button>
                        <Button icon={<ReloadOutlined />} />
                        <Button icon={<SyncOutlined />} />
                      </div>
                    </div>
                    <Table columns={columnsSubmission} dataSource={dataSubmission} pagination={{ pageSize: 10,position: ['topRight'] }} components={customTableHeader} scroll={{ x: true }} />
                  </TabPane>
                  <TabPane
                    key="2"
                    tab={
                      <div
                        className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-all relative z-10 ${
                          activeKey === '2'
                            ? 'bg-white text-purple-700 shadow-sm'
                            : 'text-gray-500'
                        }`}
                      >
                        Speaker's Events (15)
                      </div>
                    }
                  > 
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                      <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="md:w-1/3 w-full rounded-md" />
                      <div className="flex gap-2">
                        <Select 
                          defaultValue="Event Status" 
                          className="w-40" 
                          options={[{ label: 'Upcoming', value: 'Upcoming' }, {label:'Current',value:'Current'},{label:'Ended',value:'Ended'}]} />
                        <Select 
                          defaultValue="CFP Status" 
                          className="w-40" 
                          options={[{ label: 'Opened', value: 'Opened' }, {label:'Closed',value:'Closed'},{label:'Future',value:'Future'}]} />
                        <Button className="bg-[#6c63ff] text-white border-none">Filter</Button>
                        <Button icon={<ReloadOutlined />} />
                        <Button icon={<SyncOutlined />} />
                      </div>
                    </div>
                    <Table columns={columnsEvents} dataSource={dataEvents} pagination={{ pageSize: 10 ,position: ['topRight'] }} components={customTableHeader} scroll={{ x: true }} />
                  </TabPane>
                </Tabs>
              </Card>
            </div>
        </div>
      </Card>
    </>
  );
};

export default SpeakerProfile;