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
    <form className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-5 font-semibold" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <input className="border border-grayBlue rounded-md p-4 w-full" type='text' placeholder="First Name" name='firstName' value={formDetails.firstName} onChange={handleChange}/>
        <input className="border border-grayBlue rounded-md p-4 w-full" type='text' placeholder="Last Name" name='lastName' value={formDetails.lastName} onChange={handleChange}/>
        <input className="border border-grayBlue rounded-md p-4 w-full" type='text' placeholder="Email Address" name='email' value={formDetails.email} onChange={handleChange}/>
        <input className="border border-grayBlue rounded-md p-4 w-full" type='password' placeholder="Password" name='password' value={formDetails.password} onChange={handleChange}/>
      </div>
      <button className="p-5 bg-customGreen rounded-md shadow-xl text-white text-base tracking-wider">CLAIM YOUR FREE TRIAL</button>
      <p className="text-center w-4/5 self-center text-grayBlue text-xs">By clicking the button, you are agreeing to our <span className="text-customRed hover:underline hover:cursor-pointer">Terms and Services</span></p>
    </form>
  )
}

export default SignupForm