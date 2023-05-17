migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdvs5nsd4r4pg3k")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdvs5nsd4r4pg3k")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
