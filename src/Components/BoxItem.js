import React from 'react';
import {View, Text} from 'react-native';

const BoxItem = props => {
  const {boxStyles, children} = props;
  return (
    <View style={boxStyles}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {children} Component
      </Text>
    </View>
  );
};

export default BoxItem;
