import IconExample from './icon.example'
import Demo from '../../../../demo';
import React from 'react';
//const sourceCode = require('!!raw-loader!./icon.example.tsx')

 const IconDemo = () =>{
    const code = `
    <Icon name="dianzan"/>
    <Icon name="dashboard"/>
    <Icon name="message"/>`
    return (
        <Demo code={code}>
            <IconExample/>
        </Demo>
    )
}
export default IconDemo