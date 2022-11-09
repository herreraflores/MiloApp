import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ;
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        {/*Today's Tasks */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>  
        {/*TASKS HERE*/}
          <Task />
        </View>
          
      </View>
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8bd9a',
    
  },
  tasksWrapper: { 
    paddingTop: 60,
    paddingHorizontal: 20, 

  },
  
    
  sectionTitle: { 
    fontSize: 34,
    fontWieght: 'bold'


  },
  items: {},
});
