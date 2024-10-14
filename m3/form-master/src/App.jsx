
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import Statefulform from './components/Statefulform/Statefulform'

function App() {

  // const handleSignUpSubmit = data =>{
    // e.preventDefault();
//     console.log('Sign up data', data);
// }
  // const handleUpdateProfile = data =>{
    // e.preventDefault();
//     console.log('Update profile', data)
// }


  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <Statefulform></Statefulform> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div><h1>Sgn up</h1><p>Please sign up right now</p></div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} 

      handleSubmit={handleUpdateProfile} 
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      
    </>
  )
}

export default App


