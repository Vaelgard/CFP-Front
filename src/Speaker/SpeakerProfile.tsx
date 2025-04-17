import { Card, Tabs, Table, Button, Avatar, Tag, Input, Select } from 'antd';
import { ArrowLeftOutlined, SearchOutlined, ReloadOutlined, SyncOutlined, UserOutlined, ExportOutlined } from '@ant-design/icons';
import { ClassAttributes, HTMLAttributes, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { JSX } from 'react/jsx-runtime';

const { TabPane } = Tabs;
const { Option } = Select;

const SpeakerProfile = () => {
  const columns = [
    {
      title: 'Session',
      dataIndex: 'session',
      key: 'session',
    },
    {
      title: 'Event Name',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: 'Session Format',
      dataIndex: 'format',
      key: 'format',
    },
    {
      title: 'Session Track',
      dataIndex: 'track',
      key: 'track',
    },
    {
      title: 'Submission Date & Time',
      dataIndex: 'datetime',
      key: 'datetime',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: keyof typeof statusColors) => <Tag color={statusColors[status]}>{status}</Tag>,
    },
  ];

  const statusColors = {
    Submitted: 'default',
    Approved: 'green',
    Rejected: 'red',
    Accepted: 'blue',
    Declined: 'orange',
    Wishlist: 'purple',
  };

  const data = new Array(14).fill(null).map((_, i) => ({
    key: i,
    session: `Session title`,
    event: `Event title`,
    format: 'Quickie (15 min)',
    track: 'UX design',
    datetime: '12 Feb, 2023 at 04:45 pm',
    rating: '6',
    status: ['Submitted', 'Approved', 'Rejected', 'Accepted', 'Declined', 'Wishlist'][i % 6],
  }));

  const customTableHeader = {
    header: {
      row: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>) => <tr {...props} className="bg-[#F7F4FA]" />,
    },
  };

  return (
    <>
      <div className="p-6 bg-[#f8f9fc] min-h-screen font-sans">
        <div className="flex items-center text-[#6c63ff] mb-4 cursor-pointer">
          <ArrowLeftOutlined className="mr-2" />
          <span className="text-md font-semibold">Back to speakers list</span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
            <Card
              className="shadow-lg rounded-2xl border border-gray-200"
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
                    <Tag color="purple">UX/UI Design</Tag>
                    <Tag color="purple">Product Owner</Tag>
                    <Tag color="purple">Scrum</Tag>
                    <Tag color="purple">Artificial Intelligence</Tag>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-[#2e2e2e] mb-1">Previous Co-Speakers</p>
                  <div className="flex flex-wrap gap-3">
                    {[...Array(2)].map((_, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-white border border-purple-600 rounded-xl px-3 py-2 gap-2 shadow-sm"
                      >
                        <Avatar size="small" icon={<UserOutlined />} className="bg-[#6c63ff] text-white" />
                        <span className="text-sm text-black">Rachid Ait Wamndi</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="col-span-3 shadow-lg rounded-2xl border border-gray-200" bordered={false}>
            <Tabs defaultActiveKey="1" 
             tabBarStyle={{ backgroundColor: '#F7F4FA', borderRadius: '1rem', padding: '0.5rem 1rem' }}
            >
              <TabPane tab={<span className="font-semibold ">Speaker's Submission (20)</span>} key="1" >
                <div className="flex items-center justify-between mb-4">
                  <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="w-1/3 rounded-md" />
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
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} components={customTableHeader} />
              </TabPane>
              <TabPane tab={<span className="font-semibold">Speaker's Events (15)</span>} key="2">
                <div className="flex items-center justify-between mb-4">
                  <Input prefix={<SearchOutlined />} placeholder="Search by lorem..." className="w-1/3 rounded-md" />
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
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} components={customTableHeader} />
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SpeakerProfile;