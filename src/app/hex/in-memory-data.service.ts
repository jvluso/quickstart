
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let messages = [
            {
                AName: 'Saphire Ruby Morgan McBombus',
                BName: 'Blood Wild Kagulichu',
                ARank: 1,
                BRank: 0,
                AWins: 122,
                BWins: 184
            },
            {
                AName: 'Saphire Wild Ivan Slagpot',
                BName: 'Blood Wild Kagulichu',
                ARank: 2,
                BRank: 0,
                AWins: 99,
                BWins: 81
            },
            {
                AName: 'Saphire Wild Ivan Slagpot',
                BName: 'Saphire Ruby Morgan McBombus',
                ARank: 2,
                BRank: 1,
                AWins: 80,
                BWins: 55
            },
            {
                AName: 'Ruby Angus the Arsonist',
                BName: 'Blood Wild Kagulichu',
                ARank: 3,
                BRank: 0,
                AWins: 66,
                BWins: 94
            },
            {
                AName: 'Ruby Angus the Arsonist',
                BName: 'Saphire Ruby Morgan McBombus',
                ARank: 3,
                BRank: 1,
                AWins: 63,
                BWins: 63
            },
            {
                AName: 'Ruby Angus the Arsonist',
                BName: 'Saphire Wild Ivan Slagpot',
                ARank: 3,
                BRank: 2,
                AWins: 36,
                BWins: 25
            }
         ];
        return {messages};
    }
    
}