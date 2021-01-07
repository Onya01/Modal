import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

// Modal

class App extends React.Component {
  constructor() {
    super();
    this.state={
      show:false
    }
  }

  render() {
    return(
      <View style={{flex: 1, marginTop: 100}}>
        <Text style={{fontSize: 80}}>Modal screen text</Text>
        <Button title='show modal' onPress={()=>{this.setState({show:true})}} />
        <Modal
        transparent={true}
        visible={this.state.show}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View style={{backgroundColor: '#ffffff', marginTop: 50, padding: 40, borderRadius: 10, flex: 1}}>
              <Text style={{fontSize: 80}}>Modal Text</Text>
              <Button title='close modal' onPress={()=>{this.setState({show:false})}} />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default App;