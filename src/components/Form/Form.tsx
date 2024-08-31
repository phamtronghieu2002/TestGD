import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import moment from "moment";
import MyUpload from "../upload/upload";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormC: React.FC = () => {
  const [isName, setIsName] = useState<boolean>(false);

  return (
    <div style={{ paddingTop: "20px" }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
        {/* loại nhắc nhở */}
        <Form.Item
          rules={[{ required: true, message: "Name is required" }]}
          style={{ gap: 10 }}
          label="Loại nhắc nhở"
        >
          <Select
            onChange={(value) => {
              if (value === "khac") {
                setIsName(true);
              } else {
                setIsName(false);
              }
            }}
            defaultValue={"demo"}
          >
            <Select.Option value="demo">Nhắc nhở xăng</Select.Option>
            <Select.Option value="demo2">Nhắc nhở dầu</Select.Option>
            <Select.Option value="demo3 ">Nhắc nhở nhớt</Select.Option>
            <Select.Option value="khac">Khác</Select.Option>
          </Select>
        </Form.Item>
        {/* tên nhắc nhở */}
        {isName && (
          <Form.Item
            rules={[{ required: true, message: "Name is required" }]}
            style={{ gap: 10 }}
            label="Tên loại nhắc nhở"
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item label="KM ban đầu">
          <InputNumber />
          <span style={{ marginLeft: 10, display: "inline-block" }}>(KM)</span>
        </Form.Item>
        <Form.Item label="Cảnh báo sau">
          <InputNumber />
          <span style={{ marginLeft: 10, display: "inline-block" }}>(KM)</span>
        </Form.Item>

        <Form.Item label="Ngày nhắc nhở">
          <DatePicker
            disabledDate={(current) => {
              return current && current < moment().endOf("day");
            }}
          />
        </Form.Item>

        <Form.Item label="nhắc nhở trước">
          <InputNumber />
          <span style={{ marginLeft: "10px", display: "inline-block" }}>
            ngày
          </span>
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <MyUpload />
        </Form.Item>
        {/* text <Area></Area>*/}
        <Form.Item label="Ghi chú">
          <TextArea />
        </Form.Item>

        <Form.Item label="Bật/Tắt nhắc nhở" valuePropName="checked">
          <Switch defaultChecked />
        </Form.Item>
      </Form>
    </div>
  );
};

export const FormC2: React.FC = () => {
  const [isName, setIsName] = useState<boolean>(false);

  return (
    <div style={{ paddingTop: "20px" }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
        {/* loại nhắc nhở */}
        <Form.Item
          rules={[{ required: true, message: "Name is required" }]}
          style={{ gap: 10 }}
          label="Loại nhắc nhở"
        >
          <Input disabled={true} value={"cảnh báo dầu"} />
        </Form.Item>
        {/* tên nhắc nhở */}
        {isName && (
          <Form.Item
            rules={[{ required: true, message: "Name is required" }]}
            style={{ gap: 10 }}
            label="Tên loại nhắc nhở"
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item label="KM ban đầu">
          <InputNumber value={10} />
          <span style={{ marginLeft: 10, display: "inline-block" }}>(KM)</span>
        </Form.Item>
        <Form.Item label="Cảnh báo sau">
          <InputNumber value={20} />
          <span style={{ marginLeft: 10, display: "inline-block" }}>(KM)</span>
        </Form.Item>

        <Form.Item label="Ngày nhắc nhở">
          <DatePicker
            disabledDate={(current) => {
              return current && current < moment().endOf("day");
            }}
          />
        </Form.Item>

        <Form.Item label="nhắc nhở trước">
          <InputNumber />
          <span style={{ marginLeft: "10px", display: "inline-block" }}>
            ngày
          </span>
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <MyUpload />
        </Form.Item>
        {/* text <Area></Area>*/}
        <Form.Item label="Ghi chú">
          <TextArea />
        </Form.Item>

        <Form.Item label="Bật/Tắt nhắc nhở" valuePropName="checked">
          <Switch defaultChecked />
        </Form.Item>
      </Form>
    </div>
  );
};
export const FormAddViahicle: React.FC = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
        {/* loại nhắc nhở */}

        {/* tên nhắc nhở */}
        <Form.Item label="Biển số">
          <Input placeholder="Nhập biển số xe" />
        </Form.Item>
        <Form.Item label="Giấy phép">
          <Input placeholder="Nhập giấy phép lái xe" />
        </Form.Item>
      </Form>
    </div>
  );
};

export const FormAddTire: React.FC = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
        {/* loại nhắc nhở */}

        {/* tên nhắc nhở */}
        <Form.Item label="size lôp">
          <Input placeholder="Nhập size lốp" />
        </Form.Item>
        <Form.Item label="seri lôp">
          <Input placeholder="Nhập seri lốp" />
        </Form.Item>
        <Form.Item label="thương hiệu lôp">
          <Input placeholder="Nhập thương hiệu lốp" />
        </Form.Item>
      </Form>
    </div>
  );
};

export const FormExportExel: React.FC = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <a href="">Tải file mẫu tại đây</a>
      {/* center div */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <MyUpload />
      </div>
    </div>
  );
};
export default () => <FormC />;
