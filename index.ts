import { of, map, interval, take, from, concatAll } from 'rxjs';

const printObserver = console.log;

const firstOrderObs = of('A', 'B', 'C');
console.log(firstOrderObs);
// firstOrderObs.subscribe(printObserver);

const highOrderObs = of(firstOrderObs, firstOrderObs, firstOrderObs);
const flatternedObs = highOrderObs.pipe(concatAll());

console.log(highOrderObs);
console.log(flatternedObs);
// flatternedObs.subscribe(printObserver);

// const downloadUrlContent = (url) => {
//   return new Promise((resolve) => resolve(url + '_iamimage'));
// };

// const test = from(urls).pipe(map((url) => url + 'dwdd'));
// test.subscribe(printObserver);

// const obs = from(urls).pipe(map((url) => from(downloadUrlContent(url))));
// obs.subscribe(printObserver);
// console.log(obs);
