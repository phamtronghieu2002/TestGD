import { FC, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Table } from "antd";
import type { GetProps } from "antd";

import type { TableColumnsType, TableProps } from "antd";
import { Modal } from "antd";
import { Option } from "antd/es/mentions";
import { FormAddTire } from "../components/Form/Form";
import type { InputProps } from "antd";

import type { FormProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Tire: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

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
          <Button type="link" onClick={showModal1}>
            Sửa
          </Button>
          <Button type="link" danger onClick={() => {}}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

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

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  // const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  //   console.log(info?.source, value);

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
            // onSearch={onSearch}
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
        title="Thêm lốp xe"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddTire />
      </Modal>
      <Modal
        title="Sửa thông tin lốp xe"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Size lốp"
            // name="Size lốp"
            rules={[
              { required: true, message: "Xin hãy nhập Size lốp cần sửa" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Seri lốp"
            // name="Size lốp"
            rules={[{ required: true, message: "Xin hãy nhập Seri lốp mới!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Thương hiệu lốp"
            // name="Size lốp"
            rules={[
              {
                required: true,
                message: "Xin hãy nhập thương hiệu lốp cần update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Tire;
