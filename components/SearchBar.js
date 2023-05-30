import { useCallback, useState } from 'react'


import { Input,Spacer } from '@geist-ui/core'

import { SearchIcon } from './Icons'
import SvgIcon from './SvgIcon'

export default function SearchBar() {
    const [search, setSearch] = useState("")
    return <Input style={{width:"300px"}} onChange={(e)=>setSearch(e.target.value)} iconRight={<SvgIcon icon={SearchIcon} />} placeholder="Search Items..." />
}

