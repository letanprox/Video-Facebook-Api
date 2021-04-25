const http = require("http");
const path = require("path");
const fs = require("fs");

var MongoClient = require('mongodb').MongoClient;
var urli = "mongodb://localhost:27017/";
MongoClient.connect(urli , { useUnifiedTopology: true } ,async function(err, db) {
    if (err) throw err;
    var dbo = await db.db("aidb");
    var dbo = await dbo.collection("danh_sach_linktap");

    for(let i = 801; i < 950; i++){
    await dbo.updateOne(
        {so_tap: i , so_phim: 3},
        {$set: { url_direct: 'https://kanda.xemtua.xyz/onepiece_tap_'+i+'.mp4' , url_embed:'false', thoi_gian: '2021/3/15 17:35:51'}},
        {upsert:true}
      )
    }
});