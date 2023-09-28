import React, { useEffect, useState} from "react"
import { KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native"
import logo from "../../image/logo.png"

import {
  Container,
  Logo,
  AreaForm,
  ImageArea,
  Label,
  Input,
  Button,
  TitleButton,
  BtnArea,
} from "./styles"

import { useNavigation } from "@react-navigation/native"
import api from "../../services/api"
import { isAxiosError } from "axios"
import { useAuthContext } from "../../context/AuthContext"

export default function Signin() {
  //variavel pra salvar se o usuario esta se autenticando (carregando requisição)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useAuthContext();

  const navigation = useNavigation()
  async function handleSignIn() {
    setIsLoading(true) //indica que o usuario esta se
    try {
      const result = await api.post("/account/auth", {
        email: email.toLowerCase(),
        password,
      })

      const data = result.data

      setUser(data.user);
      if (result.status) {
        //alert("Autenticado com sucesso, bem vindo de volta " + data.user.name)
        navigation.navigate("Home")
      }
    } catch (ex) {
      if (isAxiosError(ex)) {
        alert(ex.response.data.message)
      } else {
        alert("Ocorreu um erro interno, tente novamente mais tarde")
      }
    }
    setIsLoading(false)
  }

  useEffect(() => {
    async function fetchapi() {
      try {
        const response = await api.get("/account/1")
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchapi()
  }, [])

  return (
    <>
      <Container>
        <ImageArea>
          <Logo source={logo} />
        </ImageArea>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <AreaForm>
            <Label>E-mail</Label>
            <Input
              placeholder="Digite seu email"
              placeholderTextColor="#fff"
              enterKeyHint="next"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <Label>Senha</Label>
            <Input
              placeholder="Digite sua senha"
              placeholderTextColor="#fff"
              secureTextEntry
              keyboardAppearance="dark"
              enterKeyHint="done"
              value={password}
              onChangeText={(text) => setPassword(text)}
              selectionColor="#8b2cf5"
            />

            <BtnArea>
              <Button onPress={handleSignIn}>
                {
                  isLoading ? ( //caso esteja carregando
                    <ActivityIndicator /> //mostra um loading
                  ) : (
                    <TitleButton>Entrar</TitleButton>
                  ) //caso n, mostra o texto de entrar
                }
              </Button>
            </BtnArea>
          </AreaForm>
        </KeyboardAvoidingView>
      </Container>
    </>
  )
}
