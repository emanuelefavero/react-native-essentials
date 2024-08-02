import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // Dark mode utils
  darkBackground: {
    backgroundColor: '#000',
  },
  darkInput: {
    backgroundColor: 'rgb(28, 28, 30)',
    color: '#fff',
  },
  darkTitle: {
    color: '#22c55e',
  },
  darkTodoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.12)',
  },
  darkTodo: {
    color: '#fff',
  },

  // App
  appSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  // Add Todo
  addTodoContainer: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },

  input: {
    flex: 1,
    backgroundColor: 'rgb(227, 227, 232)',
    color: 'rgb(0, 0, 0)',
    padding: 8,
    fontSize: 16,
    borderRadius: 10,
    marginRight: 2,
  },

  // Todos
  title: {
    fontFamily: 'SF Pro Rounded',
    color: '#22c55e',
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
    paddingTop: 16,
  },

  todosContainer: {
    flex: 1,
  },

  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.08)',
  },

  todo: {
    fontSize: 20,
    marginVertical: 8,
  },
})

export default styles
