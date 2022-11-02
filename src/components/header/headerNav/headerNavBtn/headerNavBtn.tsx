import React from "react"
import s from './headerNavBtn.module.scss'
import cnBind from 'classnames/bind'
import useTheme from "../../../../hooks/useTheme"



const HeaderNavBtn: React.FC<propsType> = ({ adaptiveMenuActive, setAdaptiveMenuActive }) => {
    // @ts-ignore
    const { type, setType } = useTheme()
    const cx = cnBind.bind(s)

    return (
        <button className={cx('headerNav__btn', {
            light: type === 'Light',
            dark: type === 'Dark',
            })}
            onClick={() => setAdaptiveMenuActive(!adaptiveMenuActive)}>
            <span></span>
        </button>
    )
}

export default HeaderNavBtn


interface propsType {
    adaptiveMenuActive: boolean
    setAdaptiveMenuActive: (adaptiveMenuActive: boolean) => void
}