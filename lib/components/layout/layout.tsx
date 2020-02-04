import React, { ReactElement } from 'react'
import { scopedClassMaker } from '../../utils/classes'
import './layout.scss'
import Sider from './sider'


const sc = scopedClassMaker('va-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}

const Layout : React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    const children = props.children as Array<ReactElement>
    const hasSider = 'length' in children && children.reduce((result, node) => result || node.type === Sider, false)

    return(
        <div className={sc({'':true,hasSider},{extra:className})} {...rest}> 
            {props.children}
        </div>
    )
}

export default Layout
export {Layout}
export {default as Header}  from './header'
export {default as Sider}  from './sider'
export {default as Content}  from './content'
export {default as Footer}  from './footer'