import React from 'react'
import "./icon.scss"
import "./importIcons.js"
import classes from  '../../utils/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string,
   //onClick:React.MouseEventHandler<SVGElement >
}

const  Icon:React.FunctionComponent<IconProps> = ({className,name,...otherProps}) => {
    return (
        <svg className={classes('va-icon', className)} {...otherProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Icon