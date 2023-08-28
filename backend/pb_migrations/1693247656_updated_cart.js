migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
