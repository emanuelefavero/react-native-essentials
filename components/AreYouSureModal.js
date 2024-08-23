import { Modal, View, Text, Button } from 'react-native'

export default function AreYouSureModal() {
  return (
    <Modal>
      <View>
        <Text>Delete all tasks?</Text>
        <Text>This action cannot be undone.</Text>
        <Button title='Cancel' />
        <Button title='Delete' color='red' />
      </View>
    </Modal>
  )
}
