import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({item}) => {

    const navigation = useNavigation();

    //Seed a sample image from picsum.photos
    //const randomId = item.id * 1000;

    //item.image = 'https://picsum.photos/seed/' + randomId + '/600/600';

    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => {navigation.navigate('Movie', { movie: item })}}>
            <View style={styles.container}>
                <View style={[styles.card]}>
                    <Image
                        style={styles.cardImage}
                        //source={{ uri: item.image}}
                    />
                    <View style={styles.cardContent} >
                        <View style={styles.cardHeader} >
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15
    },
    card: {
      borderWidth: 0,
      minHeight: 300,
      shadowColor: '#000000',
      shadowOffset: {
        wdith: 2,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 12,
      marginTop: 0,
      backgroundColor: '#FFFFFF',
      marginRight: 0,
      alignSelf: 'stretch'
    },
    cardImage: {
      flex: 1,
      height: 150,
      borderRadius: 3
    },
    cardContent: {
      paddingVertical: 15,
      paddingHorizontal: 15
    },
    title: {
      fontSize: 28
    },
    desc: {
      fontSize: 15
    },
    cardHeader: {
      paddingVertical: 5
  
    }

});