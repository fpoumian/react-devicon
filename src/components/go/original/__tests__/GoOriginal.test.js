import React from 'react'
import renderer from 'react-test-renderer'
import GoOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GoOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
