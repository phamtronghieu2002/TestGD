import React, { ReactNode, useState } from "react";
import { Button, Tabs, Table, Space, Flex, Modal } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Form, { FormAddViahicle, FormExportExel } from "../components/Form/Form";
import { Input } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  isAlert: string;
  detail: ReactNode;
}
const columns: TableColumnsType<DataType> = [
  { title: "Biển số", dataIndex: "name" },
  { title: "Giấy phép", dataIndex: "age" },
  { title: "Đang  có cảnh báo", dataIndex: "isAlert" }, // Sửa ở đây
  { title: "Chi tiết", dataIndex: "detail" },
];
const columns1: TableColumnsType<DataType> = [
  { title: "Biển số", dataIndex: "name" },
  { title: "Giấy phép", dataIndex: "age" },
  { title: "Đang có cảnh báo", dataIndex: "isAlert" }, // Sửa ở đây
  { title: "Chi tiết", dataIndex: "detail" },

  {
    title: "Thao tác",
    key: "action",
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

const dataSource: DataType[] = [
  {
    key: 1,
    name: `92H1 - 5312`,
    age: 32,
    isAlert: "🛢 🔧 ⚡️ 🗒 ⭐",
    detail: <Link to="/detail">Chi tiết</Link>,
  },
  {
    key: 2,
    name: `47H3 - 1234`,
    age: 32,
    isAlert: "🛢",
    detail: <Link to="/detail">Chi tiết</Link>,
  },
  {
    key: 3,
    name: `59H1 - 1234`,
    age: 32,
    isAlert: "  ",
    detail: <Link to="/detail">Chi tiết</Link>,
  },
];

const TabTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Space>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Space>
      {/* div center */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Search placeholder="Tìm phương tiện" style={{ width: 200 }} />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </Space>
  );
};
const TabTable1: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpenA, setIsModalOpenA] = useState(false);
  const [isModalOpenB, setIsModalOpenB] = useState(false);

  const showModalA = () => {
    setIsModalOpenA(true);
  };
  const showModalB = () => {
    setIsModalOpenB(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpenA(false);
    setIsModalOpenB(false);
  };

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex", marginTop: "20px" }}
    >
      <Modal
        style={{}}
        title="Thêm phương tiện"
        open={isModalOpenA}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddViahicle />
      </Modal>
      <Modal
        style={{}}
        title="Nhập file exel"
        open={isModalOpenB}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormExportExel />
      </Modal>

      <Space>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Space>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Flex gap="small" wrap align="center">
          <Search placeholder="Tìm phương tiện" style={{ width: 200 }} />
          <Button type="primary" onClick={showModalA}>
            Thêm Phương Tiện
          </Button>

          <Button type="primary" onClick={showModalB}>
            Import từ Exel
          </Button>
        </Flex>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns1}
        dataSource={dataSource}
      />
    </Space>
  );
};
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenA, setIsModalOpenA] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalA = () => {
    setIsModalOpenA(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpenA(false);
  };

  const items = [
    {
      key: "1",
      label: "Phương tiện có GPS",
      children: <TabTable />,
    },
    {
      key: "2",
      label: "Phương tiện không có GPS",
      children: <TabTable1 />,
    },
  ];

  return (
    <div style={{ padding: 100 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button onClick={showModal} type="primary">
          Tạo nhắc nhở
        </Button>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
      <Modal
        style={{}}
        title="Tạo nhắc nhở mới"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
    </div>
  );
};

export default App;
