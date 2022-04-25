import * as React from 'react';
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
import {GiBrain} from 'react-icons/gi'
import {VscClose} from 'react-icons/vsc'




const Drawer = () => {

    

    return (
        <Wrapper>
            <Nav>
                <GiBrain style={{color: 'white', fontSize:'53px'}}/>
                <VscClose style={{color: 'white', fontSize:'33px'}}/>
            </Nav>
            <Content>
                
            </Content>
        </Wrapper>
    );
};

export default Drawer;

const Wrapper = styled.div`
    height: 100vh;
    width: 15%;
    background:#6DA4D7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: absolute;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 11px;
    align-items: center;
    width: 80%;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 11px;
    align-items: center;
    width: 80%;
`