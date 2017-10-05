import React from 'react'
import renderer from 'react-test-renderer'
import CoffeescriptOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CoffeescriptOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
