import Store from 'react-native-store';

const DB = {
  'images': Store.model('images'),
}

/**
 * gets all images
 * [ret] promise

getAllImages().then(
  res => {
    console.log(res);
  }
);
*/
export function getAllImages() {
  return DB.images.find();
}

/**
 * gets all images in a category
 * [ret] promise

 getImagesWithCategory(1).then(
  res => {
    console.log("images", res);
  }
);
*/
export function getImagesWithCategory(categoryId) {
  return DB.images.find({
    where: {
      categoryId: categoryId,
    },
  });
}

/**
 *  adds a category to the list of categories
 *  [param] Object<category object>
 *  [ret] null

addImage(1, "https://media.giphy.com/media/l0HlEwbMREYkPyrRu/giphy.gif").then(
  res => {
    console.log(res);
  }
);
*/
export function addImage(categoryId, imageUrl) {
  if(categoryId && imageUrl)
  return DB.images.add({
    thumbnailUrl: imageUrl,
    imageUrl: imageUrl,
    categoryId: categoryId,
  });
}

/**
 *  updates an existing category using filter
 *  [param] filter:Object
 *  [param] newCategory:Object
 *  [ret] promise
 */
// export function updateCategories(filter, newCategory) {
//   DB.categories.update(
//     newCategory, filter
//   )
// }