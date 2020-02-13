import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const reader = new MatchReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];

console.log("date of first match ", dateOfFirstMatch);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man united won: ' + manUnitedWins);
