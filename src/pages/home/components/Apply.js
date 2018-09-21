/**
 * Created by lenovo on 2018/9/20.
 */
import React, { PureComponent } from 'react';

import { ApplyWrapper,ApplyForm,Title,Content,Input,Select,Option,Button } from '../style';


class Apply extends PureComponent {
    render() {
        return (
            <div>
                <ApplyWrapper>
                    <ApplyForm>
                            <Title>限时免费领取千元试听课</Title>
                        <Content>
                            <Input placeholder="孩子姓名"/>
                            <Select placeholder="请选择">
                                <Option value="1">请选择孩子年级</Option>
                                <Option value="2">二年级</Option>
                                <Option value="3">三年级</Option>
                                <Option value="4"></Option>
                                <Option value="5"></Option>
                                <Option value="6"></Option>
                            </Select>
                            <Input placeholder="家长手机号"/>
                            <Input style={{"width":"122px","float":"left"}} placeholder="验证码"/>
                            <Button style={{"width":"122px","float":"right","background-color":"#2284f1"}}>获取验证码</Button>
                            <Button>立即领取</Button>
                        </Content>
                    </ApplyForm>
                </ApplyWrapper>
            </div>
        )
    }
}

export default Apply;