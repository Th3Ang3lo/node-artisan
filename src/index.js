import { makeController } from './subcommands/make:controller.js'
import { makeService } from './subcommands/make:service.js'

import { yellow, white, green, red } from './helpers/colors.js'

export async function cmd(args) {
  if(!args[0]) {
    console.log(`${yellow('Usage:')}`)
    console.log(`  ${white('node-artisan [options] [arguments]')}`)
    console.log(` `)
    console.log(yellow('Available Commands:'))
    console.log(`  ${green('make:controller')}    ${white('Create an controller.')}`)
    console.log(`  ${green('make:service')}       ${white('Create an service.')}`)
    // console.log(`  ${green('make:repository')}    ${white('Create an repository.')}`)
    return process.exit()
  }

  switch (args[0]) {
    case 'make:controller':
      await makeController(args.slice(1))
      break
    case 'make:service':
        await makeService(args.slice(1))
        break
    default:
      console.log(red(`OPS! The subcommand named \"${args[0]}\" not exists.`))
      break
  }

  process.exit()
}
