import React, { useState } from "react";
import { Button, Tabs, Table, Space, Flex, Modal } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Form, { FormAddViahicle } from "../components/Form/Form";
type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
}

const columns: TableColumnsType<DataType> = [
  { title: "Biển số", dataIndex: "name" },
  { title: "Giấy phép", dataIndex: "age" },

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

const dataSource = Array.from<DataType>({ length: 4 }).map<DataType>(
  (_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
  })
);

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

  const showModalA = () => {
    setIsModalOpenA(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpenA(false);
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
    <Space direction="vertical" size="middle" style={{ display: "flex",marginTop:'20px' }}>
      <Modal
        style={{}}
        title="Thêm phương tiện"
        open={isModalOpenA}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddViahicle />
      </Modal>
      <Space>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Space>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Flex gap="small" wrap align="center">
          <Button type="primary" onClick={showModalA}>
            Thêm Phương Tiện
          </Button>
          <span>Hoặc</span>

          <Button type="primary">Import từ Exel</Button>
          <a href="">Tải mẫu exel tại đây</a>
        </Flex>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
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
