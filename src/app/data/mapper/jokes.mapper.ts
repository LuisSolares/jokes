import { jokesInterface } from "../../interfaces/jokes.interface";
import { ApiResponseEntity } from "../entity/api-response.entity";

export class JokesMapper{
    public mapJokes(param: ApiResponseEntity<jokesInterface[]>): jokesInterface[] {
        return param.data;
    }
}