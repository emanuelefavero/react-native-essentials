import { store } from '@/store'
import { Provider } from 'react-redux'

import Layout from '@/Layout'

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

// NOTE: The Redux Provider needs to be the parent of the components that access the Redux store. That's why we wrap the Layout component with the Provider component in App.js. This way, all the components in the Layout component tree can access the Redux store
