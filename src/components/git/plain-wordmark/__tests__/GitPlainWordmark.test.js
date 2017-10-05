import React from 'react'
import renderer from 'react-test-renderer'
import GitPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
