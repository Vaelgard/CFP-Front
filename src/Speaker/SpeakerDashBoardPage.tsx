import { Card, Table, Input, Select, DatePicker, Tag, Button, Avatar } from 'antd';
import { DownloadOutlined, FilterOutlined, ReloadOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

const { RangePicker } = DatePicker;
const { Option } = Select;

const SpeakerDashboardPage = () => {
    const columns = useMemo(() => [
        {
          title: 'Avatar',
          dataIndex: 'avatar',
          render: () => <Avatar style={{ backgroundColor: '#000' }}>Y</Avatar>,
        },
        { title: 'Speaker Name', dataIndex: 'name' },
        { title: 'Email Address', dataIndex: 'email' },
        { title: 'Role', dataIndex: 'role' },
        { title: 'Nb Submissions', dataIndex: 'submissions' },
        { title: 'Company Name', dataIndex: 'company' },
        { title: 'Job Position', dataIndex: 'job' },
        { title: 'No of QPS', dataIndex: 'qps' },
        { title: 'Country', dataIndex: 'country' },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (status: string) => (
            <Tag color={status === 'Active' ? 'green' : status === 'Deleted' ? 'red' : 'default'}>
              {status}
            </Tag>
          ),
        },
        { title: 'Joined At', dataIndex: 'joined' },
      ], []);
      
      const data = useMemo(() => Array.from({ length: 12 }).map((_, index) => ({
        key: index,
        name: 'Youness Meriaf',
        email: 'youness@gmail.com',
        role: ['Organizer', 'Speaker', 'Reviewer'][index % 3],
        submissions: 5,
        company: 'xHub',
        job: 'Intern',
        qps: 6,
        country: ['Morocco', 'France'][index % 2],
        status: index % 4 === 0 ? 'Deleted' : 'Active',
        joined: '12 Feb, 2023 at 04:45 pm',
      })), []);
      
      const demographics = useMemo(() => Array.from({ length: 12 }).map((_, index) => ({
        key: index,
        country: ['Morocco', 'UK', 'France'][index % 3],
        count: 4500,
      })), []);
      
      const metricCards = useMemo(() => [
        {
          title: '#Call For Participants',
          stats: [
            { label: 'Total', value: 1420 },
            { label: 'Open', value: 889, color: 'bg-green-100 text-green-700' },
            { label: 'Future', value: 130, color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Cancelled', value: 32, color: 'bg-red-100 text-red-700' },
            { label: 'Past', value: 240, color: 'bg-purple-100 text-purple-700' },
          ],
        },
        {
          title: '#Events',
          stats: [
            { label: 'Total', value: 4420 },
            { label: 'Current', value: 3932, color: 'bg-green-100 text-green-700' },
            { label: 'Upcoming', value: 32, color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Cancelled', value: 33, color: 'bg-red-100 text-red-700' },
            { label: 'Past', value: 336, color: 'bg-purple-100 text-purple-700' },
          ],
        },
        {
          title: '#Submissions',
          stats: [
            { label: 'Total', value: 46420 },
            { label: 'Accepted', value: 15698, color: 'bg-green-100 text-green-700' },
            { label: 'In Review', value: 2664, color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Draft', value: 5420 },
            { label: 'Refused', value: 1000, color: 'bg-red-100 text-red-700' },
            { label: 'Past', value: 21896, color: 'bg-purple-100 text-purple-700' },
          ],
        },
        {
          title: '#Accomodations',
          stats: [
            { label: 'Total Hotels', value: 11420 },
            { label: 'Active', value: 2420, color: 'bg-green-100 text-green-700' },
            { label: 'Inactive', value: 10420, color: 'bg-purple-100 text-purple-700' },
            { label: 'Total Shuttles', value: 1420 },
            { label: 'Active', value: 6420, color: 'bg-green-100 text-green-700' },
            { label: 'Inactive', value: 3420, color: 'bg-purple-100 text-purple-700' },
          ],
        },
      ], []);
      
      const primaryStatsPerTitle = useMemo(() => {
        return metricCards.reduce((acc: Record<string, number>, card) => {
          const count = card.stats.filter(stat =>
            stat.label.toLowerCase().startsWith('total') ||
            stat.label.toLowerCase().startsWith('draft')
          ).length;
          acc[card.title] = count;
          return acc;
        }, {});
      }, [metricCards]);
      const customTableHeader = {
        header: {
          row: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
            <tr {...props} className="custom-header-row" />
          ),
          cell: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
            <th
              {...props}
              className="custom-header-cell"
              style={{
                backgroundColor: '#EFEBF5',
                color: 'black',
                fontWeight: '600',
                fontSize: '14px',
                padding: '12px',
              }}
            />
          ),
        },
      };
      return (
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Card style={{ height: 'calc(100vh - 100px)', overflow: 'auto' }}>

          <div className="grid grid-cols-4 gap-4">
          {metricCards.map((card, index) => (
            <Card
                key={index}
                title={
                <div className="flex justify-between items-center">
                    <RangePicker size="small" />
                </div>
                }
                extra={<Button icon={<DownloadOutlined />} size="small" />}
            >
                <span className="text-2xl text-gray-400">{card.title}</span>
                <div className="grid grid-flow-col grid-rows-2 gap-4">
                {card.stats
                    .filter(stat =>
                    stat.label.toLowerCase().startsWith('total') ||
                    stat.label.toLowerCase().startsWith('draft')
                    )
                    .map((stat, i) => (
                        
                        <span
                          key={`primary-${i}`}
                          className={`text-lg font-semibold text-purple-800 ${
                            primaryStatsPerTitle[card.title] > 1 ? 'row-span-1' : 'row-span-2'
                          }`}
                        >
                          <div className="text-lg font-semibold text-purple-800">{stat.value}</div>
                          <div className={`text-xs rounded py-0.5 mt-1 ${stat.color || 'text-gray-600'}`}>
                            {stat.label}
                          </div>
                        </span>
                      ))}
                {card.stats
                    .filter(stat =>
                    !stat.label.toLowerCase().startsWith('total') &&
                    !stat.label.toLowerCase().startsWith('draft')
                    )
                    .map((stat, idx) => (
                    <span key={`stat-${idx}`} className="flex flex-col text-center">
                        <div className="text-lg font-semibold text-purple-800">{stat.value}</div>
                        <span className={`text-xs rounded px-2 py-0.5 mt-1 ${stat.color || 'text-gray-600'}`}>
                        {stat.label}
                        </span>
                    </span>
                    ))}
                </div>
            </Card>
            ))}

             
          </div>
          
    
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Card title={ 
                <div className="flex justify-between flex-row-reverse items-center">
                    <RangePicker size="small" />
                </div>} 
                className="col-span-3 ">
            <h1 className="text-gray-400 font-semibold text-2xl">#Users – 65,986 Total</h1>
              <div className="flex gap-2 mb-2">
                <Input placeholder="Search by item…" className="w-1/3" />
                <Select placeholder="Speaker status" className="w-1/4">
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
                <Input placeholder="User name" className="w-1/4" />
                <Button type="default" style={{ background: '#EFEBF5' }}><FilterOutlined />Filter</Button>
                <Button type="default" style={{ background: '#EFEBF5' }}><ReloadOutlined /></Button>
                
                <Button type="default" style={{ background: '#EFEBF5' }}><DownloadOutlined /></Button>
              </div>
             
              <Table
                columns={columns}
                dataSource={data}
                pagination={{pageSize: 12, position: ['topRight']}}
                scroll={{ x: true }}
                components={customTableHeader}
                />
            </Card>
    
            <Card title={ 
                <div className="flex justify-between flex-row-reverse items-center">
                    <Button type="default" style={{ background: '#EFEBF5' }}><DownloadOutlined /></Button>
                </div>} 
            >
            <h1 className="text-gray-400 font-semibold mb-4 text-2xl">#Users Demographics</h1>
              <Input placeholder="Search by keyword…" style={{marginBottom:30}} />
              <Table
                columns={[
                    { title: 'Country', dataIndex: 'country' },
                    { title: 'Users Count', dataIndex: 'count' },
                ]}
                dataSource={demographics}
                pagination={false}
                scroll={{ x: true }}
                components={customTableHeader}
                />
            </Card>
          </div>
          </Card>
          
        </div>
        
        
      );
    };
    
export default SpeakerDashboardPage;
