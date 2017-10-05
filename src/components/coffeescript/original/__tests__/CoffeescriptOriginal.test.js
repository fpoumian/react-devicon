import React from 'react'
import renderer from 'react-test-renderer'
import CoffeescriptOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CoffeescriptOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
