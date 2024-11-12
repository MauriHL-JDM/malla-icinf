import React from "react";
import "./App.css";
import { Container, Title } from "@mantine/core";
import Tabla from "./components/Tabla";

function App() {
  return (
    <Container size="xl">
      <Title className="title" order={1}>
        Malla Curricular 2020
        <br />
        Ingeniería Civil en Informática
      </Title>
      <Tabla />
    </Container>
  );
}

export default App;
