import './App.css';
import { useFormik } from "formik";
import { userSchema } from './validation/userSchema';

const onSubmit = async (values, actions) => {
  console.log("submitted")
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
}

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    },

    validationSchema: userSchema,
    onSubmit,
  })

  console.log(formik.errors)

  return (
    <div className='main'>
      <div className='content'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.</p>
      </div>
      <div className='sign-up'>
        <p><b>Try it free 7 days</b> then $20/mo. thereafter</p>
      <form onSubmit={formik.handleSubmit}>
        <input 
          name="firstName"
          value={formik.values.firstName} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          type="text" 
          placeholder="First Name" 
          id="firstname"
          className={formik.errors.firstName && formik.touched.firstName ? "input-error": ""}/>
        {formik.errors.firstName && formik.touched.firstName && <p className='error'>{formik.errors.firstName}</p>}

        <input 
          name="lastName"
          value={formik.values.lastName} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          type="text" 
          placeholder="Last Name" 
          id="lastname"
          className={formik.errors.lastName && formik.touched.lastName ? "input-error": ""}/>
        {formik.errors.lastName && formik.touched.lastName && <p className='error'>{formik.errors.lastName}</p>}


        <input 
          value={formik.values.email} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          type="text" placeholder="Email Address" 
          id="email"
          className={formik.errors.email && formik.touched.email ? "input-error": ""}/>
        {formik.errors.email && formik.touched.email && <p className='error'>{formik.errors.email}</p>}

        <input 
          value={formik.values.password} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          type="password" 
          placeholder="Password" 
          id="password"
          className={formik.errors.password && formik.touched.password ? "input-error": ""}/>
        {formik.errors.password && formik.touched.password && <p className='error'>{formik.errors.password}</p>}
        
        <div className='btn-submit'>
          <input type="submit" value="Claim your free trial" disabled={formik.isSubmitting}/>
          <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </div>
        
      </form>
      </div>
</div>
  );
}

export default App;
