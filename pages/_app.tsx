import Layout from '@/components/Layout';
import Image from 'next/image';
import LayImg from "../public/layimg1.jpg"
import Head from 'next/head';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>

    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Pangolin&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet"/>
    </Head>

    <main>
      <Component {...pageProps} />
    </main>

  </Layout> 
  )
}
