import Config from 'config'
import express from 'express'

async function start(): Promise<void> {
  const config = await Config.getConfig()
  const app = express()
  app.set('port', config.server.port)
  app.listen(app.get('port'), () => {
    console.log(
      `⚡ App is running at :%d in %s mode`,
      app.get('port'),
      app.get('env')
    )
    console.log('  Press CTRL-C to stop' + '\n')
  })
}
start()
