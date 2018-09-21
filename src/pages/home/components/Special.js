/**
 * Created by lenovo on 2018/9/20.
 */
import React from 'react';
import bg_scratch from '../../../statics/bg_scratch.jpg';
import bg_pyghon from '../../../statics/bg_python.jpg';
import bg_noip from '../../../statics/bg_noip.jpg';

import { SpecialWrapper,SpecialTitle,CourseItem,CourseList,ProgramingTop,ProgramingContent,ProgrammingBottom } from '../style';


const Special =() => {

        return (
            <div>
                <SpecialWrapper>
                    <SpecialTitle>
                        <p className="course-english">Course</p>
                        <h2 className="course-chinese">特色课程</h2>
                        <p className="dash-line">
                            <span className="yellow-line"></span>
                            <span className="blue-line"></span>
                            <span className="red-line"></span>
                        </p>
                    </SpecialTitle>
                    <CourseList>
                        <CourseItem>
                            <ProgramingTop style={{backgroundImage:'url(' + bg_scratch + ')'}}>
                                <ProgramingContent>
                                    <p className="primary-top-title">7岁以上</p>
                                    <p className="primary-top-text">图形编程</p>
                                </ProgramingContent>
                            </ProgramingTop>
                            <ProgrammingBottom></ProgrammingBottom>
                        </CourseItem>
                        <CourseItem>
                            <ProgramingTop style={{backgroundImage:'url(' + bg_pyghon + ')'}}>
                                <ProgramingContent>
                                    <p className="primary-top-title">9岁以上</p>
                                    <p className="primary-top-text">代码编程</p>
                                </ProgramingContent>
                            </ProgramingTop>
                            <ProgrammingBottom></ProgrammingBottom>
                        </CourseItem>
                        <CourseItem>
                            <ProgramingTop style={{backgroundImage:'url(' + bg_noip + ')'}}>
                                <ProgramingContent>
                                    <p className="primary-top-title">10岁以上</p>
                                    <p className="primary-top-text">算法编程</p>
                                </ProgramingContent>
                            </ProgramingTop>
                            <ProgrammingBottom>
                                <h2 className="primary-bottom-title">NOIP</h2>
                                <h3 className="primary-bottom-text">高级阶段</h3>
                                <p className="primary-bottom-content">掌握各种核心算法知识，参加NOIP比赛，为国内升学，国外留学添砖加瓦。</p>
                                <a className="noip-vedio-play">
                                    <i className="iconfont">&#xe710;</i>
                                    视频介绍</a>
                            </ProgrammingBottom>
                        </CourseItem>
                    </CourseList>
                </SpecialWrapper>
            </div>
        )
}

export default Special;