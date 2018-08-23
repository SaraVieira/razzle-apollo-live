import React, { Fragment, Component } from 'react'

class Countries extends Component {
  state = { loading: true, countries: [] }

  componentDidMount = async () => {
    const get = await fetch('/api')
    const countries = await get.json()

    this.setState({
      loading: false,
      countries
    })
  }

  render() {
    const { countries, loading } = this.state
    return (
      <Fragment>
        <h2 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">
          There are {countries.length} countries in the world, who knew?
        </h2>
        <div className="pa3 pa5-ns">
          {loading ? (
            <span>Loading</span>
          ) : (
            <ul className="list pl0 measure center">
              {countries.countries.map(country => (
                <li
                  key={country}
                  className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Fragment>
    )
  }
}

export default Countries
