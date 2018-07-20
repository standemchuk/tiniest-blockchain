import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ShowTransactionHistoryPage from '../ShowTransactionHistoryPage'

beforeEach(() => {
  fetch.resetMocks()
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ShowTransactionHistoryPage />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should fetch the data and set requestError to false if successful', () => {
  const tree = shallow(
    <ShowTransactionHistoryPage />
  )

  expect(fetch).toBeCalled()
  expect(tree.state().requestError).toBe(false)
})
