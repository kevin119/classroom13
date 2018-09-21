/**
 * Created by lenovo on 2018/9/20.
 */
import React from 'react';
import teaching1 from '../../../statics/teaching1.png';
import teaching2 from '../../../statics/teaching2.png';

import { DistinctWrapper,SpecialTitle,TeachingWrapper,Teaching } from '../style';

const Apply = () => {
        return (
            <div>
                <DistinctWrapper>
                    <SpecialTitle>
                        <p className="teaching-english">Teaching</p>
                        <h2 className="teaching-chinese">教学特色</h2>
                        <p className="dash-line">
                            <span className="yellow-line"></span>
                            <span className="blue-line"></span>
                            <span className="red-line"></span>
                        </p>
                    </SpecialTitle>
                    <TeachingWrapper>
                        <Teaching>
                            <img className="teaching-img" src={teaching1} alt="" />
                            <h3 className="teaching-title">哈克尼斯圆桌小班教学</h3>
                            <p className="teaching-content">在线1对6，注重分享与互动，一起“ 编 ”玩边学，形成良性学习循环。</p>
                        </Teaching>
                        <Teaching>
                            <img className="teaching-img" src={teaching2} alt="" />
                            <h3 className="teaching-title">哈克尼斯圆桌小班教学</h3>
                            <p className="teaching-content">在线1对6，注重分享与互动，一起“ 编 ”玩边学，形成良性学习循环。</p>
                        </Teaching>
                    </TeachingWrapper>
                </DistinctWrapper>
            </div>
        )
}

export default Apply;