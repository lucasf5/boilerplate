import React from 'react'
import {
  Container,
  Content,
  Description,
  Illustration,
  Logo,
  Title
} from './styles'

const Main = ({
  title = 'Next.js + TypeScript + Styled Components',
  description = 'A React.js application template including TypeScript and Styled Components.'
}) => {
  return (
    <Container>
      <Content>
        <Logo
          src="/img/iconWithText.svg"
          alt="Logo React with text React Avançado"
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Illustration
          src="/img/hero.svg"
          alt="Illustration with a developer and a computer"
        />
      </Content>
    </Container>
  )
}

export default Main
