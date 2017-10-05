import React from 'react'
import renderer from 'react-test-renderer'
import FoundationOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FoundationOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
