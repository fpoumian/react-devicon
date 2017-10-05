import React from 'react'
import renderer from 'react-test-renderer'
import CsharpLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CsharpLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
