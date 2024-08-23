import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { View, Text, Pressable, StyleSheet, useColorScheme } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setShowAreYouSureModal } from '@/features/modal/showAreYouSureModalSlice'

export default function Title() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Todo</Text>

      {/* Clear All Button (Opens Modal) */}
      {todos.length > 0 && (
        <Pressable
          onPress={() => dispatch(setShowAreYouSureModal(true))}
          style={({ pressed }) => pressed && { opacity: 0.5 }}
        >
          <Text style={styles.clearButtonText}>Clear All</Text>
        </Pressable>
      )}
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'gray',
    marginBottom: 16,
    paddingTop: 16,
  },

  title: {
    fontFamily: 'SF Pro Rounded',
    color: colors.primary,
    fontSize: fontSizes.title,
    fontWeight: 800,
  },

  clearButton: {
    padding: 0,
    margin: 0,
  },

  clearButtonText: {
    color: colors.danger,
    fontSize: fontSizes.button,
  },
})
