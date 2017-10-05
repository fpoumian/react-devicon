import React from 'react'
import renderer from 'react-test-renderer'
import NodejsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodejsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
