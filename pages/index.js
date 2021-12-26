import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnb Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl px-8 mx-auto'>
        <section className='pt-6'>
          <h2 className='text-3xl pb-5 font-bold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {exploreData.map(item => (
              <Smallcard key={item.img} image={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>

        </section>
        <section className='pt-6'>
          <h2 className='text-3xl pb-5 font-bold'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
            {cardData?.map(item => (
              <MediumCard key={item.image} image={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          image='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          title='The Greatest Outdoors'
          description='Wishlists curated by AirBnb'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp')
    .then((res) => res.json());

  const cardData = await fetch('http://links.papareact.com/zp1')
    .then((res) => res.json());
  return {
    props: {
      exploreData,
      cardData
    }
  }
}