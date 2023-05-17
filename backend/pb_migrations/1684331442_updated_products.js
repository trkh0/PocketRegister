migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
