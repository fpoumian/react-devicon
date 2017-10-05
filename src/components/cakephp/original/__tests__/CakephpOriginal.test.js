import React from 'react'
import renderer from 'react-test-renderer'
import CakephpOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CakephpOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
