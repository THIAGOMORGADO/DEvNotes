import styled from "styled-components/native"
import { MaterialCommunityIcons, FontAwesome, Entypo } from "@expo/vector-icons"

export const Container = styled.SafeAreaView`
  background-color: #222;
  flex: 1;
  align-items: center;
`
export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`
export const HeaderLeft = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const Icon = styled(Entypo)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`
export const HeaderCenter = styled.View`
  height: 25px;
  width: 80%;
  margin-top: 3%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 33px;
`

export const DevBanner = styled.Text`
  width: 20%;

  font-size: 23px;

  color: #8b2cf5;
  font-weight: bold;
`
export const DevPropsTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  font-style: italic;
`

export const HeaderRight = styled.TouchableOpacity`
  width: 50px;

  align-items: center;
  justify-content: center;
`

export const BannerArea = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5%;
`

export const BannerTitle = styled.Text`
  color: #8b2cf5;
  font-size: 22px;
  font-weight: bold;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`

export const Title = styled.Text`
  color: #8b2cf5;
  width: 90%;
  margin-top: 5%;
  font-size: 22px;
  font-weight: bold;
`
export const InputArea = styled.View`
  width: 90%;
  margin-top: 7%;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  background-color: #8b2cf5;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const Input = styled.TextInput`
  width: 80%;
  height: 60px;
  background-color: #444;
  margin-right: 10px;
  border-radius: 10px;
  padding-left: 33px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`

export const SearchIcon = styled(Entypo)`
  color: #fff;
  font-size: 28px;
  align-items: center;
  justify-content: center;
`

export const ListAreaContainer = styled.View`
  width: 80%;
  height: 40%;
  margin-top: 10%;
`
