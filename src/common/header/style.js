import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div `
    z-index:1;
    position:relative;
    height:80px;
`;

export const Logo = styled.div `
    position : absolute;
    top:16px;
    left:50px;
    height:48px;
    width:144px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div `
    width : 800px;
    padding-right:40px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    margin: 0 auto;
    height : 100%;
`;

export const NavItem = styled.div `
    position:relative;
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
  left:0;
  top:56px;
  width:130px;
  overflow:hidden;
  background-color:#fff;
  color:gray;
  line-height:40px;

`;
export const ProgramItem = styled.div `
  
`;
export const Addition = styled.div `
  position:absolute;
  right:0;
  top:0;
`;

export const Telephone = styled.div `
  float:right;
  margin-top:20px;
  margin-right:80px;
  padding:0 20px;
  line-height:40px;
  border-radius:20px;
  color:#2284F1;
  font-weight:bold;
  font-size:16px;
  overflow:hidden;
`;