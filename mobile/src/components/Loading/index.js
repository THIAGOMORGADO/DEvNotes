import React from "react"

import { Spinner } from "native-base"
import { Container, Logo, BannerArea, Title, SubTitle } from "./styles"

import logo from "../../image/logo.png"
import { ActivityIndicator } from "react-native"

export default function Loading() {
  return (
    <Container>
      <Logo source={logo} />
      <BannerArea>
        <Title>Dev</Title>
        <SubTitle>Notes</SubTitle>
      </BannerArea>
      <ActivityIndicator color="#8b2cf5" size="large" />
    </Container>
  )
}
