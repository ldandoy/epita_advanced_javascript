import React, {useContext} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import {ThemeContext} from '../contexts/themes'

const SwicherMode = () => {
    const [{ theme, isDark }, toogleTheme] = useContext(ThemeContext)
    
    return (
        <div className='swicher'>
            { isDark ?
                <FaSun onClick={toogleTheme} />
            :
                <FaMoon onClick={toogleTheme} />
            }
        </div>
    )
}

export default SwicherMode
