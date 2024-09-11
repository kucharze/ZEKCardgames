import React from 'react'
import styles from './NewsFeed.module.css'

function NewsFeed(darkmode) {

    return (
      <div className={styles.NewsFeed}>
        <div className={styles.Content}>
            <h1>Newfeed component</h1>
        <p>Welcome to our website.  Here you can see news about things that we are working on.</p>
        <ol>
            <li>Crazy Eights</li>
        </ol>
        </div>
        
      </div>
    )
  
}

export default NewsFeed
