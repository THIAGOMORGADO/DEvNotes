import React from "react"


import { Container, ListContentEmpty, Title } from "./styles"

export default function ListEmpt() {
  return (
    <Container>
      <ListContentEmpty>
        <Title>Nao A tarefas cadastradas...</Title>
      </ListContentEmpty>
    </Container>
  )
}
