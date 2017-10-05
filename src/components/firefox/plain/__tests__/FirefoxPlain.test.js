import React from 'react'
import renderer from 'react-test-renderer'
import FirefoxPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FirefoxPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
