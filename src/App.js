import React, { Component } from 'react'
import { Layout } from './layout'
import Recipes from './components/recipes'

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Recipes/>
        </Layout>
      </div>
    )
  }
}
