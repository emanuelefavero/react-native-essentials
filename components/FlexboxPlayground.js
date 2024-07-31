import { View } from 'react-native'

export default function FlexboxExample() {
  const boxes = []

  for (let i = 0; i < 40; i++) {
    const newBox = {
      backgroundColor: `rgb(30, 30, ${Math.floor(Math.random() * 150)})`,
      top: Math.floor(Math.random() * 50) - 50,
    }
    boxes.push(newBox)
  }

  return (
    <View
      style={{
        marginTop: 70,
        padding: 20,
        height: 200,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 7,
      }}
    >
      {boxes.map((box, index) => (
        <View
          key={index}
          style={{
            top: box.top,
            backgroundColor: box.backgroundColor,
            flex: 1,
          }}
        ></View>
      ))}
    </View>
  )
}
