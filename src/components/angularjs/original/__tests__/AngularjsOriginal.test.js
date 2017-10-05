import React from 'react'
import renderer from 'react-test-renderer'
import AngularjsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AngularjsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
