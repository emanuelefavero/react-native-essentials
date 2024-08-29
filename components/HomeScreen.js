import { Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <Button
      title='Go to TodoList'
      onPress={() => navigation.navigate('TodoList')}
    />
  )
}
