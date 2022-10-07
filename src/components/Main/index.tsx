import React from 'react'
import {
  Container,
  Content,
  Description,
  Illustration,
  Logo,
  Title
} from './styles'

const Main = () => {
  return (
    <Container>
      <Content>
        <Logo
          src="/img/iconWithText.svg"
          alt="Logo React with text React Avançado"
        />
        <Title>Next.js + TypeScript + Styled Components</Title>
        <Description>
          A React.js application template including TypeScript and Styled
          Components.
        </Description>
        <Illustration
          src="/img/hero.svg"
          alt="Illustration with a developer and a computer"
        />
      </Content>
    </Container>
  )
}

export default Main
