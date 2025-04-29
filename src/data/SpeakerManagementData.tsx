// speakerData.ts
import { Avatar, Button } from "antd";
import { DownloadOutlined, EyeOutlined, MailOutlined, StopOutlined } from "@ant-design/icons";

export interface Speaker {
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

export const speakerData: Speaker[] = Array.from({ length: 30 }).map((_, idx) => ({
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

export const getSpeakerColumns = (
  onDeleteClick: (record: Speaker) => void
) => [
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
    render: (_: any, record: Speaker) => (
      <>
        <Button style={{ marginRight: 8 }}>
          <EyeOutlined />
        </Button>
        <Button onClick={() => onDeleteClick(record)}>
          <StopOutlined />
        </Button>
      </>
    ),
  },
];

export const speakerMenuItems = [
  {
    key: "export",
    icon: <DownloadOutlined />,
    label: "Export all speakers",
  },
  {
    key: "inform",
    icon: <MailOutlined />,
    label: "Inform all speakers",
  },
];
