import React from 'react'
import renderer from 'react-test-renderer'
import GitOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
