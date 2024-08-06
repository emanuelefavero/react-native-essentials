import { StyleSheet } from 'react-native'
import colors from '@/styles/colors'

const dark = StyleSheet.create({
  background: {
    backgroundColor: colors.backgroundDark,
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
