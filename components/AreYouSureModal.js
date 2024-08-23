import { Modal, View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'

export default function AreYouSureModal() {
  const showAreYourSureModal = useSelector((state) => state.showAreYouSureModal)

  return (
    <Modal visible={showAreYourSureModal} animationType='slide'>
      <View>
        <Text>Delete all tasks?</Text>
        <Text>This action cannot be undone.</Text>
        <Button title='Cancel' />
        <Button title='Delete' color='red' />
      </View>
    </Modal>
  )
}
