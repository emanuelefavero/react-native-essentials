import styles from '@/styles/styles'
import darkStyles from '@/styles/darkStyles'
import { Text, useColorScheme } from 'react-native'

export default function Title() {
  const colorScheme = useColorScheme() // dark mode

  return (
    <Text style={[styles.title, colorScheme === 'dark' && darkStyles.title]}>
      Todo
    </Text>
  )
}
