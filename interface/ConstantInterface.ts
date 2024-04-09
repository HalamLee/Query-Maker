type API_NAME = 'createTable' | 'createSelectQuery'

export interface API_INTERFACE {
  BASE: string
  INFO: {
    [key: string]: {
      PATH: string
      TYPE: 'get' | 'post' | 'put' | 'delete'
    }
  }
  ALIAS: {
    [key in API_NAME]: string
  }
}
