import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import {
  Modal,
  View,
  Text,
  Button,
  useColorScheme,
  StyleSheet,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAreYouSureModal } from '@/features/modal/showAreYouSureModalSlice'
import { deleteAllTodos } from '@/features/todos/todosSlice'

export default function AreYouSureModal() {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()
  const showAreYourSureModal = useSelector((state) => state.showAreYouSureModal)

  return (
    <Modal
      visible={showAreYourSureModal}
      animationType='slide'
      transparent={true}
    >
      <View
        style={[
          styles.centeredView,
          colorScheme === 'dark' && darkStyles.centeredView,
        ]}
        // Close the modal when clicking outside of it
        onStartShouldSetResponder={() => {
          dispatch(setShowAreYouSureModal(false))
          return true
        }}
      >
        <View
          style={[
            styles.modalView,
            colorScheme === 'dark' && darkStyles.modalView,
          ]}
          // Prevent closing the modal when clicking inside of it
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <Text
            style={[
              styles.modalTitle,
              colorScheme === 'dark' && darkStyles.modalTitle,
            ]}
          >
            Delete all todos?
          </Text>
          <Text
            style={[
              styles.modalText,
              colorScheme === 'dark' && darkStyles.modalText,
            ]}
          >
            This action cannot be undone.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancel'
              onPress={() => dispatch(setShowAreYouSureModal(false))}
            />
            <Button
              title='Delete'
              color='red'
              onPress={() => {
                dispatch(deleteAllTodos())
                dispatch(setShowAreYouSureModal(false))
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
  },
  modalView: {
    width: 270,
    paddingHorizontal: 18,
    paddingVertical: 13,
    backgroundColor: colors.modalViewBackground,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: colors.modalShadowColor,
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  modalTitle: {
    fontSize: fontSizes.modalTitle,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalText: {
    fontSize: fontSizes.default,
    color: colors.modalTextColor,
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})

const darkStyles = StyleSheet.create({
  centeredView: {
    backgroundColor: colors.modalBackgroundDark,
  },
  modalView: {
    backgroundColor: colors.modalViewBackgroundDark,
  },
  modalTitle: {
    color: colors.textDark,
  },
  modalText: {
    color: colors.modalTextColorDark,
  },
})
