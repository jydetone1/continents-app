export const data: { [index: string]: any } = {
  People: [
    { id: '12', parentId: '0', text: 'Man', level: '1', children: null },
    { id: '6', parentId: '12', text: 'Boy', level: '2', children: null },
    { id: '7', parentId: '12', text: 'Other', level: '2', children: null },
    { id: '9', parentId: '0', text: 'Woman', level: '1', children: null },
    { id: '11', parentId: '9', text: 'Girl', level: '2', children: null },
  ],
  Animals: [
    { id: '5', parentId: '0', text: 'Dog', level: '1', children: null },
    { id: '8', parentId: '5', text: 'Puppy', level: '2', children: null },
    { id: '10', parentId: '13', text: 'Cat', level: '1', children: null },
    { id: '14', parentId: '13', text: 'Kitten', level: '2', children: null },
  ],
};
