import React from 'react'
import renderer from 'react-test-renderer'
import GoLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GoLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
