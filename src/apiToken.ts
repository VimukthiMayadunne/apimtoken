export{}
var request = require("request");
var Base64 = require('js-base64').Base64;


async function sendRequest(data:any){
    return new Promise(async function(resolve,reject){
        try{
        request(data,async function (error: string | undefined, response: any, body: any) {
            if (error){
                reject(error)
                console.log(body)
            }
            console.log(body)
            resolve(body);
          });
        }
        catch(error){
            console.error(error)
            reject(error)
        }  
    })
}

async function getCredintials(uri:string,username:string,password:string,scopes:string){

    let baseAuth = await decode(username,password)
    let options = { method: 'POST',
    url: uri+'/client-registration/v0.15/register',
    headers: 
    {
        Connection: 'keep-alive',
        Host: 'localhost:9443',
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: baseAuth },
    body: 
    {   callbackUrl: 'www.google.lk',
        clientName: 'rest_api_publisher',
        owner: 'admin',
        grantType: 'password refresh_token',
        saasApp: true },
    json: true };
    
    return new Promise(async function(resolve,reject){
        try{ 
            var body:any = await sendRequest(options)
            var rslt = await getToken(username,password,body.clientId,body.clientSecret,'password',uri,scopes)
            resolve(rslt);
        }
        catch(err){
            console.error(err)
        }
    })
}

async function getToken(username:string,password:string ,ck:string , cs:string ,gType:string,uri:string,scopes:string){
    var Auth = await decode(ck,cs)
    var ip = uri.split(":")
    let options = { method: 'POST',
    url: ' https:'+ip[1]+':8243/token',
  headers: 
   {
     Connection: 'keep-alive',
     'Content-Type': 'application/x-www-form-urlencoded',
     Host: 'localhost:8243',    
     Accept: 'application/json',
     Authorization: Auth },
  form: 
   { grant_type: gType,
     username: username,
     password: password ,
     scope: scopes } };
    return new Promise(async function(resolve,reject){
        try{

            var body:any = await sendRequest(options)
            var filed=await JSON.parse(body)
            //console.log("Token : ",filed)
            resolve(filed.access_token)
        }
        catch(err){
            console.error(err)
            reject(err)
        }
    })
}

async function decode(ck:string, cs:string) {
    var str1 = ck;
    var str2 = cs;
    var str3 = str1 + ":" + str2;
    var encodedString = Base64.encode(str3)
    return "Basic " + encodedString;
}

module.exports={getCredintials}


