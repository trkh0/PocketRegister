migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  // remove
  collection.schema.removeField("9erg6dpg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykyz6ui7",
    "name": "category",
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
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9erg6dpg",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cdvs5nsd4r4pg3k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("ykyz6ui7")

  return dao.saveCollection(collection)
})
