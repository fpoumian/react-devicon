import React from 'react'
import renderer from 'react-test-renderer'
import ConfluenceOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ConfluenceOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
