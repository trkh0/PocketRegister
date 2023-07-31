migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  collection.name = "cart"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  collection.name = "orders"

  return dao.saveCollection(collection)
})
