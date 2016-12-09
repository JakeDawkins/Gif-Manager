import Store from 'react-native-store';

const DB = {
  'categories': Store.model('categories'),
}

// DB.categories.add({
//   title: "Cats",
//   order: 0,
//   displayColor: "#ccff00",
//   thumbnailURI: "",
// });

/**
 * gets all categories
 * [ret] promise

getCategoriesData().then(
  res => {
    console.log("categories", res);
  }
);
*/
export function getCategoriesData() {
  return DB.categories.find();
}

/**
 *  adds a category to the list of categories
 *  [param] Object<category object>
 *  [ret] null
 */
export function addCategory(category) {
  if(category && category.title && category.thumbnailURI)
  DB.categories.add(category);
}

/**
 *  updates an existing category using filter
 *  [param] filter:Object
 *  [param] newCategory:Object
 *  [ret] promise
 */
export function updateCategories(filter, newCategory) {
  DB.categories.update(
    newCategory, filter
  )
}