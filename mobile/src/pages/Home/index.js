import React, { useEffect, useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { View } from "react-native"

import {
  Container,
  Header,
  HeaderRight,
  DevBanner,
  HeaderCenter,
  Icon,
  DevPropsTitle,
  BannerArea,
  BannerTitle,
  Image,
  Title,
  InputArea,
  Button,
  Input,
  SearchIcon,
  ListAreaContainer,
} from "./styles"

import logo from "../../image/logo.png"
import LoadingList from "../../components/LoadingList"
import List from "../../components/List"
import { FlatList } from "native-base"

import { useNavigation } from "@react-navigation/native"
import ListEmpt from "../../components/listEmpt"

export default function Home() {
  const navigation = useNavigation()
  const [name, setName] = useState("thiago")
  const [loadingList, setLoadingList] = useState(true)
  const [data, setData] = useState([1])

  //agora tenho acesso a variavel user criada no AuthContext
  const {user} = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      setLoadingList(false)
    }, 6000)
  }, [])

  function handleLogOut() {
    alert("Usuario logged out in sucess")
    navigation.navigate("Signin")
  }

  return (
    <Container>
      <Header>
        <HeaderCenter>
          <DevBanner>Dev,</DevBanner>
          <DevPropsTitle>{user?.name || "Convidado"}</DevPropsTitle>
        </HeaderCenter>
        <HeaderRight onPress={handleLogOut}>
          <Icon name="log-out" />
        </HeaderRight>
      </Header>

      <BannerArea>
        <Image source={logo} />
        <BannerTitle>Dev Notes</BannerTitle>
      </BannerArea>

      <Title>Adicione uma nova tarefa...</Title>

      <InputArea>
        <Input
          placeholder="Digite sua tarefa...."
          placeholderTextColor="#fff"
          keyboardAppearance="dark"
          enterKeyHint="done"
        />

        <Button onPress={() => alert("Procurando sua tarefa")}>
          <SearchIcon name="plus" />
        </Button>
      </InputArea>
      <Title>Lista de tarefas...</Title>

      {loadingList ? (
        <>
          <LoadingList />
          <LoadingList />
          <LoadingList />
        </>
      ) : (
        <ListAreaContainer>
          <FlatList
            data={data}
            renderItem={({ item }) => <List data={item} />}
            keyExtractor={(item) => item.id}
            
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
           
                <ListEmpt />
            
            }
          />
        </ListAreaContainer>
      )}
    </Container>
  )
}
