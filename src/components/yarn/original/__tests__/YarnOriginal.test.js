import React from 'react'
import renderer from 'react-test-renderer'
import YarnOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YarnOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
