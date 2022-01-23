import {gql, request} from "graphql-request";
import moment from 'moment';

export function getDraw(){
    return new Promise((resolve, reject) => {
        const query = gql`query {
                response: draw(limit: 1, type: "eurojackpot") {
                  backendError
                  draws {
                    additionalNumbers
                    date
                    jackpot
                    numbers
                  }
                }
              }`;
        request("http://localhost:8010/proxy/graphql", query)
            .then((data: Object) => {
                resolve(data);
            })
            .catch(() => {
                reject(null);
            });
    });
}

export function getDate(date:String){
    if(date !== ""){
        let result = moment(date).locale('de').format('LL');
        return result
    }
    else{
        return date;
    }
};
