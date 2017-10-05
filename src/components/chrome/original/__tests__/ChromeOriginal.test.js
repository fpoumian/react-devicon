import React from 'react'
import renderer from 'react-test-renderer'
import ChromeOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ChromeOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
