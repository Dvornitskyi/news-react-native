import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../styles/style';
import Form from './form';


export default function Main({ navigation }) {

    const [news, setNews] = useState([
        { name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"},
        { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: "https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202103091141"},
        { name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool!', key: '3', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARV3RQaMcNgaoj4FMGIVcaj3xckVrfU-MVA&usqp=CAU"},
    ])

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
      setNews((list) => {
        article.key = Math.random().toString();
        return [
          article,
          ...list
        ]
      });
      setModalWindow(false); 
    } 

    return (
      <View style={gStyle.main}>
        <Modal visible ={modalWindow}>
          <View style={gStyle.main}>
            <Ionicons name="close-circle" 
            size={34} color="red" 
            style={styles.iconAdd}
            onPress={()=> setModalWindow(false)}
            />
            <Text style={styles.text}>Form add news</Text>
            <Form addArticle={addArticle}/>
          </View>
        </Modal>
        <Ionicons name="add-circle-sharp" 
        size={34} 
        color="green" 
        style={styles.iconAdd}
        onPress={()=> setModalWindow(true)}
        />
        <Text style={gStyle.title}>Main page</Text>
        <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                <Image style={gStyle.img} source={{uri: item.img}}/>
                <Text style={styles.title}>{ item.name }</Text>
                <Text style={styles.anons}>{ item.anons }</Text>
            </TouchableOpacity>    
        )}/>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 5,
    color: '#474747',
  },
  iconAdd:{
    textAlign: 'center',
    marginBottom: 15,  
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
});