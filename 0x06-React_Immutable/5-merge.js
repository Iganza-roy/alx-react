import { List, Map } from 'Immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  const merge = map1.merge(map2);
}
