import React from 'react'
import renderer from 'react-test-renderer'
import BehanceOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BehanceOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
