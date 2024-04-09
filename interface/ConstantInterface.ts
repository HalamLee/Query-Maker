export interface API_INTERFACE {
  BASE: string
  INFO: {
    [key: string]: {
      PATH: string
      TYPE: 'get' | 'post' | 'put' | 'delete'
    }
  }
}
