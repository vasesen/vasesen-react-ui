import classes from '../classes.tsx'
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

    // it('接受0个参数',()=>{
    //     const result = classes()
    //     expect(result).toEqual()
    // })

    it('接受各种奇怪的值',()=>{
        const result = classes('中文')
        expect(result).toEqual('中文')
    })
})