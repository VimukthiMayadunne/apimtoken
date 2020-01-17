import {Command, flags} from '@oclif/command'


process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const apiToken = require('./apiToken');



class Apimtoken extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    scopes: flags.string({char: 's', description: 'Scopes required to be genarated'}),
    uri: flags.string ({char: 'u', description: 'URL for the wso2 API-M'}),
    username: flags.string ({char: 'n', description: 'User Name'}),
    password: flags.string ({char: 'p', description: 'Password'}),
  }
  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Apimtoken)
    const scopes = flags.scopes
    const uri = flags.uri || 'https://localhost:9443'
    const userName = flags.username 
    const password = flags.password 
    var rslt=await apiToken.getCredintials(uri,userName,password,scopes);
    var key = 'Bearer '+await rslt
    console.log(key)
  }
}

export = Apimtoken
