import { FC, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Table } from "antd";
import type { GetProps } from "antd";

import type { TableColumnsType, TableProps } from "antd";
import { Modal } from "antd";
import { Option } from "antd/es/mentions";
import { FormAddTire } from "../components/Form/Form";
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "size lốp",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "seri lốp",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Thương hiệu",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Hành động",
    dataIndex: "action",
    render: (_, record: DataType) => (
      <Space size="middle">
        <Button type="link" onClick={() => {}}>
          Sửa
        </Button>
        <Button type="link" danger onClick={() => {}}>
          Xóa
        </Button>
      </Space>
    ),
  },
];
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const data: DataType[] = [
  {
    key: "1",
    name: "",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

type SearchProps = GetProps<typeof Input.Search>;
interface TireProps {}
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const Tire: FC<TireProps> = () => {
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
    <div style={{ padding: "100px" }}>
      <div
        className="filter"
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* form */}
        <Space direction="horizontal">
          <Search
            placeholder="Tìm kiếm lốp xe"
            allowClear
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
          <Button type="primary" onClick={showModal}>
            Thêm lốp xe
          </Button>
        </Space>
        <div className="">
          {/* form have field select using Form and */}

          <Form.Item label="Lọc" name="select">
            <Select placeholder="Select a option and change input text above">
              <Option value="option1">Option1</Option>
              <Option value="option2">Option2</Option>
              <Option value="option3">Option3</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      {/* table */}
      <Table columns={columns} dataSource={data} onChange={onChange} />;
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddTire />
      </Modal>
    </div>
  );
};

export default Tire;
