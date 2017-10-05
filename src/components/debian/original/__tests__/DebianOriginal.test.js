import React from 'react'
import renderer from 'react-test-renderer'
import DebianOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DebianOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
