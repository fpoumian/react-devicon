import React from 'react'
import renderer from 'react-test-renderer'
import SequelizeOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SequelizeOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
