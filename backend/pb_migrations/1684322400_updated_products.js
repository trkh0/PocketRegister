migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdvs5nsd4r4pg3k")

  collection.name = "categories"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxkkdrsk",
    "name": "category_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdvs5nsd4r4pg3k")

  collection.name = "products"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxkkdrsk",
    "name": "product_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
