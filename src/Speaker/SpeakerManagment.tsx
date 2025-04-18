import { useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Dropdown,
  Menu,
  Avatar,
} from "antd";
import {
  FilterOutlined,
  ReloadOutlined,
  MoreOutlined,
  DownloadOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

interface Speaker {
  key: string;
  avatar: string;
  fullName: string;
  email: string;
  company: string;
  country: string;
  tshirtSize: string;
  submissions: number;
  approved: number;
  status: string;
}

const data: Speaker[] = Array.from({ length: 30 }).map((_, idx) => ({
  key: `${idx}`,
  avatar: "https://i.pravatar.cc/300?img=1",
  fullName: "Meriaf Youness",
  email: "youness.meriaf@x-hub.io",
  company: "xHub",
  country: "Morocco",
  tshirtSize: idx % 2 === 0 ? "M" : "XL",
  submissions: 5,
  approved: idx % 6,
  status: idx % 3 === 0 ? "Informed" : "Not informed",
}));

const SpeakerListCard = () => {
  const [statusFilter, setStatusFilter] = useState<string | undefined>();

  const filteredData = statusFilter
    ? data.filter((d) => d.status === statusFilter)
    : data;

  const columns = [
    {
      title: "AVATAR",
      dataIndex: "avatar",
      render: (avatar: string) => <Avatar src={avatar} />,
    },
    {
      title: "FULL NAME",
      dataIndex: "fullName",
    },
    {
      title: "EMAIL ADDRESS",
      dataIndex: "email",
    },
    {
      title: "COMPANY NAME",
      dataIndex: "company",
    },
    {
      title: "COUNTRY",
      dataIndex: "country",
    },
    {
      title: "T-SHIRT SIZE",
      dataIndex: "tshirtSize",
    },
    {
      title: "N OF SUBMISSIONS",
      dataIndex: "submissions",
    },
    {
      title: "N OF APPROVED",
      dataIndex: "approved",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (status: string) => (
        <span
          className={`${
            status === "Informed"
              ? "text-green-600 font-medium"
              : "text-gray-400"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: () => (
        <>
            <Button type="primary" className="mr-2.5" >
                View
            </Button>
            <Button type="primary" danger>
                Delete
            </Button>
        </>
        
      ),
    },  
  ];

  const menu = (
    <Menu>
      <Menu.Item key="export" icon={<DownloadOutlined />}>
        Export all speakers
      </Menu.Item>
      <Menu.Item key="inform" icon={<MailOutlined />}>
        Inform all speakers
      </Menu.Item>
    </Menu>
  );

  return (
    <>
        <h1 className="text-2xl font-semibold mb-4">Speaker Management</h1>
        <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
            <span className="text-sm font-medium text-gray-600">
            Statistics : 30/100 speakers
            </span>

            <div className="flex items-center gap-2">
            <Search placeholder="Search by lorem ..." allowClear className="w-56" />
            <Select
                placeholder="Speaker status"
                className="w-44"
                allowClear
                onChange={(value) => setStatusFilter(value)}
            >
                <Option value="Informed">Informed</Option>
                <Option value="Not informed">Not informed</Option>
            </Select>
            <Button icon={<FilterOutlined />}>Filter</Button>
            <Button icon={<ReloadOutlined />} />
            <Dropdown overlay={menu} trigger={["click"]}>
                <Button icon={<MoreOutlined />} />
            </Dropdown>
            </div>
        </div>

        <div className="max-h-[700px] overflow-y-auto">
            <Table
            columns={columns}
            dataSource={filteredData}
            pagination={false}
            rowSelection={{ type: "checkbox" }}
            scroll={{ x: true }}
            className="min-w-full"
            />
        </div>
    </div>
    </>
  );
};

export default SpeakerListCard;
