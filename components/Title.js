import styles from '../styles'
import { Text, useColorScheme } from 'react-native'

export default function Title() {
  const colorScheme = useColorScheme() // dark mode

  return (
    <Text style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}>
      Todo
    </Text>
  )
}
