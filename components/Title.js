import styles from '@/styles/styles'
import dark from '@/styles/dark'
import { Text, useColorScheme } from 'react-native'

export default function Title() {
  const colorScheme = useColorScheme() // dark mode

  return (
    <Text style={[styles.title, colorScheme === 'dark' && dark.title]}>
      Todo
    </Text>
  )
}
