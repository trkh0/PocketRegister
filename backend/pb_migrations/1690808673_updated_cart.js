migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  // remove
  collection.schema.removeField("eai4afih")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sjdypy2xk4bi7x3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eai4afih",
    "name": "order_number",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
