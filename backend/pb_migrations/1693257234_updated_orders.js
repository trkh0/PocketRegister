migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otsqpsu2",
    "name": "checked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  // remove
  collection.schema.removeField("otsqpsu2")

  return dao.saveCollection(collection)
})
