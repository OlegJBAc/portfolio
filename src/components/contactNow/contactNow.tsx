import React, { FC, useEffect, useRef } from "react"
import s from './contactNow.module.scss'
import { Formik, Form, Field } from "formik"
import { coordinatesOfSectionsType } from "../../App"
import { contactAPI } from "../../API/API"


const ContactNow: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
    const contactNowRef = useRef<HTMLElement>()
    useEffect(() => {
        // @ts-ignore
        setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
          // @ts-ignore
          return {...coordinatesOfSections, contactNow: contactNowRef.current.getBoundingClientRect().top }
        })
      }, [])


    const submit = (values: valuesType, { setSubmitting }: submitType) => {
        const valuesKeys = [ 'name', 'email', 'phone', 'message' ] as string[]
        setSubmitting(false)
        contactAPI.sendMessage(19897, JSON.stringify(values))
        valuesKeys.forEach(value => {
            // @ts-ignore
            return values[value] = ''
        })
    }


    return (
        // @ts-ignore
        <div ref={contactNowRef} className={s.contact}>
            <h2>Contact with me now</h2>
            <div className={s.container}>
                <Formik initialValues={{ name: '', email: '', phone: '', message: '' }} onSubmit={submit}>
                    <Form className={s.contact__forms}>
                        <div className={s.contact__row_one}>
                            <Field name='name' placeholder='Enter your name...' id={s.contact__email}/>
                            <Field type="email" name='email' placeholder='Enter your email...'/>
                        </div>
                        <div className={s.contact__row_two}>
                            <Field name='phone' placeholder='Enter your phone number...'/>
                        </div>
                        <div className={s.contact__row_three}>
                            <Field name='message' placeholder='Enter your message...' component='textarea'/>
                        </div>
                        <button type="submit" className={s.send__button}>Send</button>
                    </Form>
                </Formik>
            </div> 
        </div>
    )
}

export default ContactNow


interface propsType {
    sectionYCoordinate: number
    setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}
interface submitType {
    setSubmitting: (isSubmitted: boolean) => any
}
interface valuesType {
    name: string
    email: string
    phone: string
    message: string
}