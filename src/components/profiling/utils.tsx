export const fetchDummyData = () => {
  const wait = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
  };

  return wait(3000).then(() => {
    return new Promise(resolve => {
      resolve({
        data: [
          {id: 'id1', name: 'title 1'},
          {id: 'id2', name: 'title 2'},
        ],
      });
    });
  });
};
