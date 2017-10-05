import React from 'react'
import renderer from 'react-test-renderer'
import AngularjsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AngularjsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
