import { of, map, interval, take, from, concatAll } from 'rxjs';

// const obs = interval(1000).pipe(take(5))
// obs.subscribe(console.log)
const printObserver = console.log;

const urls = ['urlA', 'urlB', 'urlC'];

// const downloadUrlContent = (url) => {
//   return new Promise((resolve) => resolve(url + '_iamimage'));
// };

// const test = from(urls).pipe(map((url) => url + 'dwdd'));
// test.subscribe(printObserver);

// const obs = from(urls).pipe(map((url) => from(downloadUrlContent(url))));
// obs.subscribe(printObserver);
// console.log(obs);

const simpleObs = of('A', 'B', 'C');
// console.log(simpleObs)
simpleObs.subscribe(printObserver);

const highOrderObs = of(simpleObs, simpleObs, simpleObs);
const flatternedObs = highOrderObs.pipe(concatAll());
// console.log(highOrderObs)
flatternedObs.subscribe(printObserver);
