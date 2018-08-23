import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const SPEAKERS = gql`
  {
    allSpeakers {
      name
      photo {
        url
      }
    }
  }
`

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Query query={SPEAKERS}>
          {({ data, loading, error }) => {
            if (error) error
            if (loading) 'Loading'

            return (
              <ul>
                {data.allSpeakers.map(s => (
                  <li>{s.name}</li>
                ))}
              </ul>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Home
