import process from 'node:process'
import yargs from 'yargs'
import colors from 'picocolors'
import { hideBin } from 'yargs/helpers'
import { version } from '../package.json'
import initCommand from './commands/init'

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .scriptName('james-cli-template')
  .command('say [name]', 'start the server', (yargs) => {
    return yargs
      .positional('name', {
        describe: 'name to bind on',
        default: 'GolderBrother',
      })
  }, (argv) => {
    if (argv.name)
      process.stdout.write(`Hello ${colors.green(argv.name)}!\n`)
  })
  .command('init [param2]', '在项目里初始化一个配置文件', (yargs) => {
    return yargs
      .positional('param2', {
        describe: 'Parameter for command 2',
        default: 'defaultValue',
      })
  }, initCommand)
  .showHelpOnFail(true)
  .alias('h', 'help')
  .version('version', version)
  .alias('v', 'version')
  .help()
  .argv
