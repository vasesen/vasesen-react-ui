import React from 'react'
import { scopedClassMaker } from '../../utils/classes'



const sc = scopedClassMaker('va-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
}
const Header: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    return(
        <div className={sc('header',{extra:className})} {...rest}> 
            {props.children}
        </div>
    )
}

export default Header