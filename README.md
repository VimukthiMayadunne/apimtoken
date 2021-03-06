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
* [Development Guide](#development-guide)
<!-- tocstop -->


# Pre-requisite 
- node.js
- wso2-APIM 2.7 , 3.0 , 3.1 



# Installation
You can install `apimtoken` either through `npm` or by cloning the code from this GitHub repo.  This README covers the installation steps with `npm`.


1) Run the following command  in the terminal 

```bash
$ npm install -g apimtoken
```

         
# Runnig the Cli-Tool

Make sure Wso2 API manager is up and running 

Then run the following command to retrive an accsess token 

If you are using a version below 3.1 please metion the version under flag ex- -a=2.7

Run `apimtoken -h` for help

#### Example

```bash

$ apimtoken -s={ scopes } -n={ username } -p={ password } -u={ URL } -a={ apim Version }

$ apimtoken -s=apim:apim_create -n=admin -p=admin -u=https://10.100.5.244:9443 -a=3.1 

```

# Development Guide

Clone or download the repository

Run npm install to install all the required dependencies 


Credits - oclif framework  https://oclif.io
