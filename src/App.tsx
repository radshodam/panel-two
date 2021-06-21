import React from "react";
import "../src/assets/icons/css/panel.css";
import styled from "styled-components";
// import Main from './components/main/Main'
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import Main from "./components/main/Main";
const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  direction: rtl;
  width: 100%;
  background: white;
  height: 1216px;
`;

const App: React.FC = () => {
  return (
    <StyledContainer>
      <Router>
        <Sidebar />

        <Main>
          {routes.map(({ name, path, containerPath }) => (
            <Route key={name} exact path={path}>
              {(props) => {
                let Pages = require(`${containerPath}`).default;
                return <Pages {...props} />;
              }}
            </Route>
          ))}
        </Main>
      </Router>
    </StyledContainer>
  );
};

export default App;
