migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohmtdzjx",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  // remove
  collection.schema.removeField("ohmtdzjx")

  return dao.saveCollection(collection)
})
