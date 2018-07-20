import React from 'react'
import renderer from 'react-test-renderer'

import NoMatchPage from '../NoMatchPage'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <NoMatchPage />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
