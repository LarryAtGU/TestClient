import http from "../http-common";

import { Card } from "../App";

export class UserDataService {
    getAll() {
      return http.get<Array<Card>>("/");
    }
  
  
    create(data: Card) {
      return http.post<Card>("/", data);
    }
  
    delete(id: any) {
        return http.delete<any>(`/${id}`);
    }
    

  }
  
//  export default new UserDataService();