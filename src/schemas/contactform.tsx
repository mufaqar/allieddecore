import * as Yup from 'yup';


export const contactform = Yup.object({
    name: Yup.string().required("Please add your name here"),
    email: Yup.string().required("Please add your email here"),
    phone: Yup.string().required("Please add your number here"),
    services: Yup.string().required("Please select a service"),   
})