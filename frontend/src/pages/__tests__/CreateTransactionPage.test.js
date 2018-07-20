import { shallow } from 'enzyme/build/index'
import React from 'react'
import renderer from 'react-test-renderer'

import { CreateTransactionPage } from '../CreateTransactionPage'

beforeEach(() => {
  fetch.resetMocks()
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CreateTransactionPage classes={{ card: 'card' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should submit the form and set requestError to false if successful', () => {
  const tree = shallow(
    <CreateTransactionPage classes={{ card: 'card', input: 'input', container: 'container' }} />
  )

  tree.setState({ amount: 10, transactionReceiver: 'test' })

  const form = tree.find('form').last()

  form.simulate('submit', { preventDefault: jest.fn() })

  expect(fetch).toBeCalled()

  expect(tree.state().submitError).toBe(false)
})

it('should not submit the form if there is no data', () => {
  const tree = shallow(
    <CreateTransactionPage classes={{ card: 'card', input: 'input', container: 'container' }} />
  )

  tree.setState({ amount: 0, transactionReceiver: '' })

  const form = tree.find('form').last()

  form.simulate('submit', { preventDefault: jest.fn() })

  expect(fetch).not.toBeCalled()
  expect(tree.state().transactionFieldError).toBe(true)
})

it('should call handleChange when input value changes', () => {
  const tree = shallow(
    <CreateTransactionPage classes={{ card: 'card', input: 'input', container: 'container' }} />
  )

  const input = tree.find('TextField').first()

  input.simulate('change', { target: { value: 'boom' } })

  expect(tree.state().transactionReceiver).toBe('boom')
})
