const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
 const result = await db.insert(
    [
        {name:'iPhone 14',brand:'apple',price:70000,category:'mobile'},
        {name:'iPhone 13',brand:'apple',price:60000,category:'mobile'},
        {name:'iPhone 12',brand:'apple',price:40000,category:'mobile'},
    ]
 );
if(result.acknowledged)
{
    console.log("data inserted")
}
}

 insert();