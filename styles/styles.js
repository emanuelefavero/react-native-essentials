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

  // Add Todo
  addTodoContainer: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    color: colors.text,
    padding: 8,
    fontSize: 16,
    borderRadius: 10,
    marginRight: 2,
  },

  // Todos
  title: {
    fontFamily: 'SF Pro Rounded',
    color: colors.primary,
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
    paddingTop: 16,
  },

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
