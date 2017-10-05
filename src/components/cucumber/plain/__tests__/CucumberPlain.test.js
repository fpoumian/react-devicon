import React from 'react'
import renderer from 'react-test-renderer'
import CucumberPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CucumberPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
