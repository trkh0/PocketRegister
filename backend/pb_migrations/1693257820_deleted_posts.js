migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5xczceamz3cn9n");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "j5xczceamz3cn9n",
    "created": "2023-07-31 15:15:00.087Z",
    "updated": "2023-07-31 15:15:00.087Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8c9e9uzt",
        "name": "fiels2",
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
        "id": "yhhnnj6d",
        "name": "checked",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
})
