import App from './App'

it('renders without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, App, { _reactInternalInstance: 'censored' })
    )
  ).toMatchSnapshot()
})
