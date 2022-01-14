import { data } from '../mock';
import { MockProps } from '../types';

const MockToJson = () => {
  const generateDataFromMock = (n: MockProps, m: string) => {
    var o: { [index: string]: any } = {};
    n.forEach((a) => {
      if (o[a.id] && o[a.id].children) {
        a.children = o[a.id].children;
      }
      o[a.id] = a;
      o[a.parentId] = o[a.parentId] || {};
      o[a.parentId].children = o[a.parentId].children || [];
      o[a.parentId].children.push(a);
    });
    return o[m].children;
  };

  const tree = Object.keys(data).reduce((r: any, k) => {
    r[k] = generateDataFromMock(data[k], '0');
    return r;
  }, {});
  console.log(tree);

  return <div></div>;
};

export default MockToJson;
