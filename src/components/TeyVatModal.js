import React from "react";
import Modal from "styled-react-modal";
import styled from "styled-components";
import CloseImageFile from "../utils/images/teyvat/close.png";

const TeyVatModal = (props) => {
    const {
        show,
        closeModal,
        modalContent
    } = props;

    return (
        <StyledModal
            isOpen={show}
            contentLabel="Minimal Modal Example"
        >
            <Wrapper className="worldModal">
                <HeaderWrapper>
                    <HeaderTitle>{modalContent?.title}</HeaderTitle>
                    <CloseBtn onClick={closeModal} />
                </HeaderWrapper>
                <ContentWrapper>
                    <ContesntContainer>
                        {modalContent?.contents.map((item, index) => (
                            <ContentDetailWrapper key={index}>
                                <ContentDetailTitle>{item.subTitle}</ContentDetailTitle>
                                <ContentDetailDescription>{item.subContent}</ContentDetailDescription>
                                <ContesntContainer>
                                    {item.images ? item.images.map((image, key) => <ContentDetailWrapper key={key}> <ContentDetailImage src={image} /></ContentDetailWrapper>) : <ContentVideo controls src={item.video} loading="lazy" />}
                                </ContesntContainer>
                            </ContentDetailWrapper>
                        ))}
                    </ContesntContainer>
                </ContentWrapper>
            </Wrapper>
        </StyledModal>
    )
};

const StyledModal = Modal.styled`
  max-width: 720px;
  width: 100%;
  max-height: 84vh;
  height: 84vh;
  display: flex;
  justify-content: center;
  margin: auto;
  z-index: 100;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;
  color: white;
  margin-bottom: 10px;
`
const HeaderTitle = styled.div`
  padding-left: 24px;
  width: 100%;
  font-size: 28px;
  display: flex;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.2);
`
const CloseBtn = styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    background: rgba(128, 128, 128, 0.2) url(${CloseImageFile}) center no-repeat;
    background-size: 20px;
    cursor: pointer;
`
const ContentWrapper = styled.div`
    width: 100%;
    height: 84vh;
    overflow: auto;
    &::-webkit-scrollbar {
        display: block;
        width: 4px;
	    background-color: transparent;
        border-radius: 10px;
        z-index: 1;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: rgba(117, 97, 87, 0.2);
        border-radius: 10px;
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #f5f0e4;
        box-shadow: 0px 1px 1px 0px rgba(51,51,51,0.06);
        border-radius: 10px;
        width: 20px;
        z-index: 10;
        cursor: pointer;
    }
`
const ContesntContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 50px;
    color: white;
    max-width: 640px;
`
const ContentDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ContentDetailTitle = styled.div`
    position: relative;
    font-size: 25px;
    border-bottom: 3px solid rgba(255, 255, 255, 0.1);
    padding-top: 15px;
    padding-bottom: 15px;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 70px;
        height: 3px;
        background: #cca574;
    }
`
const ContentDetailDescription = styled.div`
    font-size: 14px;
    line-height: 1.8;
`
const ContentDetailImage = styled.img`
    width: 100%;
`

const ContentVideo = styled.iframe`
    width:100%;
    height:360px
`
export default TeyVatModal;