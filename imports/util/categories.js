import Store from 'react-native-store';

const DB = {
  'categories': Store.model('categories'),
}

// DB.categories.add({
//   title: "Cats",
//   order: 0,
//   displayColor: "#ccff00",
// });

/**
 * gets all categories
 * [ret] promise
 */
export function getCategoriesData() {
  return DB.categories.get();
}

/**
 *  adds a category to the list of categories
 *  [param] Object<category object>
 *  [ret] null
 */
export function addCategory(category) {
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