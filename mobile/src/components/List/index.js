import React, { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"

import {
  Container,
  TaskName,
  ButtonDeleteTask,
  IconDelete,
  TaskTitle,
} from "./styles"

export default function List({item}) {
  return (
    <Container>
      <TaskName>
        <TaskTitle>{item}</TaskTitle>
      </TaskName>
      <ButtonDeleteTask onPress={() => alert("Deletando tarefa")}>
        <IconDelete name="trash" />
      </ButtonDeleteTask>
    </Container>
  )
}
