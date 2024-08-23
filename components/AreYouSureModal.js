import { Modal, View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAreYouSureModal } from '@/features/modal/showAreYouSureModalSlice'
import { deleteAllTodos } from '@/features/todos/todosSlice'

export default function AreYouSureModal() {
  const dispatch = useDispatch()
  const showAreYourSureModal = useSelector((state) => state.showAreYouSureModal)

  return (
    <Modal visible={showAreYourSureModal} animationType='slide'>
      <View>
        <Text>Delete all todos?</Text>
        <Text>This action cannot be undone.</Text>
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
    </Modal>
  )
}
