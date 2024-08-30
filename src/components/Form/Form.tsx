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

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormC: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

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
          <Select defaultValue={"demo"}>
            <Select.Option value="demo">Nhắc nhở xăng</Select.Option>
            <Select.Option value="demo2">Nhắc nhở dầu</Select.Option>
            <Select.Option value="demo3 ">Nhắc nhở nhớt</Select.Option>
          </Select>
        </Form.Item>
        {/* tên nhắc nhở */}
        <Form.Item label="Tên nhắc nhở">
          <Input placeholder="Nhập tên nhắc nhở" />
        </Form.Item>
        <Form.Item label="Số KM">
          <InputNumber />
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
        <Form.Item label="Bật/Tắt nhắc nhở" valuePropName="checked">
          <Switch />
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
export default () => <FormC />;
