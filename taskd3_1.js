
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

//JSON for in loop
var json = {
    "one": [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
 };
 for(var key in json.jsonData) {{
        console.log(json.jsonData[key])
    }
 }