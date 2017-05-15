import Firestack from 'react-native-firestack'
// Initialize Firebase
const firebaseConfig = {
	debug: true,
  APIKey: "AIzaSyAPnYIAeeG8DPhio_WIGp4KwrPchDOUJyA",
  databaseURL: "https://gccvendormobile.firebaseio.com",
  storageBucket: "gccvendormobile.appspot.com",
  GCMSenderID: "117606118959"
};
const firestack = new Firestack(firebaseConfig).then(function(){
	export default firestack;
});



