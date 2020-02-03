import classes from '../classes.tsx'
import {scopedClassMaker} from '../classes.tsx'
//const classes = require('../utils/classes.tsx')
describe('classes',()=>{
    it('接受一个className',()=>{
        const  result = classes('a')
        expect(result).toEqual('a')
    })

    it('接受2个以上className',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })

    it('接受各种奇怪的值',()=>{
        const result = classes('中文')
        expect(result).toEqual('中文')
    })
})

describe('scopedClassMaker',()=>{
    it('接受字符串或对象',() => {
        const sc = scopedClassMaker('va-layout')
        expect(sc('')).toEqual('va-layout')
        expect(sc('x')).toEqual('va-layout-x')
        expect(sc({y:true, z:false})).toEqual('va-layout-y')
        expect(sc({y:true, z:true})).toEqual('va-layout-y va-layout-z')
        expect(sc({y:true, z:true}, {extra: 'red'})).toEqual('va-layout-y va-layout-z red')
    })
})