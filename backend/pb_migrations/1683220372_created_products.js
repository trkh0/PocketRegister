migrate((db) => {
  const collection = new Collection({
    "id": "cdvs5nsd4r4pg3k",
    "created": "2023-05-04 17:12:52.541Z",
    "updated": "2023-05-04 17:12:52.541Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "utdyuep5",
        "name": "group",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "group1",
            "group2",
            "group3"
          ]
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("cdvs5nsd4r4pg3k");

  return dao.deleteCollection(collection);
})
