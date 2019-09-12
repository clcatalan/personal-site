import React from 'react';
import styled from 'styled-components'

import GuitarBG from '../assets/guitarist-cover.png'
import AvatarImg from '../assets/avatar.jpg'
import LinkedIn from '../assets/linkedin-icon.png'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    background: #020202;

`

const GuitarImg = styled.img`
   width: 100%;
   height: 100%;
 
`

const ContentContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

`

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
    padding-top: 100px;
    padding-bottom: 100px;
`

const ContentImg = styled.div`
    flex-grow: 1;
`

const NameHeader = styled.h1`
    color: #C49A6C;
    text-transform: uppercase;
    margin: 0;
    padding: 20px;
    border: 3px solid #C49A6C;

`

const SubName = styled.span`
    color: #b87333;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

`

const Quote = styled.span`
    color: white;
    font-size: 15px;
    color: #b87333;
`

const FooterText = styled.span`
    color: white;
    font-size: 15px;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Description = styled.h3`
    color: #9c9c9c;
    width: 70%;

`

const AvatarWrapper = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 50px;
`

const AvatarContainer  = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`

const Avatar  = styled.img`
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
`

const ContactFooter = styled.div`
    display: flex
    flex-direction: row;

    border-top:  1px  solid white;
    padding: 20px;
    background: #273E4A;
    justify-content: space-between;
`

const ContactDetails = styled.div`
    display: flex;
    flex-direction: row;
`

const ContactEmail = styled.span`
    color: white;
    text-decoration: underline;
`
const LinkedInImg = styled.img`
    width: 25px;
    height: 20px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
    }
`

class HomePage extends React.Component {

    openNewTab =  () =>{
        window.open('https://www.linkedin.com/in/clcatalan/', '_blank');
    }

    render () {
        return (
            <Container>
                <ContentContainer>
                <Content>
                    <NameHeader>Carlos Rafael Catalan</NameHeader>
                    <SubName>Guitarist | Software Engineer | Radian</SubName>
                    <AvatarWrapper>
                        <AvatarContainer>
                            <Avatar src={AvatarImg}></Avatar>
                        </AvatarContainer>
                        
                    </AvatarWrapper>
                    <DescriptionContainer>
                        <Description>This site is still under construction, come back soon for updates!</Description>
                    </DescriptionContainer>
               </Content>
                    <ContactFooter>
                        <FooterText>Are you an employer? You may contact me here: </FooterText>
                        <ContactDetails>
                            <ContactEmail>crlsctalan23@gmail.com</ContactEmail>
                            <LinkedInImg 
                                onClick={this.openNewTab}
                                src={LinkedIn}>
                            </LinkedInImg>
                        </ContactDetails> 
                    </ContactFooter>
                </ContentContainer>
                <ContentImg>
                    <GuitarImg src={GuitarBG}></GuitarImg>
                </ContentImg>

                
            </Container>
        )
    }
}


export default HomePage