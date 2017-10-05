import React from 'react'
import renderer from 'react-test-renderer'
import MeteorOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MeteorOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
