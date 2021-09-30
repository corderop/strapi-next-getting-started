import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta massa ac purus tempor, ut egestas turpis tristique. Vivamus id porta massa. Curabitur sit amet magna velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla iaculis justo sit amet lectus efficitur, a efficitur nunc eleifend. Nam ipsum arcu, mattis sit amet sem vel, tincidunt aliquet felis. Vestibulum consequat turpis sed nisi feugiat scelerisque. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
