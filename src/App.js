// import logo from './logo.svg';
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Provider } from "react-redux";
import { ModalProvider } from "styled-react-modal";

import store from "./redux/store";
import ClientVIew from "./view/client";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <Wrapper>
          <ClientVIew />
        </Wrapper>
      </ModalProvider>
    </Provider>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: ${props => props.opacity};
  background-color: rgba(0, 0, 0, 0.7);
`

export default App;
