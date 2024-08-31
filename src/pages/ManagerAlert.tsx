import { FC } from "react";
import { Switch } from "antd";
import React from "react";
import { useState } from "react";
import { Table, Tag, Modal } from "antd";
import type { TableProps } from "antd";
import { Button, Flex } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import { Select } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import type { FormProps } from "antd";
import { Checkbox, Form } from "antd";
import type { CheckboxProps } from "antd";
interface DataType {
  key: string;
  name: string;
  type: string;
  km: number;
  licensePlate: string;
  date: string;
  time: number;
}
interface DataTypeReminder {
  key: string;
  name: string;
  checked?: boolean;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onChange1 = (key: string) => {
  console.log(key);
};
const onChange2: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const onChange3: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Tên loại nhắc nhở"
          name="username"
          rules={[{ required: true, message: "Điền loại nhắc nhở mới" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Xác nhận hiển thị</Checkbox>
        </Form.Item>
      </Form>
    ),
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onChange = (checked: boolean) => {
  console.log(`Switch to ${checked}`);
};
const onEditClick = () => {
  console.log("Edit button clicked");
};

const { Search } = Input;
const onSearch = (value: string) => {
  console.log("Search:", value);
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tên nhắc nhở",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Biển số phương tiện",
    dataIndex: "licensePlate",
    key: "licensePlate",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Loại nhắc nhở ",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Số Kilomet nhắc nhở ",
    dataIndex: "km",
    key: "km",
  },
  {
    title: "Ngày nhắc nhở ",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Trạng thái nhắc nhở ",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Tùy chỉnh nhắc nhở ",
    dataIndex: "address",
    key: "address",
    render: () => <Switch onChange={onChange} />,
  },
  {
    title: "Tùy chỉnh/chỉnh sửa ",
    dataIndex: "address",
    key: "address",
    render: () => (
      <Button type="primary" onClick={onEditClick}>
        Chỉnh sửa
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Nhắc nhở 1 ",
    licensePlate: "JIF 6498",
    type: "Dầu Nhớt",
    km: 2000,
    date: "21-10-2024",
    time: 3,
  },
  {
    key: "2",
    name: "Nhắc nhở 2 ",
    licensePlate: "418 PCU",
    type: "Bình Điện",
    km: 10000,
    date: "27-10-2024",
    time: 50,
  },
  {
    key: "3",
    name: "Nhắc nhở 3 ",
    licensePlate: "ABA-1909",
    type: "Đăng kiểm",
    km: 20000,
    date: "21-10-2025",
    time: 10,
  },
];

//model

const columns1: TableProps<DataTypeReminder>["columns"] = [
  {
    title: "Tên loại nhắc nhở",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Hiển thị",
    dataIndex: "checked",
    key: "checked",
    render: (checked: boolean) => (
      <Checkbox checked={checked} onChange={onChange3} />
    ),
  },
  {
    title: "Xóa nhắc nhở",
    dataIndex: "name",
    key: "name",
    render: () => <Button type="primary">Xóa</Button>,
  },
];

const data1: DataTypeReminder[] = [
  {
    key: "1",
    name: "Dầu nhớt",
    checked: true,
  },
  {
    key: "2",
    name: "Bình điện",
    checked: true,
  },
  {
    key: "3",
    name: "Đăng kiểm",
    checked: true,
  },
  {
    key: "4",
    name: "Hợp tác xã(Phù hiệu)",
    checked: true,
  },
  {
    key: "5",
    name: "Bảo hiểm",
    checked: true,
  },
  {
    key: "6",
    name: "Gara bảo dưỡng",
    checked: true,
  },
];

//
interface ManagerAlertProps {}

const ManagerAlert: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        style={{
          marginTop: 50,

          // backgroundColor: "#CCFFFF",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Search
          placeholder="Tìm kiếm bằng biển số xe"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 800, margin: 24 }}
        />
 
        <Modal
          title="Quản lý các loại nhắc nhở"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
          style={{ width: "100%" }}
        >
          {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange1} />; */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 5000, display: "flex", alignItems: "center" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Tên loại nhắc nhở"
                name="username"
                rules={[{ required: true, message: "Điền loại nhắc nhở mới" }]}
              >
                <Input style={{ width: 300 }} />
              </Form.Item>
              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Hiển thị</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginRight: 150,
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>

          <Table columns={columns1} dataSource={data1} />
        </Modal>
        <Select
          defaultValue="Tất cả nhắc nhở"
          style={{ width: 150, marginLeft: 40 }}
          onChange={handleChange}
          options={[
            { value: "Tất cả nhắc nhở", label: "Tất cả nhắc nhở" },
            {
              value: "Lọc theo các loại nhắc nhở",
              label: "Lọc theo các loại nhắc nhở",
            },
            { value: "Lọc theo GPS", label: "Lọc theo GPS" },
          ]}
        />
      </div>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default ManagerAlert;
