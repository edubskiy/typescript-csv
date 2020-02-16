import { MatchResult } from './matchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

// const reader = new MatchReader('football.csv');
// reader.read();
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const dateOfFirstMatch = matchReader.matches[0][0];

console.log("date of first match ", dateOfFirstMatch);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man united won: ' + manUnitedWins);
