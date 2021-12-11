import React from "react";
import {KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, Keyboard, TouchableOpacityBase} from 'react-native'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const KeyboardAvoiding = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoiding