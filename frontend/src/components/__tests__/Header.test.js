import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '../Header'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header classes={{ name: 'name' }} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
