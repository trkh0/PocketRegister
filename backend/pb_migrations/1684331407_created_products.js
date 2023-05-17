migrate((db) => {
  const collection = new Collection({
    "id": "kiw422qe71ya1fs",
    "created": "2023-05-17 13:50:07.195Z",
    "updated": "2023-05-17 13:50:07.195Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4ztnpa4i",
        "name": "product_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6hjgo4ob",
        "name": "size",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kiw422qe71ya1fs");

  return dao.deleteCollection(collection);
})
