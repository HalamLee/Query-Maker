import { API } from "../constant/Constant";
import Axios from "axios";

type Param = undefined | string | {};

export async function useAPI(apiName: keyof typeof API.INFO, apiParam?: Param) {
  const apiInfo = API.INFO[apiName];
  console.log(API.BASE + apiInfo.PATH);

  const API_TYPE = apiInfo.TYPE as "post" | "get";
  return await Axios[API_TYPE](API.BASE + apiInfo.PATH, apiParam);
}
