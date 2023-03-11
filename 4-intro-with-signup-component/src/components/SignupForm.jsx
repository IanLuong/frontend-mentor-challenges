import { useEffect, useState } from "react"

const SignupForm = () => {

  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })

// .match(/\w+@\w+(.\w+)+/)

  useEffect(() => {

  }, [formDetails])

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormDetails(prevForm => ({...prevForm, [name]: value}))
  }

  const handleSubmit = (target) => {
    event.preventDefault()
    console.log(target)
    console.log('Submitted')
  }

  return (
    <form className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-5 font-semibold" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <input className={`border ${formDetails.firstName ? 'border-grayBlue' : 'border-customRed border-2'} rounded-md p-4 w-full`} type='text' placeholder="First Name" name='firstName' value={formDetails.firstName} onChange={handleChange} />
        {errors.firstName && <p className="text-right italic text-customRed text-[.7rem]">First Name cannot be empty</p>}
        <input className={`border ${formDetails.lastName ? 'border-grayBlue' : 'border-customRed border-2'} rounded-md p-4 w-full`} type='text' placeholder="Last Name" name='lastName' value={formDetails.lastName} onChange={handleChange}/>
        {errors.lastName && <p className="text-right italic text-customRed text-[.7rem]">Last Name cannot be empty</p>}
        <input className={`border ${formDetails.email.match(/\w+@\w+(.\w+)+/) ? 'border-grayBlue' : 'border-customRed border-2'} rounded-md p-4 w-full`} type='email' placeholder="Email Address" name='email' value={formDetails.email} onChange={handleChange}/>
        {errors.email && <p className="text-right italic text-customRed text-[.7rem]">Looks like this is not an email</p>}
        <input className={`border ${formDetails.password ? 'border-grayBlue' : 'border-customRed border-2'} rounded-md p-4 w-full`} type='password' placeholder="Password" name='password' value={formDetails.password} onChange={handleChange}/>
        {errors.password && <p className="text-right italic text-customRed text-[.7rem]">Password cannot be empty</p>}
      </div>
      <button disabled={!Object.values(formDetails).every(val => val)} className="p-5 bg-customGreen rounded-md shadow-xl text-white text-base tracking-wider hover:cursor-pointer enabled:hover:bg-darkerGreen disabled:cursor-default disabled:opacity-70">CLAIM YOUR FREE TRIAL</button>
      <p className="text-center w-4/5 self-center text-grayBlue text-xs">By clicking the button, you are agreeing to our <span className="text-customRed hover:underline hover:cursor-pointer">Terms and Services</span></p>
    </form>
  )
}

export default SignupForm