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
      >
        <View
          style={[
            styles.modalView,
            colorScheme === 'dark' && darkStyles.modalView,
          ]}
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent background
  },
  modalView: {
    width: 270,
    paddingHorizontal: 18,
    paddingVertical: 13,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#71717a',
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#71717a',
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
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  modalView: {
    backgroundColor: 'rgb(28, 28, 30)',
  },
  modalTitle: {
    color: 'white',
  },
  modalText: {
    color: 'rgb(129, 129, 136)',
  },
})
