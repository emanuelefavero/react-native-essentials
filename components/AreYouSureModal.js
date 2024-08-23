import { Modal, View, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAreYouSureModal } from '@/features/modal/showAreYouSureModalSlice'
import { deleteAllTodos } from '@/features/todos/todosSlice'

export default function AreYouSureModal() {
  const dispatch = useDispatch()
  const showAreYourSureModal = useSelector((state) => state.showAreYouSureModal)

  return (
    <Modal
      visible={showAreYourSureModal}
      animationType='slide'
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Delete all todos?</Text>
          <Text style={styles.modalText}>This action cannot be undone.</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})
