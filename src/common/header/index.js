import React, { PureComponent } from 'react';
import {connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {Link,withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { HeaderWrapper,Logo,Nav,NavItem,ProgramList,ProgramItem,Addition,Telephone } from './style';


class Header extends PureComponent {

    render(){
        return (
            <div>
                <HeaderWrapper>
                    <Link to="/"> <Logo/></Link>
                    <Nav>
                        <NavItem className="left active"> 首页</NavItem>
                        <NavItem className="left">教学模式</NavItem>
                        <NavItem className="left">学生成果</NavItem>
                        <NavItem className="left">编程创作</NavItem>
                        <NavItem className="left"
                                 onClick = {this.props.mouseOver}
                                // onMouseOut = {this.props.mouseBlur}
                            >社区<i className={ this.props.focused? "focused iconfont":"iconfont"}>&#xe658;</i>
                            {this.getProgramList()}
                        </NavItem>

                        <NavItem className="left">关于我们</NavItem>
                    </Nav>
                <Addition>
                        <Telephone><i className="iconfont">&#xe60c;</i> 400-1859-9696</Telephone>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
    getProgramList(){
        if(this.props.focused){
            return (
                    <ProgramList>
                        <ul><li><ProgramItem>最新电影</ProgramItem></li></ul>
                        <ul><li><ProgramItem>最新电影</ProgramItem></li></ul>
                        <ul><li><ProgramItem>最新电影</ProgramItem></li></ul>
                        <ul><li><ProgramItem>最新电影</ProgramItem></li></ul>
                    </ProgramList>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    focused:state.getIn(['header','focused'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        mouseOver(){
            dispatch(actionCreators.mouseFoucsAction())
        },
        mouseBlur(){
            dispatch(actionCreators.mouseBlurAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));

