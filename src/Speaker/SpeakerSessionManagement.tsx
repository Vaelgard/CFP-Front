import { Card, Tabs, Button, Avatar, Input, Select, Tag, Upload, Rate, Dropdown } from 'antd';

import { ArrowLeftOutlined,UserOutlined, DownOutlined, InfoCircleOutlined, UploadOutlined, AudioFilled, MoreOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { Typography } from 'antd';
import { speakerMenuItems } from '../data/SpeakerManagementData';

const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;
const SpeakerSessionManagement = () => {
  const [showCard, setShowCard] = useState(false);  
  const [rating, setRating] = useState(7);

  const users=useMemo(()=>[{
    name: 'Faissal Boutaounate',
    rating: 5,
    comment: 'Please note that a long text will appear to the speaker in order to add special comments',
    },
    {
      name: 'Marouane Gazanayi',
      rating: 5,
    },
    {
      name: 'Abdel Sghiouar',
      rating: 5,
    },
  ],[]);
    
  const [activeKey, setActiveKey] = useState('1');
    return (
      <>
        <h1 className="text-2xl font-bold text-[#2e2e2e] ml-1 mb-4">Speaker Profile</h1>
        <Card style={{ height: 'calc(100vh - 100px)', overflow: 'auto' }}>
          <div className="flex items-center text-[#6c63ff] mb-4 cursor-pointer">
            <ArrowLeftOutlined className="mr-2" />
            <span className="text-md font-semibold">Back to speakers list</span>
          </div>  
          <div className='flex justify-end gap-2'>
              <Dropdown menu={{ items: speakerMenuItems }} trigger={["hover"]}>
                <Button type="default" style={{ background: '#5F4080',color:'#fff',marginBottom:"20px"}}>Actions <MoreOutlined /></Button>
              </Dropdown>
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
                <>
                  <Card className="w-full max-w-md rounded-2xl shadow-md border border-gray-200 p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Evaluation</h2>
                    <div className="text-sm text-gray-700 mb-2">Your rating: {rating}</div>
                    <Rate
                      count={10}
                      style={{ color: '#FF851B' ,
                      display: 'flex',
                      justifyContent: 'space-between', 
                      padding: '8px 0',}}
                      value={rating}
                      onChange={(value) => setRating(value)}
                    />
                    <div className="mb-4">
                      <span className="text-sm text-gray-700 rounded-md p-2 flex items-center gap-2">
                        <TextArea
                          placeholder="Add your Feedback here"
                          autoSize={{ minRows: 2, maxRows: 4 }}
                          className="mb-2 rounded-md"
                        />
                        <Button type="primary" style={{ backgroundColor: '#5F4080', height: '53px' }}>
                          Add
                        </Button>
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex font-medium text-sm text-gray-800 mb-2">
                        <span>Name</span>
                        <span className='ml-[150px]'>Rating</span>
                      </div>
                      {users.map((user, idx) => (
                        <div key={idx} className="border-t border-gray-100 py-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar icon={<UserOutlined />} size="small" />
                              <span className="text-sm text-gray-800">{user.name}</span>
                            </div>
                            <Rate disabled value={user.rating} style={{color: '#FF851B' }} className="text-sm" />
                          </div>
                          {user.comment && (
                            <p className="text-xs text-gray-500 pl-8 mt-1">{user.comment}</p>
                          )}
                        </div>
                      ))}
                      <div className="text-center mt-2">
                        <Button type="link" icon={<DownOutlined />} className="text-purple-600">
                          See more
                        </Button>
                      </div>
                    </div>
                  </Card>
                  <Card style={{marginTop:"30px"}} className="w-full max-w-md rounded-2xl h-[500px] shadow-md border border-gray-200 p-4 ">
                    <h2 className="text-lg font-semibold text-gray-800">Discussion :</h2>
                    <div className="text-sm text-gray-700 mb-2">Your rating: {rating}</div>
                    <div className="mb-4">
                      <span className="text-sm text-gray-700 rounded-md  flex items-center gap-2">
                        <TextArea
                          placeholder="Type your message here"
                          autoSize={{ minRows: 2, maxRows: 4 }}
                          className="mb-2 rounded-md"
                          />
                        <Button type="primary" style={{ backgroundColor: '#5F4080', height: '53px' }}>
                          Send
                        </Button>
                      </span>
                      <p className='text-[10px] text-gray-500'><InfoCircleOutlined /> Use "@Speaker" to send a message to the responsible of the session.Use "@ReviewerName" to send a message within the reviewers' community.</p>
                    </div>
                    <div className="pt-2">
                      <div className="flex font-medium text-sm text-gray-800 mb-2">
                        <span className='text-[9px] text-gray-500'>
                          <span className="text-xl mr-[100px] text-black">Recent</span>
                          To me   To Speakers   Between reviewers
                        </span>
                      </div>
                      <div className='flex items-center justify-center gap-2 mb-2 h-[200px]'>
                        <p className='mt-[30px] text-gray-500'>No discussion yet.</p>
                      </div>
                    </div>
                  </Card>
                </>     
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
                      Speaker Submission
                    </div>
                  }
                >      
                  <div className="p-6 bg-white rounded-lg max-w-[1200px] mx-auto">
                    <Title level={4} className="text-black">
                      <AudioFilled /> Session title session title
                    </Title>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                      {/* Row 1 */}
                      <div>
                        <label className="block text-sm text-black mb-1">Test test</label>
                        <Input defaultValue="Test test" />
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">Elevator pitch</label>
                        <TextArea defaultValue="content" autoSize={{ minRows: 3 }} />
                      </div>

                      {/* Row 2 */}
                      <div>
                        <label className="block text-sm text-black mb-1">Session format</label>
                        <Select defaultValue="content" className="w-full">
                          <Option value="content">content</Option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">Track</label>
                        <Select defaultValue="content" className="w-full">
                          <Option value="content">content</Option>
                        </Select>
                      </div>

                      {/* Row 3 */}
                      <div>
                        <label className="block text-sm text-black mb-1">Tagline</label>
                        <div className="min-h-[40px] flex flex-wrap gap-2 border border-gray-200 px-2 py-1 rounded-md">
                          <Tag className="bg-purple-100 text-purple-700">Example 1</Tag>
                          <Tag className="bg-purple-100 text-purple-700">Example example exm 1</Tag>
                          <Tag className="bg-purple-100 text-purple-700">Example 1</Tag>
                          <Tag className="bg-purple-100 text-purple-700">Example example exm 1</Tag>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">Session description</label>
                        <TextArea defaultValue="content" autoSize={{ minRows: 3 }} />
                      </div>

                      {/* Row 4 */}
                      <div>
                        <label className="block text-sm text-black mb-1">Language</label>
                        <Select defaultValue="content" className="w-full">
                          <Option value="content">content</Option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">Audience level</label>
                        <Select defaultValue="content" className="w-full">
                          <Option value="content">content</Option>
                        </Select>
                      </div>
                    </div>

                    {/* More information */}
                    <div className="text-purple-700 font-medium mb-3 cursor-pointer">More information</div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm text-black mb-1">Additional note</label>
                        <TextArea defaultValue="content" autoSize={{ minRows: 3 }} />
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">New field (Phone/email/short text)</label>
                        <Input defaultValue="content" />
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">New field (file upload)</label>
                        <Input
                          defaultValue="content"
                          suffix={
                            <Upload>
                              <Button
                                icon={<UploadOutlined />}
                                className="!bg-purple-900 !text-white !rounded-md !px-3"
                              />
                            </Upload>
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">New field (single choice)</label>
                        <Select defaultValue="content" className="w-full">
                          <Option value="content">content</Option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">New field (tagline)</label>
                        <div className="min-h-[40px] flex flex-wrap gap-2 border border-gray-200 px-2 py-1 rounded-md">
                          <Tag className="bg-purple-100 text-purple-700">Example 1</Tag>
                          <Tag className="bg-purple-100 text-purple-700">Example example exm 1</Tag>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-black mb-1">New field (multiple choices)</label>
                        <div className="min-h-[40px] flex flex-wrap gap-2 border border-gray-200 px-2 py-1 rounded-md">
                          <Tag className="bg-purple-100 text-purple-700">Example 1</Tag>
                          <Tag className="bg-purple-100 text-purple-700">Example example exm 1</Tag>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-sm text-black mb-1">New field (Long text area)</label>
                        <TextArea defaultValue="content" autoSize={{ minRows: 3 }} />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                      <Button className="border border-gray-300 text-gray-700 px-6">Cancel</Button>
                      <Button type="primary" style={{background:"#5F4080"}}className="bg-purple-600 text-white border-none px-6">
                        Save changes
                      </Button>
                    </div>
                  </div>
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
                      History
                    </div>
                  }
                >
                  <div className="-mt-[27px] p-6 bg-white rounded-b-xl shadow-sm">
                    History content here...
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
}

export default SpeakerSessionManagement;