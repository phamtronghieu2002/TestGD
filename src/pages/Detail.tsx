import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ManagerAlert from "./ManagerAlert";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Thông tin xe",
    children: (
      <div>
        <h1>Thông tin xe</h1>
        <p
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          <b>Biển số xe:</b> 51A-12345
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          <b>Giấy phép lái xe:</b> 123456789
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          <b>Loại xe:</b> Ô tô
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#000",
          }}
        >
          <b>Thương hiệu:</b> Toyota
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: "Thông tin nhắc nhở",
    children: <ManagerAlert />,
  },
  {
    key: "3",
    label: "Lịch sử nhắc nhở",
    children: <ManagerAlert isHistory={true} />,
  },
];

const Detail: React.FC = () => (
  <div style={{ padding: 100 }}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);

export default Detail;
