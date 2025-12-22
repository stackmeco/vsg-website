import {
  Header,
  Hero,
  Problem,
  WhoWeAre,
  Pillars,
  Products,
  Values,
  Future,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhoWeAre />
        <Pillars />
        <Products />
        <Values />
        <Future />
      </main>
      <Footer />
    </>
  )
}
