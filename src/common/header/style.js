import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div `
    z-index:1;
    position:relative;
    height:80px;
    margin:0 auto;
    overflow:hidden;
`;

export const Logo = styled.div `
    width:144px;
    height:48px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
    position:relative;
    cursor:pointer;
    float:left;
    margin-top:16px;
    margin-left:200px;
`;

export const Nav = styled.div `
    box-sizing:border-box;
    margin:0 auto;
    height:100%;
    padding-right:40px;
    float:left;
`;

export const NavItem = styled.div `
    position:relative;
    z-index:2;
    padding:0 20px;
    line-height:80px;
    font-size:16px;
    color:#333;
    margin:0 auto;
    height:100%;
    cursor:pointer;
    &.left {
        float:left;
       }
    .iconfont {
         text-align:center;
         font-size:10px;
      
    }
`;
export const ProgramList = styled.div `
  position:absolute;
  margin-left:20px;
  left:0;
  top:64px;
  width:100px;
  height:200px;
  padding:0 20px;
  background-color:red;
`;
export const ProgramItem = styled.div `

`;
export const Addition = styled.div `
  position:absolute;
  top:0;
  right:200px;
`;

export const Telephone = styled.div `
  float:right;
  margin-top:20px;
  margin-right:20px;
  padding:0 20px;
  line-height:40px;
  border-radius:20px;
  color:#2284F1;
  font-weight:bold;
  font-size:16px;
`;