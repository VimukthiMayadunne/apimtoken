import { Command, flags } from "@oclif/command";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const apiToken = require("./apiToken");
const getVersion = require("./getVersion");

class Apimtoken extends Command {
  static description = "Single line CLI to get an accses token from Wso2-API_M";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    scopes: flags.string({
      char: "s",
      description: "Scopes required to be genarated"
    }),
    uri: flags.string({ char: "u", description: "URL for the wso2 API-M" }),
    username: flags.string({ char: "n", description: "User Name" }),
    password: flags.string({ char: "p", description: "Password" }),
    apimversion: flags.string({ char: "a", description: "API-M Version" })
  };
  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Apimtoken);
    const scopes = flags.scopes;
    const uri = flags.uri || "https://localhost:9443";
    const userName = flags.username;
    const password = flags.password;
    const apimV = flags.apimversion || "3.1";
    const apimVersion = await getVersion.getVersionNumber(parseFloat(apimV));
    var rslt = await apiToken.getCredintials(
      uri,
      userName,
      password,
      scopes,
      apimVersion
    );
    var key = "Bearer " + (await rslt);
    console.log(key);
  }
}

export = Apimtoken;
