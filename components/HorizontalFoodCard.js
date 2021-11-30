import React from 'react'
import { View, Text,TouchableOpacity,Image} from 'react-native'
import {COLORS ,FONTS,SIZES,constants,icons,dummyData} from "../constants"

const HorizontalFoodCard = ({containerStyle,imageStyle,item}) => {
    return (
      <TouchableOpacity style={{
          flexDirection: 'row',
          borderRadius:SIZES.radius,
          backgroundColor:COLORS.lightGray2,
          ...containerStyle

      }}>
          {/* Image */}
          <Image 
          source={item.image}
          style={imageStyle}

          />
          {/* Info */}
          <View
          style={{
              flex:1
          }}
          >
              {/* Name */}
              <Text style={{...FONTS.h3,fontSize:17}}>
                  {item.name}
              </Text>

              {/* Description  */}
              <Text style={{...FONTS.h3,color:COLORS.darkGray2}}>
                  {item.description}
              </Text>
              {/* Price */}
              <Text style={{...FONTS.h2,marginTop:SIZES.base}}>
                  ${item.price}
              </Text>

          </View>
          {/* Calories */}

          <View
          style={{
              flexDirection: 'row',
              position:"absolute",
              top:5,
              right:SIZES.radius
          }}
          >
              <Image 
              source={icons.calories}
              style={{
                  width:30,
                  height:30,
              }}
              />
              <Text style={{color:COLORS.darkGray2,...FONTS.body5}}>
                  {item.calories} Calories
              </Text>

          </View>

      </TouchableOpacity>
    )
}

export default HorizontalFoodCard
