import styles from './index.module.scss'
import React from 'react'
import Card from './Card'
import projects from './projects'

const WorkSection = () => {
  return (
    <div>
      <h2>Projects.</h2>
      <div className={styles['cards-wrap']}>
        {projects.map((p) => (
          <div className={styles['card-wrap']}>
            <Card {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkSection
