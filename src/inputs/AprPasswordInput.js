import React, {useState} from 'react';
// React Native Package Components
import {View, TextInput, Text} from 'react-native';
import {Icon} from '@rneui/themed';

// Custom Css Style
import m from '../../style/MStyle';
import {moderateScale} from '../../style/Metrics';

export default function AprPasswordInput({
  color,
  width,
  underlayColor,
  placeholderText,
  value,
  onChangeText,
  InputText,
  inputTextStyle
}) {
  const [ShowPassword, setShowPassword] = useState(true);

  return (
    <View style={[m.col]}>
        {InputText && (
            <Text style={[m.mb(4), m.fontSCW(14, color ? color : m.primaryColor , '500'), inputTextStyle]}>{InputText}</Text>
        )}
    <View
      style={[
        m.row,
        m.hbetween,
        m.b(1),
        m.ph(8),
        m.vcenter,
        m.rad(8),
        m.bC(color ? color : m.primaryColor),
        m.w(width ? width : null),
      m.mb(14)
      ]}>
      <TextInput
        style={[m.f(1), m.fontSCW(14, color ? color : m.primaryColor, '400'), m.mv(-2)]}
        secureTextEntry={ShowPassword}
        placeholderTextColor={color ? color : m.primaryColor}
        cursorColor={color ? color : m.primaryColor}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
      />
      <Icon
        underlayColor={underlayColor ? underlayColor : m.white}
        onPress={() => setShowPassword(!ShowPassword)}
        name={ShowPassword ? 'eye-off' : 'eye'}
        color={color ? color : m.primaryColor}
        type="material-community"
        size={moderateScale(18)}
      />
    </View>
    </View>
  );
}

// eye-off
// eye
