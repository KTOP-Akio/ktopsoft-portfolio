import React, { useEffect } from "react";
import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useDispatch } from "react-redux";

import { hideFooter } from "../../../redux/layoutSlice";
import { hideFaq } from "../../../redux/faqSlice";

const webWidth = window.innerWidth;
const webHeight = window.innerHeight - 66;

const webglWidth =
  webWidth / webHeight > 1920 / 890 ? (webHeight * 1920) / 890 : webWidth;
const webglHeight =
  webWidth / webHeight > 1920 / 890 ? webHeight : (webWidth * 890) / 1920;
  
const WebGL = () => {
  const dispatch = useDispatch();
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebGL.loader.js",
    dataUrl: "build/WebGL.data",
    frameworkUrl: "build/WebGL.framework.js",
    codeUrl: "build/WebGL.wasm",
  });

  useEffect(() => {
    dispatch(hideFooter());
    dispatch(hideFaq());
  }, [dispatch]);
  return (
    <WebGLWrapper>
      <WebGLContainer>
        <WebGLProvider unityProvider={unityProvider} />
      </WebGLContainer>
    </WebGLWrapper>
  );
};

const WebGLWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 66px;
  overflow: hidden;
`;
const WebGLContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
`;
const WebGLProvider = styled(Unity)`
  width: ${webglWidth}px;
  height: ${webglHeight}px;
`;
export default WebGL;
