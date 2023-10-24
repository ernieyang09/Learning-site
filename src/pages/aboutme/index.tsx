import styles from './index.module.scss'
import React from 'react'
import Layout from '@theme/Layout'
import { useColorMode } from '@docusaurus/theme-common'

import * as Icons from './_components/Icons'
import WorkSection from './WorkSection'

const IconWrapper: React.FC = () => {
  const { colorMode } = useColorMode()

  return (
    <div>
      <a
        className={styles.icon}
        href="https://github.com/ernieyang09"
        target="_blank"
        rel="noreferrer">
        <Icons.Github />
      </a>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/ernieyang09"
        target="_blank"
        rel="noreferrer">
        <Icons.Linkedin />
      </a>
      <a
        className={styles.icon}
        href="https://leetcode.com/ernieyang09"
        target="_blank"
        rel="noreferrer">
        {colorMode === 'light' ? <Icons.LeetCode /> : <Icons.LeetCodeDark />}
      </a>
    </div>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout title="About Ernie" description="Description will go into a meta tag in <head />">
      <div className={styles.bg} style={{ paddingBottom: '6rem' }}>
        <div className={styles.contentWrapper}>
          <div className={styles.flex} style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}></div>
            </div>
            <div style={{ maxWidth: '60em' }}>
              <p style={{ fontSize: '1.75em' }}>Hi, I'm Ernie Yang</p>

              <ul style={{ lineHeight: '2em' }}>
                <li>10y+ development experience, 7y+ FE experience. User-focus engineer.</li>
                <li>
                  Creative and adventurous. Join many startups and start project from scratch.
                </li>
              </ul>

              <p style={{ lineHeight: '2.5em' }}>
                I specialize in <strong>FE</strong> domain. I start using <strong>React</strong>{' '}
                from v0.13(2015). I'm passionate about FE. I'd more like to communicate and interact
                with users. I enjoy building up the new innovative products and bring it to the
                users. I like the community. Community gives you the most crucial feedback which
                could lead the product better.
              </p>

              <p>In short, just make the product the best. Don't let your users dissapointed!</p>
              <IconWrapper />
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <WorkSection />
          </div>
        </div>
      </div>
    </Layout>
  )
}
