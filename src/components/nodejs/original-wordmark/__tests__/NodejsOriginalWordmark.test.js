import React from 'react'
import renderer from 'react-test-renderer'
import NodejsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodejsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
