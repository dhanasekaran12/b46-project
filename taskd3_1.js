
//JSON for loop
let jsondb =[{
    "id" : "1", 
    "msg"   : "hi",
    "from": "frnd1"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "from":"frnd2"
},{
    "id" : "3", 
    "msg"   : "hi frnd",
    "from": "frnd3"
}];

for(let i = 0; i < jsondb.length; i++) {
    let db = jsondb[i];

    console.log(db);
}

