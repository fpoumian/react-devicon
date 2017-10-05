import React from 'react'
import renderer from 'react-test-renderer'
import YiiOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YiiOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
