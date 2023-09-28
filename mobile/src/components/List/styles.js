import styled from "styled-components/native"
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons"

export const Container = styled.View`
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15%;
`
export const TaskName = styled.TouchableOpacity`
  background-color: #333;
  color: #fff;
  width: 80%;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
`
export const TaskTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #8b2cf5;
`
export const ButtonDeleteTask = styled.TouchableOpacity`
  background-color: #8b2cf5;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`
export const IconDelete = styled(Entypo)`
  color: #fff;
  font-size: 28px;
  align-items: center;
  justify-content: center;
`
