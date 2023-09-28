import styled from "styled-components/native"

import { Entypo } from "@expo/vector-icons"

export const Container = styled.SafeAreaView`
  background-color: #222;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`
export const ImageArea = styled.View`
  width: 90%;
  height: 10%;
  align-items: center;
`

export const Logo = styled.Image`
  margin-top: 35%;
`

export const AreaForm = styled.View`
  width: 90%;
  height: 40%;
  border-radius: 1rem;
  margin-top: 50%;
`

export const Label = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin: 10px 40px;
`
export const Input = styled.TextInput`
  background-color: #333;
  width: 80%;
  height: 15%;
  margin: 0 auto;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  padding-left: 20px;
`

export const BtnArea = styled.View`
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 15%;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
`


export const Button = styled.TouchableOpacity`
  background-color: #333;
  flex-direction: row;
  
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
`
export const TitleButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`
