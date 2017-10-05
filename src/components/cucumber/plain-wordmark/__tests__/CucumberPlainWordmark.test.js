import React from 'react'
import renderer from 'react-test-renderer'
import CucumberPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CucumberPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
