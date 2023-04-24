import Config from 'react-native-config';

export enum EnvType {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod'
}

type EnvVars = Record<EnvType, string>;

class ApiManager {
  /**
   * Retorna a URL base correspondente ao ambiente especificado.
   * @param envType O tipo de ambiente.
   * @returns A URL base correspondente ao ambiente especificado.
   */
  static getUrlBase(envType: EnvType): string {
    const envVars: EnvVars = {
      [EnvType.DEV]: Config.API_BASE_DEV,
      [EnvType.TEST]: Config.API_BASE_TEST,
      [EnvType.PROD]: Config.API_BASE_PROD
    };

    // Verifica se a chave do enum passada é válida para evitar retornar valores undefined ou inesperados.
    if (!(envType in envVars)) {
      throw new Error(`Environment type "${envType}" is not valid.`);
    }

    return envVars[envType];
  }

  /**
   * Retorna a chave da API.
   * @returns A chave da API.
   */
  static getApiKey(): string {
    return Config.API_KEY;
  }
}

export default ApiManager;
