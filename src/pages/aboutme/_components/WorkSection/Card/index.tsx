import styles from './index.module.scss'
import React from 'react'

const Tag = ({ children }) => {
  return <div className={styles['tag']}>{children}</div>
}

const Card = ({ name, desc, comment, link, img, tags }) => {
  const Dom = link ? 'a' : 'div'

  return (
    <Dom
      className={styles.card}
      {...(link ? { href: link, target: '_blank', style: { cursor: 'pointer' } } : {})}>
      <div
        style={{ overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
        <div
          className={styles['card-cover']}
          style={{
            backgroundImage: `url(${img})`,
          }}></div>
      </div>
      <div className={styles['card-content-wrap']}>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <h3>{name}</h3>
          {comment && <span className={styles['comment']}>{`(${comment})`}</span>}
        </div>
        <div>{desc}</div>
        <div className={styles['tag-wrap']}>
          {tags.map((t) => (
            <Tag>{t}</Tag>
          ))}
        </div>
      </div>
    </Dom>
  )
}

export default Card
