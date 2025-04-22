import { useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Dropdown,
} from "antd";
import {
  FilterOutlined,
  ReloadOutlined,
  MoreOutlined,
} from "@ant-design/icons";

import { speakerData, speakerColumns, speakerMenuItems } from "../data/SpeakerManagementData";

const { Search } = Input;

const SpeakerListCard = () => {
  const [statusFilter, setStatusFilter] = useState<string | undefined>();

  const filteredData = statusFilter
    ? speakerData.filter((d) => d.status === statusFilter)
    : speakerData;

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
            <Button icon={<FilterOutlined />}>Filter</Button>
            <Button icon={<ReloadOutlined />} />
            <Dropdown menu={{ items: speakerMenuItems }} trigger={["hover"]}>
              <Button icon={<MoreOutlined />} />
            </Dropdown>
          </div>
        </div>

        <div className="max-h-[700px] overflow-y-auto">
          <Table
            columns={speakerColumns}
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
