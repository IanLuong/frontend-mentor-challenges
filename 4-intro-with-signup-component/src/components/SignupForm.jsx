import { useState } from "react"

const SignupForm = () => {

  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormDetails(prevForm => ({...prevForm, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted')
  }

  return (
    <form className="bg-white rounded-xl shadow-xl p-4" onSubmit={handleSubmit}>
      <input type='text' placeholder="First Name" name='firstName' value={formDetails.firstName} onChange={handleChange}/>
      <input type='text' placeholder="Last Name" name='lastName' value={formDetails.lastName} onChange={handleChange}/>
      <input type='text' placeholder="Email Address" name='email' value={formDetails.email} onChange={handleChange}/>
      <input type='password' placeholder="Password" name='password' value={formDetails.password} onChange={handleChange}/>
      <button>CLAIM YOUR FREE TRIAL</button>
      <p>By clicking the button, you are agreeing to our <span className="text-customRed hover:underline hover:cursor-pointer">Terms and Services</span></p>
    </form>
  )
}

export default SignupForm