import React from 'react'
import renderer from 'react-test-renderer'
import HerokuPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HerokuPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
