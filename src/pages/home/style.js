import styled from 'styled-components';
import banner01 from '../../statics/banner01.png';
import banner02 from '../../statics/feature.png';


export const ApplyWrapper = styled.div `
    position:relative;
    display:block;
    height:640px;
    width:100%;
    overflow:hidden;
    background:url(${banner01}) no-repeat center center;
    background-size:auto 100%;
`;

export const ApplyForm = styled.div `
    position:absolute;
    top:170px;
    right:100px;
    display:block;
    width:333px;
    height:444px;
    background:#fff;
    overflow:hidden;
    border-radius:10px;
    box-sizing:border-box;
    padding:18px 0 30px;
`;

export const Title = styled.div`
    color: #2284f1;
    font-size: 20px;
    font-family: 'MicrosoftYaHeiLight';
    font-weight: bold;
    text-align: center;
    margin: 5px 0;  
    border-bottom: 1px solid rgba(163,163,163,0.21);
    padding: 4px;
    display:block;
    height:38px;
`;

export const Content = styled.div `
    padding:0 36px 0 33px;
`;

export const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #d3d3d3;
    line-height: 40px;
    font-size: 15px;
    outline: none;
    margin-top: 15px;
    text-indent: 1em;
`;
export const Select = styled.select `
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #d3d3d3;
    line-height: 40px;
    font-size: 15px;
    outline: none;
    margin-top: 15px;
    text-indent: 1em;
`;
export const Option = styled.option `

`;
export const VerifyCode = styled.div `
    width: 100%;
    border-radius: 2px;
    line-height: 47px;
    font-size: 15px;
    outline: none;
    margin-top: 15px;
    text-indent: 1em;
    &.l-captcha {
        margin-left:0;
        background-color:red;
    }
`;
export const Button = styled.button `
    width: 265px;
    height: 48px;
    background: #E50012;
    border-radius: 2px;
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius:4px;
    cursor:pointer;
`;
export const ApplyButton = Button.extend `
    width:122px;
    height:42px;
    line-height:38px;
    margin-top: 15px;
    float:right;
    background-color:#2284f1;
`;
export const DistinctWrapper = styled.div `
    width:1025px;
    margin:0 auto;
    overflow:hidden;
    margin-bottom:65px;
`;
export const SpecialTitle = styled.div `
    height:100px;
    width:100%;
    margin:65px auto;
    .teaching-english {
        color: #333333;
        font: bold 29px "STXingkai";
        text-align: center;
        margin: 5px auto;
    }
    .teaching-chinese {
        color: #333;
        font: bold 29px "微软雅黑";
        text-align: center;
        margin: 0;
    }
    .course-english {
        color:#fff;
        font: bold 29px "STXingkai";
        text-align: center;
        margin: 5px auto;
    }
    .course-chinese {
        color:#fff;
        font: bold 29px "微软雅黑";
        text-align: center;
        margin: 0;
    }
    .dash-line {
        width: 100%;
        text-align: center;
        height: 0;
        margin-bottom: 27px;
    }
    .yellow-line {
        display: inline-block;
        width: 44px;
        height: 3px;
        background: #ffd400;
    }
    .blue-line {
        display: inline-block;
        width: 100px;
        height: 3px;
        background: #2284f1;
        margin: 0 5px;
    }
    .red-line {
        display: inline-block;
        width: 44px;
        height: 3px;
        background: #ff3838;
    }
`;

export const TeachingWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;
export const Teaching = styled.div `
   flex:1;
   padding:0 80px;
   box-sizing:border-box;
   .teaching-img {
        width: 263px;
        display: block;
        margin: 0 auto;
   }
   .teaching-title {
        color: #2284F1;
        font-size: 20px;
        font-family: "微软雅黑";
        margin: 30px auto 20px;
        text-align: center;
   }
   .teaching-content {
        font-size: 16px;
        color: #666;
        font-family: "微软雅黑";
        line-height:24px;
   }
`;

export const SpecialWrapper = styled.div`
    height:950px;
    width:100%
    overflow:hidden;
    background:url(${banner02}) no-repeat center center;
    background-size:auto 100%;    
`;
export const CourseList = styled.div `
    width: 1300px;
    margin: 10px auto;
    box-sizing: border-box;
`;
export const CourseItem = styled.div `
    width: 386px;
    height: 510px;
    background: #fff;
    float: left;
    border-radius:10px;
    margin-right:30px;
`;
export const ProgramingTop = styled.div ` 
    width:100%;
    height:222px;

`;

export const ProgramingContent = styled.div `
    width: 160px;
    float: right;
    margin: 80px 10px 0 0;
    .primary-top-title {
        margin: 0;
        font-size: 30px;
        font-family: "微软雅黑";
        color: #1b9777;
        text-align: center;
    }
    .primary-top-text {
        color: #1b9777;
        font-size: 16px;
        font-family: "微软雅黑";
        text-align: center;
        margin: 10px auto 9px;
    }
`;

export const ProgrammingBottom = styled.div `
    width: 100%;
    height: 288px;
    overflow: hidden;
    .primary-bottom-title {
        color: #353535;
        font-size: 30px;
        font-family: "微软雅黑";
        text-align: center;
        margin: 0;
        margin-top: 35px;
    }
    .primary-bottom-text {
        color: #353535;
        font-size: 20px;
        font-family: "微软雅黑";
        text-align: center;
        margin: 0;
        margin-top: 16px;
    }
    .primary-bottom-content {
        width: 257px;
        text-align: center;
        font-size: 14px;
        font-family: "微软雅黑";
        color: #999999;
        margin: 16px auto 30px;
    }
    .noip-vedio-play {
        width: 148px;
        height: 40px;
        text-align: center;
        line-height: 38px;
        font-size: 20px;
        display: block;
        background: #fff;
        text-decoration: none;
        border-radius: 21px;
        margin: 0 auto;
        font-weight: bold;
        border: 1px solid #bb9900;
        color: #bb9900 !important;
    }
    .iconfont {
        margin-right:8px;
    }
`;