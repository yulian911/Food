import React from 'react'
import { TouchableOpacity,Text,Image} from 'react-native'
import {COLORS ,FONTS,SIZES,constants,icons,dummyData} from "../constants"

const TextIconButton = ({label,labelStyle,containerStyle,onPress,iconStyle,icon}) => {
    return (
   <TouchableOpacity style={{
       flexDirection:"row",
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor:COLORS.primary,
       ...containerStyle
   }}
   onPress={onPress}
   >
       <Text style={{
           color:COLORS.white,...FONTS.body3,...labelStyle,
       }}>
           {label}
       </Text>
       <Image style={{
           marginLeft:5,
           width:20,
           height:20,
           tintColor:COLORS.black,
           ...iconStyle
       }}  source={icon}/>

   </TouchableOpacity>
    )
}

export default TextIconButton
