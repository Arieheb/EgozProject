import Calendar from "react-calendar";
import React, {useState} from "react";
import {View, Text} from "react-native";



// const viewCal = () => {
//   <CalendarHeader
// title={this.state.currentDate}
// onMovedDateYear={this.props.onMovedMonthYear}
// onDoubleLeftIconPressed={() => {
// this.showPreviousYear();
// }}
// onLeftIconPressed={() => {
// this.showPreviousMonth();
// }}
// onRightIconPressed={() => {
// this.showNextMonth();
// }}
// onDoubleRightIconPressed={() => {
// this.showNextYear();
// }}
// // style={{ backgroundColor: 'red' }}
// />
// }

// const CalendarModal = ({ showModel, cancelModel, onDayClick, plannedDate, onViewChange, CalendarEventCount }) => {
//   var CurrentDate = new Date(plannedDate).getDate();
//   var CurrentMonth = new Date(plannedDate).getMonth();
//   var CurrentYear = new Date(plannedDate).getFullYear();
//   return (
//   <Modal>
//     <Calendar style={styles.calendarStyle}
//     onDateSet={{ setDate: CurrentDate, setMonth:CurrentMonth, setyear: CurrentYear }}
//     onDatePressed={(date, month, year) => { onDayClick(date, month, year),cancelModel(false) }}
//     onMovedMonthYear={(data) => onViewChange(data)}
//     CalendarCount={CalendarEventCount}
//     />
//   </Modal>
//   )
//   }
//   showNextMonth() {
//     let currentDate = new Date(
//     this.state.currentDate.setMonth(this.state.currentDate.getMonth() + 1),
//     );
//     this.setState({
//     currentMonth: currentDate.getMonth(),
//     currentYear: currentDate.getFullYear(),
//     currentDate,
//     },()=>{
//     this.onMonthValueChanged(currentDate.getMonth(),currentDate.getFullYear())
//     });
//     }
//   showPreviousMonth() {
//       //show previous month
//       if (this.isDateIsLesser(this.state.currentDate, new Date())) {
//       return;
//       }
//       let currentDate = new Date(
//       this.state.currentDate.setMonth(this.state.currentDate.getMonth() - 1),
//       );
//       if (currentDate.getTime() < new Date().getTime) return;
//       this.setState({
//       currentMonth: currentDate.getMonth(),
//       currentYear: currentDate.getFullYear(),
//       currentDate,
//       },()=>{
//       this.onMonthValueChanged(currentDate.getMonth(),currentDate.getFullYear())
//       });
//       }
//   showNextYear() {
//         //show next year
//         let currentDate = new Date(
//         this.state.currentDate.setFullYear(
//         this.state.currentDate.getFullYear() + 1,
//         ),
//         );
//         this.setState({
//         currentMonth: currentDate.getMonth(),
//         currentYear: currentDate.getFullYear(),
//         currentDate,
//         },()=>{
//         this.onMonthValueChanged(currentDate.getMonth(),currentDate.getFullYear())
//         });
//         }
//   showPreviousYear() {
//           if (this.isDateIsLesser(this.state.currentDate, new Date())) {
//           return;
//           }
//           var given = this.state.currentDate; var current = new Date();
//           var givenYear = given.getFullYear(); var currentYear = current.getFullYear();
//           if (currentYear === givenYear - 1) {
//           this.setState({
//           currentMonth: new Date().getMonth(),
//           currentYear: new Date().getFullYear(),
//           currentDate: new Date()
//           },()=>{
//           this.onMonthValueChanged(this.state.currentMonth,this.state.currentYear)
//           });
//           return;
//           }
// export default viewCal;





































// // import {calendar, dataFnsLocalizer, dateFnsLocalizer} from "react-big-calendar";
// // import format from "date-fns/format";
// // import parse from "date-fns/parse";
// // import startOfWeek from "date-fns/startOfWeek";
// // import getDay from "date-fns/getDay";
// // import "react-big-calendar/lib/css/react-big-calander.css";
// import DatePicker from "react-datepicker";


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }
//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     return (
//       <View style={styles.container}>
//         <CalendarPicker
//           onDateChange={this.onDateChange}
//         />

//         <View>
//           <Text>SELECTED DATE:{ startDate }</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// }
// );





// const locales = {
//   "en-US": require ("date-fns/locale/en-US")
// }

// const localizer = dateFnsLocalizer({
//   format, parse, startOfWeek, getDay, locales
// })
 
// const EventCal = () => {
//   return (
//     <View>
//       <Calendar 
//         localizer = {localizer}
//         // events = {events}
//         startAccessor = "start"
//         endAccessor = "end"
//         style = {{height: 500, margin: "50px"}} />
//     </View>
//   );

// }

// function events() {
  
// }


//   const [date, setDate] = useState(new Date());
  
//     return (
//       <div className='app'>
//         <h1 className='text-center'>React Calendar</h1>
//         <div className='calendar-container'>
//           <Calendar onChange={setDate} value={date} />
//         </div>
//         <p className='text-center'>
//           <span className='bold'>Selected Date:</span>{' '}
//           {date.toDateString()}
//         </p>
//       </div>
//     );
  

  
