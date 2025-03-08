export const generateStoreItems = (count) => {
  const itemList = [];

  for (let i = 0; i < count; i++) {
    const suggestedPrice = (Math.random() * 100 + 50).toFixed(2);
    const discount = (Math.random() * 30).toFixed(2);
    const actualPrice = (suggestedPrice * (1 - discount / 100)).toFixed(2);
    itemList.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Short description for Item ${i + 1}`,
      suggestedPrice,
      actualPrice,
      discount,
      image: `https://picsum.photos/id/${i + 20}/200`,
    });
  }
  return itemList;
};
