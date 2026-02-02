import React from 'react'
import styles from './NewsFeed.module.css'

function NewsFeed(darkmode) {

    return (
      <div className={styles.NewsFeed}>
        <div className={styles.Content}>
            <h1>Newfeed component</h1>
        <p>Welcome to our website.</p>
        <p>Here you can see news about things that we are working on.</p>
        <ol>
            <li>Crazy Eights - Done</li>
            <li>Snip Snap Snorum - Done</li>
            <li>Black jack - Done</li>
            <li>Matching - Done</li>
            <li>Go Fish - In Progress</li>
            <li>Spider Solitare - In Progress</li>
            <li>War - DONE</li>
            <li>Online game features - TODO</li>
            <li>Load Leaderboard - DONE</li>
            <li>Upload to Leaderboards - TODO</li>
            <li><ol>
                  <li>Crazy Eights - In Progress</li>
                  <li>Snip Snap Snorum - In Progress</li>
                  <li>Black jack - In Progress</li>
                  <li>Matching - In Progress</li>
                  <li>Go Fish - In Progress</li>
                  <li>Spider Solitare - In Progress</li>
                  <li>War - In Progress</li>
                </ol>
            </li>
            <li>Login functions - Done</li>
            <li>Suggestions - DONE</li>
        </ol>
        </div>
        
      </div>
    )
  
}

export default NewsFeed
