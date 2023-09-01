migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
})
