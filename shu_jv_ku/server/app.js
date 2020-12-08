const express=require("express");
const bodyParser=require("body-parser")
const cors=require("cors");
const mysql=require("mysql");
const app=express();

app.listen(3000);
const pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    database:"xzqa",
    connectionLimit:20
});

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}));


app.get("/aaa",(a,b)=>{
    let sql="select id,category_name from xzqa_category";
    pool.query(sql,(aa,bb)=>{
        if(aa){};
        b.send({code:200,message:"查询成功",bb:bb});
    })
});

app.get("/aaa001",(a,b)=>{
    var aid=a.query.id;
    var page=a.query.page*20;
    let sql=`
    select id,subject,description,image 
    from xzqa_article where category_id=? limit ?`;
    pool.query(sql,[aid,page],(aaa,bbb)=>{
        if(aaa){};
        b.send({bbb:bbb});
    })
});

// 详情页
app.get("/touxiang",(a,b)=>{
    var aid=a.query.id;
    let sql=`
    select r.id,subject,content,created_at,nickname,avatar,article_number 
    from xzqa_article as r inner join xzqa_author as u 
    on author_id=u.id where r.id=?`;
    pool.query(sql,[aid],(aa,bb)=>{
        if(aa){};
        b.send({bb:bb[0]});
    })
});

app.get("/222",(a,b)=>{
    b.send({name:"虎骨",age:28,isLogined:1});
});