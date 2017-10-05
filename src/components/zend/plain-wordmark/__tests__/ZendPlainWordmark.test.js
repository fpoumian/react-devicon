import React from 'react'
import renderer from 'react-test-renderer'
import ZendPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ZendPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
