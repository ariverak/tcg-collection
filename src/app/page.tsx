'use client'
import { Layout } from 'antd'
import CardList from '@/components/CardList'
import { pokemonCards } from '@/constants'

const { Content } = Layout

export default function Home() {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Content
        style={{
          width: '100%',
          padding: '0 50px',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <h1 className='pokemon-title'>Mi Colección</h1>
        <CardList cards={pokemonCards} />
      </Content>
    </Layout>
  )
}
