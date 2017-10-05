import React from 'react'
import renderer from 'react-test-renderer'
import NodejsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodejsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
