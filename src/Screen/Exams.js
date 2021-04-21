import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

const Exams = ({ navigation }) => {
    let examList = []
    for (let i = 0; i < 10; ++i) examList.push(`Exam ${i + 1}`);
    const selected = () => {
        navigation.navigate('SettingTraining');
    }
    return (
        <View style={styles.container}>
            {
                examList.map((item, index) => <TouchableHighlight
                    key={index}
                    style={styles.selectedButton}
                    onPress={() => selected()}
                    underlayColor={'#909'}
                >
                    <Text style={styles.nameExams} >{item}</Text>
                </TouchableHighlight>)
            }

        </View>
    )
}

export default Exams

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-around'
    },
    selectedButton: {
        backgroundColor: '#707',
        width: 150,
        height: 50,
        borderRadius: 10
    },
    nameExams: {
        fontSize: 28,
        textAlign: 'center'
    }
})
