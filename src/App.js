import React, {useState} from "react";
import { Form, Input, Button, Row } from "antd";
import "antd/dist/antd.css";

function AppForm(props) {
  const [phone, setPhone] = useState('')
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22 }
    }
  };
  const { getFieldDecorator } = props.form;
  return (
    <Row className="App" style={{textAlign:'center', padding: '20%' }}>
      <h1>Form validate</h1>
      <Form  {...formItemLayout}>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone">
          {getFieldDecorator("phone", {
            rules: [
              {
                max:10,
                message: "Phone number have 10 number"
              },
              {
                min:10,
                message: "Phone number have 10 number"
              },
              {
                required: true,
                message: "Please input your phone"
              }
            ]
          })(<Input type="number" value={phone} onChange={e => setPhone(e.target.value)} />)}
        </Form.Item>
        <Form.Item label="pas">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
      <Button type="primary">Submit</Button>
    </Row>
  );
}

const App = Form.create({ name: "register" })(AppForm);

export default App;
