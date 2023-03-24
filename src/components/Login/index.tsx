import { Row, Col, Input, Form, Button, message} from "antd";
import { useAuth } from "../../context/AuthProvider/userAuth";
import React from 'react'
import { useNavigate } from "react-router-dom";


export const Login = () =>{
    const auth = useAuth()
    const nav = useNavigate()

    async function onFinish(values:{email:string, password:string}){

        try {
            
            await auth.authenticate(values.email, values.password)
            //message.success('sucesso')
            nav('/profile')
        } catch (error) {
            message.error('Invalido email ou password')
        }
    }

    return(
        <Row
        justify='center'
        align='middle'
        style={{
            height:'100vh'
        }}>

            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{span:8}}
                    wrapperCol={{span:16}}
                    onFinish={onFinish}
                    >
                    
                    <Form.Item
                        label='Email'
                        name='email'>

                            <Input/>

                    </Form.Item>

                    <Form.Item
                        label='password'
                        name='password'>

                            <Input.Password/>

                    </Form.Item>

                    <Form.Item wrapperCol={{offset:8, span:16}}>
                        <Button type='primary' htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}