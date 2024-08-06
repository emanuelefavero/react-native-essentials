import { StyleSheet } from 'react-native'
import colors from '@/styles/colors'

const styles = StyleSheet.create({
  // App
  appSafeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },

  // Todos
  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  todo: {
    fontSize: 20,
    marginVertical: 8,
  },
})

export default styles
