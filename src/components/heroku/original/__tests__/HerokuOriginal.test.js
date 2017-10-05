import React from 'react'
import renderer from 'react-test-renderer'
import HerokuOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HerokuOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
