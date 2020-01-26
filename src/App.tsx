import React from "react";
import styled from "styled-components";

import Calendar from "./Calendar";
import Footer from "./Footer";
import Preview from "./Preview";
import Header from "./Header";
import { AppContextProvider } from "./hooks/useAppContext";
import ObjectiveController from "./ObjectiveController";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <AppContextProvider
      initialState={{
        objective: "PTO",
        start: new Date(),
        end: new Date(),
        isFirstSelection: true
      }}
    >
      <Container>
        <Header />
        <ObjectiveController />
        <Calendar />
        <Preview />
        <Footer />
      </Container>
    </AppContextProvider>
  );
};

export default App;
