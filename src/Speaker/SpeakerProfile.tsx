import { Card, Tabs, Table, Button, Avatar, Tag, Input, Select } from 'antd';
import { ArrowLeftOutlined, SearchOutlined, ReloadOutlined, SyncOutlined, UserOutlined, ExportOutlined } from '@ant-design/icons';
import { ClassAttributes, HTMLAttributes, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const { TabPane } = Tabs;
const { Option } = Select;

const SpeakerProfile = () => {
  const [showCard, setShowCard] = useState(false);
  const columnsSubmission = [
    { title: 'Session Title', dataIndex: 'session', key: 'session' },
    { title: 'Event Name', dataIndex: 'event', key: 'event' },
    { title: 'Session Format', dataIndex: 'format', key: 'format' },
    { title: 'Session Track', dataIndex: 'track', key: 'track' },
    { title: 'Submission Date & Time', dataIndex: 'datetime', key: 'datetime' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: keyof typeof statusColors) => <Tag color={statusColors[status]}>{status}</Tag>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => <span className="text-gray-400 cursor-pointer">👁️</span>,
    },
  ];

  const columnsEvents = [
    { title: 'Event Name', dataIndex: 'event', key: 'event' },
    { title: 'Event Manager', dataIndex: 'manager', key: 'manager' },
    { title: 'Event Dates', dataIndex: 'dates', key: 'dates' },
    { title: 'Nb Submissions', dataIndex: 'submissions', key: 'submissions' },
    {
      title: 'Event Status',
      dataIndex: 'eventStatus',
      key: 'eventStatus',
      render: (status:keyof typeof statusColors) => <Tag color={statusColors[status]}>{status}</Tag>,
    },
    {
      title: 'Call for Participation',
      dataIndex: 'cfpStatus',
      key: 'cfpStatus',
      render: (cfp:keyof typeof cfpColors) => <Tag color={cfpColors[cfp]}>{cfp}</Tag>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => <span className="text-gray-400 cursor-pointer">👁️</span>,
    },
  ];

  const statusColors = {
    Submitted: 'default',
    Approved: 'green',
    Rejected: 'red',
    Accepted: 'blue',
    Declined: 'orange',
    Wishlist: 'purple',
    Upcoming: 'orange',
    Current: 'green',
    Ended: 'default',
    Cancelled: 'red',
  };

  const cfpColors = {
    Opened: 'green',
    Closed: 'red',
    Future: 'blue',
    Cancelled: 'red',
  };

  const dataSubmission = new Array(14).fill(null).map((_, i) => ({
    key: i,
    session: `Session title Session title...`,
    event: `Event title`,
    format: 'Quickie (15 min)',
    track: 'UX design',
    datetime: '12 Feb, 2023 at 04:45 pm',
    rating: '6',
    status: ['Submitted', 'Approved', 'Rejected', 'Accepted', 'Declined', 'Wishlist'][i % 6],
  }));

  const dataEvents = new Array(14).fill(null).map((_, i) => ({
    key: i,
    event: 'Event title',
    manager: 'Youness Meriaf',
    dates: i % 3 === 0 ? 'May 30–June 02, 2023' : 'May 23–26, 2023',
    submissions: i % 3 === 0 ? 5 : 0,
    eventStatus: ['Upcoming', 'Current', 'Ended', 'Cancelled'][i % 4],
    cfpStatus: ['Future', 'Opened', 'Closed', 'Cancelled'][i % 4],
  }));

  const customTableHeader = {
    header: {
      row: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>) => <tr {...props} className="bg-[#F7F4FA]" />,
    },
  };

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
              bodyStyle={{ backgroundColor: '#F7F4FA' }}
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
              <Card className="shadow-lg rounded-2xl border border-gray-200 flex-grow p-4" bordered={false}>
                <div className="flex flex-col items-start text-left space-y-4">
                  <h1 className='text-2xl font-bold'>Speaker Information</h1>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700">📧 youness@gmail.com</p>
                    <p className="text-sm text-gray-700">📞 +212 6 44 55 55 55</p>
                    <p className="text-sm text-gray-700">📍 Morocco</p>
                  </div>

                  <div className="text-sm text-[#6c63ff] space-y-1">
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="flex items-center gap-1">Github <ExportOutlined /></a>
                      <a href="#" className="flex items-center gap-1">Twitter <ExportOutlined /></a>
                      <a href="#" className="flex items-center gap-1">Facebook <ExportOutlined /></a>
                      <a href="#" className="flex items-center gap-1">Youtube <ExportOutlined /></a>
                    </div>
                  </div>

                  <div>
                    <strong className="text-[#2e2e2e]">Bio</strong>
                    <p className="text-xs mt-1 text-justify text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                  </div>

                  <div>
                    <strong className="text-[#2e2e2e]">Interests</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Tag color="purple">Full Stuck intern</Tag>
                      <Tag color="purple">Product Owner</Tag>
                      <Tag color="purple">Scrum</Tag>
                      <Tag color="purple">Artificial Intelligence</Tag>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-[#2e2e2e] mb-1">Previous Co-Speakers</p>
                    <div className="flex flex-wrap gap-3">
                      {[...Array(2)].map((_, idx) => (
                        <div key={idx} className="flex items-center bg-white border border-purple-600 rounded-xl px-3 py-2 gap-2 shadow-sm">
                          <Avatar size="small" icon={<UserOutlined />} className="bg-[#6c63ff] text-white" />
                          <span className="text-sm text-black">Rachid Ait Wamndi</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>


            <div className="md:col-span-3">
              <Card className="shadow-lg rounded-2xl border border-gray-200" bordered={false}>
                <Tabs defaultActiveKey="1" tabBarStyle={{ backgroundColor: '#F7F4FA', borderRadius: '1rem', padding: '0.5rem 1rem' }}>
                  <TabPane tab={<span className="font-semibold">Speaker's Submission (20)</span>} key="1">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                      <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="md:w-1/3 w-full rounded-md" />
                      <div className="flex gap-2">
                        <Select defaultValue="Session format" className="w-40">
                          <Option value="Quickie">Quickie (15 min)</Option>
                        </Select>
                        <Select defaultValue="Session Status" className="w-40">
                          <Option value="Accepted">Accepted</Option>
                          <Option value="Submitted">Submitted</Option>
                          <Option value="Approved">Approved</Option>
                        </Select>
                        <Button className="bg-[#6c63ff] text-white border-none">Filter</Button>
                        <Button icon={<ReloadOutlined />} />
                        <Button icon={<SyncOutlined />} />
                      </div>
                    </div>
                    <Table columns={columnsSubmission} dataSource={dataSubmission} pagination={{ pageSize: 10,position: ['topRight'] }} components={customTableHeader} scroll={{ x: true }} />
                  </TabPane>

                  <TabPane tab={<span className="font-semibold">Speaker's Events (15)</span>} key="2">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                      <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="md:w-1/3 w-full rounded-md" />
                      <div className="flex gap-2">
                        <Select defaultValue="Event Status" className="w-40">
                          <Option value="Upcoming">Upcoming</Option>
                          <Option value="Current">Current</Option>
                          <Option value="Ended">Ended</Option>
                        </Select>
                        <Select defaultValue="CFP Status" className="w-40">
                          <Option value="Opened">Opened</Option>
                          <Option value="Closed">Closed</Option>
                          <Option value="Future">Future</Option>
                        </Select>
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