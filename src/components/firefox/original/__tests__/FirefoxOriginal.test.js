import React from 'react'
import renderer from 'react-test-renderer'
import FirefoxOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FirefoxOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
