apimtoken
=========

single line API to get an accses token from API_M

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/apimtoken.svg)](https://npmjs.org/package/apimtoken)
[![Downloads/week](https://img.shields.io/npm/dw/apimtoken.svg)](https://npmjs.org/package/apimtoken)
[![License](https://img.shields.io/npm/l/apimtoken.svg)](https://github.com/VimukthiMayadunne/apimtoken/blob/master/package.json)

<!-- toc -->
* [Pre-requisite](#pre-requisite)
* [Installation](#installation)
* [Runnig the Cli-Tool](#runnig-the-cli-tool)
<!-- tocstop -->


# Pre-requisite 
- node.js
- wso2-APIM 3.0.0 +



# Installation
You can install `apimtoken` either through `npm` or by cloning the code from this GitHub repo.  This README covers the installation steps with `npm`.


1) Run the following command  in the terminal 

```bash
$ npm install -g apimtoken
```

         
# Runnig the Cli-Tool

Make sure Wso2 API manager is up and running 

Then run the following command to retrive an accsess token 

#### Example

```bash
$ apimtoken -s={scopes} -n={username} -p={password} -u=https://10.100.5.244:9443 
```

Credits - oclif framework  https://oclif.io
