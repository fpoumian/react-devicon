import React from 'react'
import renderer from 'react-test-renderer'
import HandlebarsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HandlebarsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
