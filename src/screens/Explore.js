import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {AppStyles} from '../../App.styles';
import BoxItem from '../Components/BoxItem';

const Explore = () => {
  const styles = AppStyles;
  const [text, onChangeText] = React.useState('');
  const [textRender, onChangeTextRender] = React.useState('');
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://indbeasiswa.com/wp-content/uploads/2021/05/permatayouthpreneur.jpg',
        }}
        style={{height: 200, width: 200}}
      />
      {/* <Image
        source={require('./permatayouthpreneur.jpeg')}
        style={{height: 200, width: 200}}
      /> */}
      <View
        style={{
          padding: 20,
        }}>
        <TextInput
          onChangeText={val => onChangeText(val)}
          value={text}
          style={{borderWidth: 1, marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {textRender}
        </Text>
        <Button
          onPress={() => {
            onChangeTextRender(text);
          }}
          title="Render"
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          height: 600,
        }}>
        <BoxItem boxStyles={{...styles.boxItem, ...styles.boxItemRed}}>
          Hi PYP
        </BoxItem>
        <BoxItem boxStyles={[styles.boxItem, styles.boxItemColor('cyan')]} />

        <View style={[styles.boxItem, styles.boxItemYellow]}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Hi PYP
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Explore;
