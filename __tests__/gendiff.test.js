import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import gendiff from '../src/gendiff.js';
import parse from '../src/parsers.js';
import showDiff from '../src/show.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PathToFix = (file) => path.join(__dirname, '..', '__fixtures__', file);

test('json', () => {
  const path1 = PathToFix('file1.json');
  const path2 = PathToFix('file2.json');

  const diffObj = gendiff(parse(path1), parse(path2));
  const result = showDiff(diffObj);
  expect(result).toMatchSnapshot();
});

test('yaml', () => {
  const path1 = PathToFix('file1.yml');
  const path2 = PathToFix('file2.yml');

  const diffObj = gendiff(parse(path1), parse(path2));
  const result = showDiff(diffObj);
  expect(result).toMatchSnapshot();
});
