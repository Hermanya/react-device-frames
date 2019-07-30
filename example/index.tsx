import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { IPhoneX, Pixel3XL, Chrome } from "../.";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";

const Preview = styled(LivePreview)`
  width: 420px;
  height: 420px;
  padding: 32px;
  box-sizing: border-box;
`;

const DemoContainer = styled.div`
  width: 500px;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 32px;
`;
const DemosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const Header = styled.header`
  padding: 70px;
  background-color: #282c34;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #61dafb;
  text-align: center;
  margin: 0;
  font-size: 45px;
  letter-spacing: 0.01em;
`;

const Description = styled.p`
  padding-top: 15px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.01em;
  font-weight: 200;
`;

const Links = styled.div`
  padding-top: 65px;
`;

const Link = styled.a`
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  background-color: #61dafb;
  color: #000000;
  padding: 10px 25px;
  white-space: nowrap;
  text-decoration: none;
`;

const Footer = styled.header`
  padding: 70px;
  width: 100%;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Heading>Device frame components for React</Heading>
        <Description>npm install react-device-frames</Description>
        <Links>
          <Link href="https://github.io/Hermanya/react-device-frames">
            Star on GitHub
          </Link>
        </Links>
      </Header>
      <DemosContainer>
        <DemoContainer>
          <LiveProvider
            scope={{ IPhoneX }}
            code="<IPhoneX screenshot={'http://placehold.jp/1125x2436.png'} />"
          >
            <LiveError />
            <Preview />
            <LiveEditor />
          </LiveProvider>
        </DemoContainer>
        <DemoContainer>
          <LiveProvider
            scope={{ Pixel3XL }}
            code="<Pixel3XL screenshot={'http://placehold.jp/720x1480.png'} />"
          >
            <LiveError />
            <Preview />
            <LiveEditor />
          </LiveProvider>
        </DemoContainer>
        <DemoContainer>
          <LiveProvider
            scope={{ Chrome }}
            code="<Chrome screenshot={'http://placehold.jp/1200x700.png'}/>"
          >
            <LiveError />
            <Preview />
            <LiveEditor />
          </LiveProvider>
        </DemoContainer>
      </DemosContainer>
      <Footer>
        Made by <a href="https://starikov.dev">Herman Starikov</a> based on{" "}
        <a href="https://mockups.kkuistore.com/">KK UI Store</a> design
      </Footer>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
