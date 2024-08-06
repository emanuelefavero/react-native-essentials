import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, StyleSheet } from 'react-native'

export default function Title() {
  return <Text style={styles.title}>Todo</Text>
}

// ---

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SF Pro Rounded',
    color: colors.primary,
    fontSize: fontSizes.title,
    fontWeight: 800,
    marginBottom: 12,
    paddingTop: 16,
  },
})
