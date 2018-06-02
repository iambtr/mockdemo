import mock, { Random } from 'mockjs'
import axios from 'axios'

let str=Random.string()
let data=mock.mock({
    "name":Random.cname(),
    "age|1-30":13,
    "address":Random.county(),
    "token":Random.guid(),
    "personId":Random.id(),
    "email":Random.email(),
    "ip":Random.ip(),
    "des":Random.csentence( 5, 30 ),
    "content":Random.cparagraph(50,200),
    "password":Random.word(6,15),
    "avator":Random.dataImage('100x100','icon'),
    "createAt":Random.datetime(),
    "updateAt":Random.now(),
    "sex|1":0
})

mock.mock(/\/user*/,'get',function(params){
    console.log('收到3',params)
    /**
     * 收到3 body 数据
        {url: "/user?ID=12345", type: "GET", body: null}
     */
    return data
})

window.onload=function(){
    let btn=document.querySelector('.btn')
    
    btn.onclick=function(){
       
    }
    axios.get('/user',{
        params: {
            ID: 12345
        },
        // `headers` 是即将被发送的自定义请求头
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    .then(res=>{
        // {data: {数据对象}, status: 200, statusText: "OK", headers: {…}, config: {请求体}, request （xml请求实例）}
        console.log('成功',res.data)
    })
    .catch(err=>{
        console.log('失败',err)
    })
}
