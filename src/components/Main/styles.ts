import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--primary-1000);
  color: var(--light-100);
`

export const Content = styled.article`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
export const Logo = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  color: var(--light-100);
  font-size: 1.5rem;
  text-align: center;
`

export const Description = styled.h2`
  color: var(--light-100);
  font-size: 1rem;
  text-align: center;
`

export const Illustration = styled.img`
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }
`
