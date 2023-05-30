import { useCallback, useState } from 'react'
import styles from "../styles/Navigation.module.css"
import { Heart, Avatar, Cart } from './Icons'

import SvgIcon from './SvgIcon'
import { Spacer } from '@geist-ui/core'

export default function Navigation() {
    return <div className={styles.nav}>
                <SvgIcon icon={Heart}/>
                <Spacer h={.5} />

                <SvgIcon icon={Avatar}/>
                <Spacer h={.5} />

                <SvgIcon icon={Cart}/>
            </div>
}