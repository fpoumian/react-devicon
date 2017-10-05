import React from 'react'
import renderer from 'react-test-renderer'
import FacebookOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FacebookOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
