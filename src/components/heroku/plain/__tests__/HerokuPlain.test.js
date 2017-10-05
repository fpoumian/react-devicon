import React from 'react'
import renderer from 'react-test-renderer'
import HerokuPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HerokuPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
