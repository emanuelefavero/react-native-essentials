import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { View, Text, StyleSheet } from 'react-native'
import ClearAllButton from '@/components/ClearAllButton'

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Todo</Text>

      <ClearAllButton />
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
})
