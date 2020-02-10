import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// })
// .split('\n')
// .map((row: string): string[] => {
//   return row.split(',');
// });


enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man united won: ' + manUnitedWins);
