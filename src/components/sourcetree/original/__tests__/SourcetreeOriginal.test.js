import React from 'react'
import renderer from 'react-test-renderer'
import SourcetreeOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SourcetreeOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
