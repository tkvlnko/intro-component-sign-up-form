import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("this is a required field"),
    firstName: yup.string().max(30, "input is too long").required("this is a required field"),
    lastName: yup.string().max(30, "input is too long"),
    password: yup.string().min(5).matches(passwordRules, "please create a stronger password").required("this is a required field")
})