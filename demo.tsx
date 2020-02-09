import * as React from 'react';
import Highlight,{ defaultProps } from "prism-react-renderer";

interface Props {
    code:string;
}

const Demo:React.FunctionComponent<Props> = (props)=>{
    const [codeVisible,setCodeVisible] = React.useState(false)
    const visibleDiv = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
    return(
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <button onClick={()=> setCodeVisible(!codeVisible)} >查看代码</button>
                {codeVisible && visibleDiv}
            </div>             
        </div>
    )
}

export default Demo