import React, { FC, useEffect, useRef } from "react"
import s from './contactNow.module.scss'
import { Formik, Form, Field } from "formik"
import { coordinatesOfSectionsType } from "../../App"
import { contactAPI } from "../../API/API"
import { ruText } from "../../commons/textData/ru"
import { engText } from "../../commons/textData/eng"
import useLanguage from "../../hooks/useLanguage"
import { maxLengthVC } from "../../commons/validators/validators"


const ContactNow: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
    const contactNowRef = useRef<HTMLElement>()

	const phoneMask = () => {
        const phoneInput = document.querySelectorAll('input[data-tel-input]')
        const getInputNumbersValue = function(input: HTMLInputElement){
            return input.value.replace(/\D/g, "")
        }
        const onPhoneInput = function(e: any){
            let input = e.target
            let inputNumbersValue = getInputNumbersValue(input)
            let formattedInputValue = ''
            let selectionStart = input.selectionStart
            if(!inputNumbersValue){
                return input.value = ""
            }

            if(input.value.length != selectionStart){
                if(e.data && /\D/g.test(e.data)){
                    input.value = inputNumbersValue
                }
                return
            }

            if(['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1){
                if(inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue
                let firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7'
                formattedInputValue = firstSymbols + ' '
                if(inputNumbersValue.length > 1){
                    formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
                }
                if( inputNumbersValue.length >= 5 ){
                    formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
                }
                if( inputNumbersValue.length >= 8 ){
                    formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
                }
                if( inputNumbersValue.length >= 10 ){
                    formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
                }
            }else{
                formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
            }
            input.value = formattedInputValue
        }
        const onPhoneKeyDown = (e: any) => {
            let input = e.target
            if(e.keyCode == 8 && getInputNumbersValue(input).length == 1){
                input.value = ''
            }
        }
        for (let i = 0; i < phoneInput.length; i++) {
            let input = phoneInput[i]
            input.addEventListener("input", onPhoneInput)
            input.addEventListener("keydown", onPhoneKeyDown)
        }
    }
    document.addEventListener("input", phoneMask)

    
    // @ts-ignore
    const { language, setLanguage } = useLanguage()

    const maxLength30 = maxLengthVC(5) 

    useEffect(() => {
        // @ts-ignore
        setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
          // @ts-ignore
          return {...coordinatesOfSections, contactNow: contactNowRef.current.getBoundingClientRect().top }
        })
      }, [])


    const submit = ( values: valuesType, { setSubmitting }: submitType) => {

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
            <h2>{ language === 'Ru' ? ruText.contactNow.header : engText.contactNow.header }</h2>
            <div className={s.container}>
                <Formik initialValues={{ name: '', email: '', phone: '', message: '' }} onSubmit={submit}>
                {({errors, touched, isValidating, isSubmitting}) => (
                    
                        <Form className={s.contact__forms}>
                            <div className={s.contact__row_one}>
                                <Field name='name' placeholder={ language === 'Ru' 
                                                        ? ruText.contactNow.placeholders.name 
                                                        : engText.contactNow.placeholders.name 
                                                    } 
                                    id={errors.name && touched.name ? s.contact__name_error : s.contact__name}
                                    validate={maxLength30} 
                                    title={errors.name && touched.name && errors.name}/>
                                <Field type="email" name='email' placeholder={ language === 'Ru' 
                                                        ? ruText.contactNow.placeholders.email
                                                        : engText.contactNow.placeholders.email 
                                                    } 
                                    id={errors.email && touched.email ? s.contact__email_error : s.contact__email}
                                    validate={maxLength30}
                                    title={errors.email && touched.email && errors.email}/>
                            </div>
                            <div className={s.contact__row_two}>
                                <Field data-tel-input type='tel' name='phone' placeholder={ language === 'Ru' 
                                                        ? ruText.contactNow.placeholders.phone 
                                                        : engText.contactNow.placeholders.phone 
                                                    } 
                                    id={errors.phone && touched.phone ? s.contact__phone_error : s.contact__phone}/>
                            </div>
                            <div className={s.contact__row_three}>
                                <Field name='message' placeholder={ language === 'Ru' 
                                                        ? ruText.contactNow.placeholders.message 
                                                        : engText.contactNow.placeholders.message
                                                    }  
                                    component='textarea'
                                    id={errors.message && touched.message ? s.contact__message_error : s.contact__message}
                                />         
                            </div>
                            <button type="submit" className={s.send__button}>
                                { language === 'Ru' ? 'Отправить' : 'Send' }
                            </button>
                        </Form>
                    )}
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