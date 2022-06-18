import React, {useState} from 'react';
import { View,Modal,  Text, StyleSheet , ScrollView, Pressable, TouchableOpacity, Alert} from 'react-native';
import {db} from '../../firebase';
import HyperLink from 'react-native-hyperlink';
import {deleteDoc, doc } from 'firebase/firestore';


const EventTemplate = (props) => {
    const del = async(id)=>{
        Alert.alert(
            "למחוק?",
            "האם אתה בטוח שאתה רוצה למחוק את האירוע הזה?",
            [
              {
                text: "בטל",
                onPress: () => {return},
              },
              {
                text: "מחק",
                onPress: async () => {
                    await deleteDoc(doc(db, "events",id));
                },
            },
        ],
        );
      }
      const date = new Date(props.eventDate.toDate())
      const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity activeOpacity={0.9} onLongPress={()=>props.admin?del(props.id):null}>
            <View name = "main" style = {styles.container}>
                <View name = "short" style = {styles.shortView}>
                    <View name = "timeAndDate" style = {styles.timeAndDate}>
                        <Text style = {styles.timeText}>{props.eventTime} </Text>
                        <Text style = {styles.dateText}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
                    </View>

                    <View name= 'information' style = {styles.infoFrame} >
                        <Text style = {styles.titleText}>{props.eventName}</Text>
                        <Text style = {styles.infoText}>מיקום האירוע: {props.eventLocation}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.moreTextStyle}>קרא עוד</Text>

                        </Pressable>
                    </View>
                    
                </View>

                <Modal
                    animationType= "fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                
                <View style={styles.modalView}>                       
                    <ScrollView name = 'details' style = {{width: "98%"}}>
                        <Text style={styles.mainTitle}> {props.eventName}</Text>
                        <Text style= {styles.nameEdit}>מיקום: {props.eventLocation} </Text>
                        <Text style={styles.nameEdit}>ב {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} בשעה {props.eventTime}</Text>
                        <HyperLink linkDefault={true}>
                        <Text style = {styles.informationText}>פרטי האירוע: {props.eventInformation} </Text>
                        </HyperLink>
                        <Text style = {styles.infoText}>איש קשר: {props.eventContact} </Text>
                    </ScrollView>
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>הסתר</Text>
            </Pressable>
          </View>
        </Modal>
        </View>
        </TouchableOpacity>


);
}



                {/* <TouchableOpacity activeOpacity={0.9} onLongPress={()=>props.admin?del(props.id):null}>
                    <ScrollView>
                        <View name='main' style = {styles.eventFrame} >
                            <View name = 'date and time' style = {styles.dateTimeFrame}>
                                <Text style = {styles.timeText}>{props.eventTime} </Text>
                                <Text style = {styles.dateText}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>

                            </View> 
                            <View name= 'information' style = {styles.infoFrame}>
                                <Text style = {styles.infoText}> שם האירוע: {props.eventName} </Text>
                                <Text style = {styles.infoText}> מקום/כתובת: {props.eventLocation} </Text>
                                <HyperLink linkDefault={true}>
                                    <Text style = {styles.infoText}>פרטים נוספים: {props.eventInformation} </Text>
                                </HyperLink>
                                <Text style = {styles.infoText}> איש קשר: {props.eventContact} </Text>

                            </View>
                            
                        </View>
                        </ScrollView>    
                </TouchableOpacity> */}
            

export default EventTemplate

const styles = StyleSheet.create ({ 
    container: {
        alignItems: "center",
        margin: 5,
        width: "98%"
    },

    shortView: {
        width: '98%',
        alignItems: "center",
        padding: 7,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 25,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: "white",
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        },
        
    timeAndDate: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'column' ,
        width: '28%',
    },
    timeText: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        fontWeight: 'bold'
    },

    dateText: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'left'
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'left',
        margin: 3
    },
    infoFrame: {
        width: '70%',
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'center'
      },
      buttonOpen: {
        backgroundColor: 'lightgrey',
        borderRadius: 50,
        width: "50%",
        margin: 5,
        alignItems:'center',
      },

      buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 50,
        width: "50%",
        margin: 5,
        alignItems:'center',
      },

      eventFrame: {
        
    }, 

    modalView: {
        marginTop: '20%',
        marginHorizontal: '2.5%',
        width: '95%',        
        alignItems: "center",        
        margin: 20,
        maxHeight: "85%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    
    },

    mainTitle: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    
    nameEdit: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',        
    },
    informationText: {
        paddingTop: 10,
        fontWeight: "bold",
        fontSize: 17,
        textAlign: 'left',
        margin: 5,
        
    },
  
      textDesign: {
        textAlign: 'left',
      },
      
  
    //   topArea: {
    //     flexDirection: 'row',
    //     margin: 5,  
        
  
    //   },
    //   proPic: {
    //     padding: 10,     
    //   }, 
  
  
  
    //   centeredView: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 5,
    //     padding: 5,      
    //     borderRadius: 20,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 2,
    //       height: 2
    //     },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 4,
    //     elevation: 5,
        
    
  
    //   infoSection: {
    //     flex:1,
    //     margin: 5, 
    //     padding: 5,
    //   }, 
    
   
    //   textStyle: {
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: 'white',
        
    //   },
    //   moreTextStyle: {
    //     textAlign: 'center',
    //     textDecorationLine: 'underline',
    //           color: 'white'
  
    //   },
    //   modalText: {
    //     marginBottom: 15,
        
    //   },

    // headerText: {
    //     textAlign: 'center',
    //     fontSize: 25,
    //     margin: 5,
    // },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     padding: 15,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 2,
    //       height: 2
    //     },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 4,
    //     elevation: 5,
        
    //   },
  
    
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    //   },
    //   buttonOpen: {
    //     backgroundColor: 'lightgrey',
    //     borderRadius: 50,
    //     maxWidth:"98%",
    //     height:205,
    //     alignItems:'center',
    //     margin:5
    //   },
    //   textStyle: {
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: 'white',
        
    //   },
    //   moreTextStyle: {
    //     textAlign: 'center',
    //     textDecorationLine: 'underline',
    //           color: 'white'
  
    //   },
    

    
   
    
    // infoFrame: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     width: '72%'


        
    // },
    //  infoText: {
    //     textAlign: 'left',
    //     fontSize: 15,
    //     margin: 2,

    //  },    

    // buttonText: {
    //     textAlign: 'center',
    //     paddingTop: '40%',
    //     fontSize: 15
        
    // }




});