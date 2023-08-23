// Custom Input Component

import React from 'react';
// React Native Package Component
import {TextInput, View, Text} from 'react-native';

// Custom Css Style
import m from '../style/index';

export default function AprInput({
    InputText, // Head Text
    inputTextStyle,
    onPressIn,
    inputWidth,
    keyboardType,
    multiline,
    placeholderText,
    password,
    maxLength,
    defaultInput,
    value,
    onChangeText,
    color,
    inputStyle
}) {
  return (
    <View style={[m.col, m.f(1)]}>
      {InputText ? (
        <Text style={[m.mb(4), m.fontSCW(14, color ? color : defaultInput === true ? m.primaryTransparent2  : m.primaryColor, '500'), inputTextStyle]}>
          {InputText}
        </Text>
      ) : null}
      <TextInput
        onPressIn={onPressIn}
        style={[
          m.b(1),
          m.fontSCW(14, color ? color : defaultInput === true ? m.primaryTransparent2 : m.primaryColor, '400' ),
          m.bC(color ? color : defaultInput === true ? m.primaryTransparent2 : m.primaryColor),
          m.rad(8),
          m.ph(16),
          m.mb(16),
          m.w(inputWidth ? inputWidth : null),
          inputStyle,
        ]}
        keyboardType={keyboardType}
        multiline={multiline ? true : false}
        placeholderTextColor={color ? color : m.primaryColor}
        cursorColor={color ? color : m.primaryColor}
        placeholder={placeholderText}
        secureTextEntry={password ? true : false}
        maxLength={maxLength}
        editable={defaultInput ? false : true}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
