migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cz2wiwhl",
    "name": "payment_option",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "cash",
        "card"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7pklnz8814y447b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cz2wiwhl",
    "name": "paymentOption",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "cash",
        "card"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
