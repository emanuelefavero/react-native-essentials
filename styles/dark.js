import { StyleSheet } from 'react-native'
import colors from '@/styles/colors'

const dark = StyleSheet.create({
  background: {
    backgroundColor: colors.backgroundDark,
  },
  input: {
    backgroundColor: colors.inputBackgroundDark,
    color: colors.textDark,
  },
  title: {
    color: colors.primary,
  },
  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderDark,
  },
  todo: {
    color: colors.textDark,
  },
})

export default dark
