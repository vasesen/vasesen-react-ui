import React from 'react'
import { scopedClassMaker } from '../../utils/classes'
import './layout.scss'



const sc = scopedClassMaker('va-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
}
const Footer : React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    return(
        <div className={sc('footer',{extra:className})} {...rest}> 
            {props.children}
        </div>
    )
}

export default Footer