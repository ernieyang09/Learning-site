import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
<header className={clsx('hero hero--primary', styles.heroBanner)}>
  <div className="container">
    <h1 className="hero__title">{siteConfig.title}</h1>
    <p className="hero__subtitle">{siteConfig.tagline}</p>
    <div className={styles.buttons}>
      {/*
      <Link className="button button--secondary button--lg" to="/docs/intro">
      Docusaurus Tutorial - 5min ⏱️
      </Link> */}
    </div>
  </div>
</header>
  )
}

export default function Home (): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
  <HomepageHeader />
  <div style={{
    width: '50%',
    margin: '0 auto',
    paddingTop: '50px',
    paddingBottom: '30px'
  }}>
    <p>This repo is for leetcode practice and interview questions collection.</p>

    <p>I arrange it by myself. I think it's good to have your own collection.</p>

    <p>It can help you study systematically. And the most important part, it helps you review what you've prepared before.</p>

    <p>Every time when I'm looking for the new job. I need to recall my memory again and again. If you just write it down,
    it can easily recall your memory. You can also have better impression for what you're writing here.</p>

    <p>I have a Chinese tech blog before using gatsby.js in 2018, I wrote about 3x articles, there are more than 10 article still in 1st page for google search result. Maybe I'll migrate it later.</p>

    <p>If I write the blog, I'll write the article in detail. For other interview concept or leetcode, I just make a snippet or note for self reminder.</p>

    <div>Todo list</div>
    <ul>
      <li>Add self intro or resume</li>
      <li>Migrate old article</li>
      <li>Change theme</li>
      <li>Change metadata for SEO</li>
      <li>Project page</li>
    </ul>

  </div>
  {/* <main>
    <HomepageFeatures />
  </main> */}
</Layout>
  )
}
