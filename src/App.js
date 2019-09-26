import React, { Component } from 'react'
import './App.css'
import { Layout } from './layout'
import Recipes from './components/recipes'
import Search from './components/search'
import Shopping from './components/shopping'
import Ingredients from './components/ingredients'



export default class App extends Component {
  render() {
    return (
      <div class="container">
        <Layout>
          <Search/>
          <Recipes/>
          <Ingredients/>
          <Shopping/>
        </Layout>
      </div>
    )
  }
}
