import Deployer from 'aeweb/commands/deploy.js'


import core from '@actions/core'



const handler = async function () {

  try {
    // retrieve the input parameters
    const endpoint = core.getInput('endpoint');
    const path = core.getInput('path')
    const seed = core.getInput('seed');

    // Deploy using the aeweb library
    await Deployer.handler({endpoint, path, seed});

  } catch (error) {
    throw e.message
  }
}



await handler()