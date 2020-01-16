import * as fs from 'fs'
import { ConfigType } from './ConfigType'

/**
 * Global configuration object.
 *
 * Initialized when only process startup.
 * The configurations are based on `default.json` and that override by other data sources you defined via environment variables.
 */
class Config {
  private static config: ConfigType | null = null
  private static async loadConfig(): Promise<ConfigType> {
    const isDevelopment = 'development' == process.env.NODE_ENV
    const privateKey = process.env.BFF_PRIVATE_KEY_PEM_STRING
    const publicKey = process.env.BFF_PUBLIC_KEY_PEM_STRING

    // load default config from the file.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let defaultConfig = require('./default.json')

    if (isDevelopment) {
      // load development config from the file that mounted by docker-compose.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const devConfig = require('/data/config/bff/config.json')
      defaultConfig = { ...defaultConfig, ...devConfig }
    }

    const configMerged = {
      isDevelopment,
      privateKey,
      publicKey,
      ...defaultConfig
    }

    console.log(
      `💽 Loaded the configuration: version: %s, baseVersion: %s`,
      configMerged.version,
      configMerged.baseVersion
    )

    if (isDevelopment) {
      // for TypeORM CLI
      fs.writeFileSync('ormconfig.json', JSON.stringify(configMerged.db))
    }

    return Object.freeze(configMerged)
  }
  static async getConfig(): Promise<ConfigType> {
    if (!this.config) {
      this.config = await this.loadConfig()
    }
    return this.config
  }
}

export default Config
