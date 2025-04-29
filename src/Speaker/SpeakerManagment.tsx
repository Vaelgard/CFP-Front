import { useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Dropdown,
  Modal,
} from "antd";
import {
  FilterOutlined,
  ReloadOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import { speakerData, getSpeakerColumns, speakerMenuItems, Speaker } from "../data/SpeakerManagementData";

const { Search } = Input;

const SpeakerListCard = () => {
  const [statusFilter, setStatusFilter] = useState<string | undefined>();

  const filteredData = statusFilter
    ? speakerData.filter((d) => d.status === statusFilter)
    : speakerData;
  const [data, setData] = useState(speakerData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const handleBlockClick = (record: Speaker) => {
    setSelectedSpeaker(record);
    setIsModalVisible(true);
  };

  const handleConfirmDelete = () => {
    setData((prev) => prev.filter((item) => item.key !== selectedSpeaker?.key));
    setIsModalVisible(false);
  };
  const columns = getSpeakerColumns(handleBlockClick);
  

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Speaker Management</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
          <span className="text-sm font-medium text-gray-600">
            Statistics : {filteredData.length}/100 speakers
          </span>

          <div className="flex items-center gap-2">
            <Search placeholder="Search by lorem ..." allowClear className="w-56" />
            <Select
              placeholder="Speaker status"
              className="w-44"
              allowClear
              onChange={(value) => setStatusFilter(value)}
              options={[
                { value: "Informed", label: "Informed" },
                { value: "Not informed", label: "Not informed" },
              ]}
            />
            <Button type="default" style={{ background: '#EFEBF5' }}><FilterOutlined />Filter</Button>
            <Button type="default" style={{ background: '#EFEBF5' }}><ReloadOutlined /></Button>
            <Dropdown menu={{ items: speakerMenuItems }} trigger={["hover"]}>
            <Button type="default" style={{ background: '#EFEBF5' }}><MoreOutlined /></Button>
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
          <Modal
            title="Block speaker"
            open={isModalVisible}
            onOk={handleConfirmDelete}
            onCancel={() => setIsModalVisible(false)}
            okText="Continue"
            cancelText="Cancel"
            okButtonProps={{ style: { backgroundColor: "#5F4080" } }}    
          >
            <p>
              If you block this speaker <strong>{selectedSpeaker?.fullName}</strong>, they wouldn’t be able to submit a proposal in this event ? 
            </p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default SpeakerListCard;