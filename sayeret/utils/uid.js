import uuid from 'react-native-uuid';

export const generateUniqueId=()=>{
    return uuid.v4();
}