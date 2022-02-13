import React from 'react';
import { StyleSheet, TextInput, View, Image, Button} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form( {addArticle}) {
    return (
      <View>
        <Formik 
          initialValues={{name: '', anons: '', full: '', img: ""}}
          onSubmit={(values, action) => {
              console.log(values);
              addArticle(values);
              action.resetForm();
          }}>
            {(props) => (
                <View>
                    <TextInput
                        value={props.values.name}
                        placeholder='Enter text...'
                        onChangeText={props.handleChange('name')}
                        style={styles.textInput}
                    />
                    <TextInput
                        value={props.values.anons}
                        multiline
                        placeholder='Enter anons...'
                        onChangeText={props.handleChange('anons')}
                        style={styles.textInput}
                    />
                    <TextInput
                        value={props.values.full}
                        multiline
                        placeholder='Enter full text...'
                        onChangeText={props.handleChange('full')}
                        style={styles.textInput}
                    />
                    <TextInput
                        value={props.values.img}
                        placeholder='Enter img url...'
                        onChangeText={props.handleChange('img')}
                        style={styles.textInput}
                    />
                    <Button title='Add' onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
      </View>
    );
  }


const styles = StyleSheet.create({
    textInput:{
        width: '80%',
        height: 50,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: '10%',
        paddingLeft: 15,
    }
});