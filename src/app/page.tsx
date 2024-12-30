'use client'
import { Layout } from 'antd'
import CardList from '@/components/CardList'

const { Content } = Layout

const pokemonCards = Array(32).fill(
  'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY12/XY12_EN_103.png'
)

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
