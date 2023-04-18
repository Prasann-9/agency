import Head from 'next/head'
import Image from 'next/image'
import Intro from "../components/Intro"
import styles from '@/styles/Home.module.css'
import Services from '@/components/Services'
import { data } from '@/data'
import Testimonials from '@/components/Testimonials'


export default function Home({services}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Intro/>
        <Services services={services}/>
        <Testimonials/>
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};