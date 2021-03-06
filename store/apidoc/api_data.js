define({ "api": [
  {
    "type": "POST",
    "url": "/address/add",
    "title": "AddAddress",
    "version": "1.0.0",
    "name": "AddAddress",
    "group": "AddressMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/address/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"userId\":\"1\",\n   \"receiver\":\"小李\",\n   \"mobile\":\"17782476837\",\n   \"province\":\"陕西\",\n   \"city\":\"西安\"，\n   \"region\":\"长安区\"，\n   \"addr\":\"西安电子科技大学南校区\",\n   \"flag\":\"true\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver",
            "description": "<p>the name of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>the phone number of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>the province of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the city of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>the region of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>the detailed street of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": "<p>it means the address is default or not(it can be true or flase).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n          \"addressId\":\"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/AddressApiDoc.java",
    "groupTitle": "AddressMgmt"
  },
  {
    "type": "POST",
    "url": "/address/delete",
    "title": "DeleteAddress",
    "version": "1.0.0",
    "name": "DeleteAddress",
    "group": "AddressMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/address/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"addressId\":[\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "addressId",
            "description": "<p>the id of address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/AddressApiDoc.java",
    "groupTitle": "AddressMgmt"
  },
  {
    "type": "GET",
    "url": "/address/list",
    "title": "GetAddress",
    "version": "1.0.0",
    "name": "GetAddress",
    "group": "AddressMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/address/get?userId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"addresses\":[\n         {\n             \"addressId\":\"1\",\n             \"receiver\":\"小李\",\n             \"mobile\":\"17782476837\",\n             \"province\":\"陕西\",\n             \"city\":\"西安\"，\n             \"region\":\"长安区\"，\n             \"addr\":\"西安电子科技大学南校区\",\n             \"flag\":\"true\"\n         },\n         {\n             \"addressId\":\"2\",\n             \"receiver\":\"小明\",\n             \"mobile\":\"17782476837\",\n             \"province\":\"陕西\",\n             \"city\":\"西安\"，\n             \"region\":\"雁塔区\"，\n             \"addr\":\"西安电子科技大学北校区\",\n             \"flag\":\"true\"\n         }\n         ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/AddressApiDoc.java",
    "groupTitle": "AddressMgmt"
  },
  {
    "type": "PUT",
    "url": "/address/update",
    "title": "UpdateAddress",
    "version": "1.0.0",
    "name": "UpdateAddress",
    "group": "AddressMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/address/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"addressId\":1,\n   \"receiver\":\"小李\",\n   \"mobile\":\"17782476837\",\n   \"province\":\"陕西\",\n   \"city\":\"西安\"，\n   \"region\":\"长安区\"，\n   \"addr\":\"西安电子科技大学南校区\",\n   \"flag\":\"true\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "addressId",
            "description": "<p>the id of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "receiver",
            "description": "<p>the name of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>the phone number of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "province",
            "description": "<p>the province of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>the city of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>the region of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "addr",
            "description": "<p>the detailed street of consignee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flag",
            "description": "<p>it means the address is default or not(it can be true or flase).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/AddressApiDoc.java",
    "groupTitle": "AddressMgmt"
  },
  {
    "type": "GET",
    "url": "/balance/get",
    "title": "QueryBalance",
    "version": "1.0.0",
    "name": "QueryBalance",
    "group": "BalanceMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/get?userId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"balance\":{\n            \"balance\":\"\",\n            \"updateTime\":\"\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BalanceApiDoc.java",
    "groupTitle": "BalanceMgmt"
  },
  {
    "type": "PUT",
    "url": "/balance/update",
    "title": "UpdateBalance",
    "version": "1.0.0",
    "name": "UpdateBalance",
    "group": "BalanceMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/balance/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"userId\":\"1\",\n  \"money\": \"200\",\n  \"card\":\"\",\n  \"password\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>the number of balance.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card",
            "description": "<p>the number of bank card.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of bank card.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BalanceApiDoc.java",
    "groupTitle": "BalanceMgmt"
  },
  {
    "type": "POST",
    "url": "/book/delete",
    "title": "DeleteBook",
    "version": "1.0.0",
    "name": "DeleteBook",
    "group": "BookMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/book/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"bookId\":[\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "BookMgmt"
  },
  {
    "type": "post",
    "url": "/book/fuzzysearch",
    "title": "SearchBook",
    "version": "1.0.0",
    "name": "SearchBook",
    "group": "BookMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>The accept data type, must is 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"clause\":{\n       \"key1\": \"value1\",\n       \"keyn\":\"valuen\"\n     },\n   \"like\":{\n       \"key1\": \"value1\",\n       \"keyn\": \"valuen\"\n     },\n   \"filter\":\n   {\n       \"page\": \"0\",\n       \"size\": \"3\"\n\n   },\n\n   \"orderBy\":\n   {\n       \"field\": \"price\",\n       \"order\": \"asc\"\n   }\n\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "clause",
            "description": "<p>Each item is &quot;And&quot; operation().</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "like",
            "description": "<p>Each item is &quot;OR&quot; fuzzy search operation().</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter search Result,we must select filter by paging.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.page",
            "description": "<p>Filter search Result by current page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.size",
            "description": "<p>Filter search Result by size of the current page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "orderBy",
            "description": "<p>Sort search Result.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy.order",
            "description": "<p>Sort search Result by DESCending or ASCending(&quot;asc&quot; or &quot;desc&quot;) default by asc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "orderBy.field",
            "description": "<p>Sort search Result by field (it can be price ,purchaseNumber and browseNumber) default by purchaseNumber.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/book/fuzzysearch",
        "type": "Text"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"totalCount\": 22,\n         \"totalPage\": 3,\n         \"currentCount\": 2,\n         \"currentPage\": 3,\n         \"books\": [\n         {\n             \"bookId\": \"1\",\n             \"bookName\": \"MySql必知必会\",\n             \"price\": \"30.00\",\n             \"publisherName\": \"人民邮电出版社\",\n             \"author\": \"Ben Forta\",\n             \"inventory\": \"50\"，\n             \"intro\": \"MySql数据库基础入门必备\"，\n             \"image\": \"\",\n             \"browseNumber\":\"100\",\n             \"purchaseNumber\":\"50\"，\n             \"creatime\":\"2019年4月12日\"\n         },\n         {\n             \"bookId\": \"2\",\n             \"bookName\": \"Java程序员面试笔试宝典\",\n             \"price\": \"48.80\",\n             \"publisherName\": \"机械工业出版社\",\n             \"author\": \"何昊 薛鹏 叶向阳\",\n             \"inventory\": \"50\"，\n             \"intro\": \"java面试必备\"，\n             \"image\": \"\",\n             \"browseNumber\":\"100\",\n             \"purchaseNumber\":\"50\"，\n             \"creatime\":\"2019年4月12日\"\n         }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "BookMgmt"
  },
  {
    "type": "PUT",
    "url": "/book/update",
    "title": "UpdateBook",
    "version": "1.0.0",
    "name": "UpdateBook",
    "group": "BookMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/book/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"bookId\":\"1\",\n  \"bookName\": \"MySql必知必会\",\n  \"price\": \"30.00\",\n  \"isbn\":\"978-7-115-19112-0/TP\",\n  \"publisherName\": \"人民邮电出版社\",\n  \"author\": \"Ben Forta\",\n  \"inventory\": \"50\"，\n  \"intro\": \"MySql数据库基础入门必备\"，\n  \"picture\": \"\",\n  \"categoryId\":\"00\",\n  \"tagId\":\"01\",\n  \"browseNumber\":\"1\",\n  \"purchaseNumber\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bookName",
            "description": "<p>the name of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "isbn",
            "description": "<p>the international stand number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>the price of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisherName",
            "description": "<p>the name of publisher.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "author",
            "description": "<p>the name of author.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "intro",
            "description": "<p>the description of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categoryId",
            "description": "<p>the id of book's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tagId",
            "description": "<p>the id of book's tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>the photo of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "browseNumber",
            "description": "<p>the number of user browse book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "purchaseNumber",
            "description": "<p>the number of user buy book.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "BookMgmt"
  },
  {
    "type": "POST",
    "url": "/book/upload",
    "title": "UploadBook",
    "version": "1.0.0",
    "name": "UploadBook",
    "group": "BookMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/book/upload",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"bookName\": \"MySql必知必会\",\n  \"price\": \"30.00\",\n  \"isbn\":\"978-7-115-19112-0/TP\",\n  \"publisherName\": \"人民邮电出版社\",\n  \"author\": \"Ben Forta\",\n  \"inventory\": \"50\"，\n  \"intro\": \"MySql数据库基础入门必备\"，\n  \"categoryId\":\"00\",\n  \"tagId\":\"01\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookName",
            "description": "<p>the name of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the price of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>the international stand number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "publisherName",
            "description": "<p>the name of publisher.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>the name of author.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>the description of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>the id of book's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tagId",
            "description": "<p>the id of book's tag.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"bookId\":\"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "BookMgmt"
  },
  {
    "type": "POST",
    "url": "/borrow/add",
    "title": "AddBorrow",
    "version": "1.0.0",
    "name": "AddBorrow",
    "group": "BorrowMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/borrow/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"bookId\": \"1\",\n  \"amount\":\"1\",\n  \"timeLimit\":\"38.00\"，\n  \"userId\":\"1\",\n  \"addressId\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeLimit",
            "description": "<p>the time of borrow book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>the id of user's address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BorrowApiDoc.java",
    "groupTitle": "BorrowMgmt"
  },
  {
    "type": "POST",
    "url": "/borrow/delete",
    "title": "DeleteBorrow",
    "version": "1.0.0",
    "name": "DeleteBorrow",
    "group": "BorrowMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/borrow/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"borrowId\": [\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "borrowId",
            "description": "<p>the id of borrow.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BorrowApiDoc.java",
    "groupTitle": "BorrowMgmt"
  },
  {
    "type": "GET",
    "url": "/borrow/get",
    "title": "QueryBorrow",
    "version": "1.0.0",
    "name": "QueryBorrow",
    "group": "BorrowMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/borrow/get?userId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"borrow\":[\n             {\n                 \"borrowId\":\"1\",\n                 \"bookId\":\"1\",\n                 \"amount\":\"2\",\n                 \"timeLimit:\"30\",\n                 \"borrowTime\":\"\",\n                 \"addressId\":\"1\",\n                 \"status\":\"\",\n                 \"damagedDegree\":\"0\"\n             }\n         ]\n    }\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BorrowApiDoc.java",
    "groupTitle": "BorrowMgmt"
  },
  {
    "type": "GET",
    "url": "/borrow/list",
    "title": "QueryBorrows",
    "version": "1.0.0",
    "name": "QueryBorrows",
    "group": "BorrowMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/borrow/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"borrows\":{\n             \"userId1\":[\n                 {\n                 \"borrowId\":\"1\",\n                 \"bookId\":\"1\",\n                 \"amount\":\"2\",\n                 \"timeLimit:\"30\",\n                 \"borrowTime\":\"\",\n                 \"addressId\":\"1\",\n                 \"status\":\"\",\n                 \"damagedDegree\":\"0\"\n                 }\n             ],\n             \"userId2\":[\n                 {\n                 \"borrowId\":\"1\",\n                 \"bookId\":\"1\",\n                 \"amount\":\"2\",\n                 \"timeLimit:\"30\",\n                 \"borrowTime\":\"\",\n                 \"addressId\":\"1\",\n                 \"status\":\"\",\n                 \"damagedDegree\":\"0\"\n                 }\n             ]\n         }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BorrowApiDoc.java",
    "groupTitle": "BorrowMgmt"
  },
  {
    "type": "POST",
    "url": "/borrow/update",
    "title": "updateBorrow",
    "version": "1.0.0",
    "name": "updateBorrow",
    "group": "BorrowMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/borrow/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"borrowId\":\"1\",\n  \"damagedDegree\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "borrowId",
            "description": "<p>the id of borrow book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "damagedDegree",
            "description": "<p>the degree of damaged book(it can choose one between one and ten).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BorrowApiDoc.java",
    "groupTitle": "BorrowMgmt"
  },
  {
    "type": "POST",
    "url": "/cart/add",
    "title": "AddCart",
    "version": "1.0.0",
    "name": "AddCart",
    "group": "CartMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/cart/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"bookId\": \"1\",\n  \"amount\":\"1\",\n  \"price\":\"38.00\"，\n  \"userId\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the price of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"cartId\":\"1\"\n    }\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/CartApiDoc.java",
    "groupTitle": "CartMgmt"
  },
  {
    "type": "POST",
    "url": "/cart/delete",
    "title": "DeleteCart",
    "version": "1.0.0",
    "name": "DeleteCart",
    "group": "CartMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/cart/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"cartId\":[\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "cartId",
            "description": "<p>the id of book.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/CartApiDoc.java",
    "groupTitle": "CartMgmt"
  },
  {
    "type": "GET",
    "url": "/cart/list",
    "title": "QueryCart",
    "version": "1.0.0",
    "name": "QueryCart",
    "group": "CartMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/cart/list?userId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"carts\":[\n         {\n             \"cartId\":\"1\",\n             \"bookId\":\"1\",\n             \"amount\":\"2\",\n             \"price\":\"38.00\",\n             \"createTime\":\"\"\n         },\n         {\n             \"cartId\":\"2\",\n             \"bookId\":\"2\",\n             \"amount\":\"1\",\n             \"price\":\"37.00\",\n             \"createTime\":\"\"\n         }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/CartApiDoc.java",
    "groupTitle": "CartMgmt"
  },
  {
    "type": "PUT",
    "url": "/cart/update",
    "title": "UpdateCart",
    "version": "1.0.0",
    "name": "UpdateCart",
    "group": "CartMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/cart/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"amount\":\"1\",\n  \"price\":\"38.00\"，\n  \"cartId\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the price of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>the id of shoppingCart.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/CartApiDoc.java",
    "groupTitle": "CartMgmt"
  },
  {
    "type": "POST",
    "url": "/category/create",
    "title": "CreateCategory",
    "version": "1.0.0",
    "name": "CreateCategory",
    "group": "CategoryMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/category/create",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"name\": \"程序设计\",\n  \"description\": \"编程技术类书籍\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the description of category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"categoryId\":\"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "CategoryMgmt"
  },
  {
    "type": "POST",
    "url": "/category/delete",
    "title": "DeleteCategory",
    "version": "1.0.0",
    "name": "DeleteCategory",
    "group": "CategoryMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/category/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"categoryId\":[\"00\",\"10\",\"20\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categoryId",
            "description": "<p>the id of category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "CategoryMgmt"
  },
  {
    "type": "GET",
    "url": "/category/list",
    "title": "QueryCategories",
    "version": "1.0.0",
    "name": "QueryCategories",
    "group": "CategoryMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/category/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"0\":[\"01\",\"02\"],\n        \"1\":[\"11\",\"12\"],\n        \"2\":[\"21\",\"22\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "CategoryMgmt"
  },
  {
    "type": "GET",
    "url": "/category/get",
    "title": "QueryCategory",
    "version": "1.0.0",
    "name": "QueryCategory",
    "group": "CategoryMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/category/get?categoryId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"name\":\"程序设计\",\n         \"description\":\"编程技术类书籍\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "CategoryMgmt"
  },
  {
    "type": "PUT",
    "url": "/category/update",
    "title": "UpdateCategory",
    "version": "1.0.0",
    "name": "UpdateCategory",
    "group": "CategoryMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/category/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"categoryId\":\"1\",\n  \"name\": \"程序设计\",\n  \"description\": \"编程技术类书籍\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>the id of category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>the name of category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "CategoryMgmt"
  },
  {
    "type": "POST",
    "url": "/collect/add",
    "title": "AddCollect",
    "version": "1.0.0",
    "name": "AddCollect",
    "group": "CollectMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/collect/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"userId\":\"1\",\n   \"bookId\": \"1\",\n   \"description\":\"收藏的描述\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of collection.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "CollectMgmt"
  },
  {
    "type": "POST",
    "url": "/collect/delete",
    "title": "DeleteCollect",
    "version": "1.0.0",
    "name": "DeleteCollect",
    "group": "CollectMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/collect/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"collectId\":[\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectId",
            "description": "<p>the id of collect.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "CollectMgmt"
  },
  {
    "type": "GET",
    "url": "/collect/get",
    "title": "QueryCollect",
    "version": "1.0.0",
    "name": "QueryCollect",
    "group": "CollectMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/collect/get?userId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"collects\":[\n         {\n             \"collectId\":\"1\",\n             \"bookId\":\"1\",\n             \"createTime\":\"\",\n             \"description\":\"\"\n         },\n         {\n             \"collectId\":\"1\",\n             \"bookId\":\"2\",\n             \"createTime\":\"\",\n             \"description\":\"\"\n         },\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "CollectMgmt"
  },
  {
    "type": "PUT",
    "url": "/collect/update",
    "title": "UpdateCollect",
    "version": "1.0.0",
    "name": "UpdateCollect",
    "group": "CollectMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/collect/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"collectId\":\"1\",\n   \"description\":\"收藏的描述\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectId",
            "description": "<p>the id of collect.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the description of collection.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/BookApiDoc.java",
    "groupTitle": "CollectMgmt"
  },
  {
    "type": "POST",
    "url": "/comment/add",
    "title": "CreateComment",
    "version": "1.0.0",
    "name": "CreateComment",
    "group": "CommentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/comment/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"orderId\":\"1\",\n     \"bookId\": \"1\",\n     \"userId\":\"1\",\n     \"comment:\"好\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>the id of order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>the comment of book.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "CommentMgmt"
  },
  {
    "type": "POSt",
    "url": "/comment/get",
    "title": "QueryComment",
    "version": "1.0.0",
    "name": "QueryComment",
    "group": "CommentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/comment/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"bookId\":\"1\",\n     \"userId\": \"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"comments\":[\n         {\n             \"userId\":\"1\",\n             \"bookId\":\"1\",\n             \"comment\":\"好\",\n             \"createTime\":\"\"\n         },\n         {\n             \"userId\":\"1\",\n             \"bookId\":\"2\",\n             \"comment\":\"好\",\n             \"createTime\":\"\"\n         }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "CommentMgmt"
  },
  {
    "type": "POST",
    "url": "/logistics/create",
    "title": "CreateLogistics",
    "version": "1.0.0",
    "name": "CreateLogistics",
    "group": "LogisticsMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/logistics/create",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"orderId\":\"1\",\n     \"companyName\": \"顺丰\",\n     \"logisticsNumber\":\"269885214103\",\n     \"deliverTime\":\"\",\n     \"description\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>the id of order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>the name of logistics company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logisticsNumber",
            "description": "<p>the unique id of logistics.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliverTime",
            "description": "<p>the time of starting to deliver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of logistics status.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/LogisticsApiDoc.java",
    "groupTitle": "LogisticsMgmt"
  },
  {
    "type": "POST",
    "url": "/logistics/delete",
    "title": "DeleteLogistics",
    "version": "1.0.0",
    "name": "DeleteLogistics",
    "group": "LogisticsMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/logistics/delete?logisticsId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"logisticsId\":[\"1\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "logisticsId",
            "description": "<p>the id of logistics.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/LogisticsApiDoc.java",
    "groupTitle": "LogisticsMgmt"
  },
  {
    "type": "GET",
    "url": "/logistics/list",
    "title": "QueryList",
    "version": "1.0.0",
    "name": "QueryList",
    "group": "LogisticsMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/logistics/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"logisticsId\":[\"1\",\"2\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/LogisticsApiDoc.java",
    "groupTitle": "LogisticsMgmt"
  },
  {
    "type": "GET",
    "url": "/logistics/get",
    "title": "QueryLogistics",
    "version": "1.0.0",
    "name": "QueryLogistics",
    "group": "LogisticsMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/logistics/get?logisticsId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"logisticsId\":\"1\",\n         \"companyName\": \"顺丰\",\n         \"logisticsNumber\":\"269885214103\",\n         \"deliverTime\":\"\",\n         \"createTime\":\"\",\n         \"description\":\"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/LogisticsApiDoc.java",
    "groupTitle": "LogisticsMgmt"
  },
  {
    "type": "PUT",
    "url": "/logistics/update",
    "title": "UpdateLogistics",
    "version": "1.0.0",
    "name": "UpdateLogistics",
    "group": "LogisticsMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/logistics/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"logisticsId\":\"1\",\n     \"companyName\": \"顺丰\",\n     \"logisticsNumber\":\"269885214103\",\n     \"deliverTime\":\"\",\n     \"description\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logisticsId",
            "description": "<p>the id of logistics.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "companyName",
            "description": "<p>the name of logistics company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logisticsNumber",
            "description": "<p>the unique id of logistics.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deliverTime",
            "description": "<p>the time of starting to deliver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of logistics status.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/LogisticsApiDoc.java",
    "groupTitle": "LogisticsMgmt"
  },
  {
    "type": "POST",
    "url": "/order/create",
    "title": "CreateOrder",
    "version": "1.0.0",
    "name": "CreateOrder",
    "group": "OrderMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/order/create",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"bookId\": \"1\",\n  \"amount\":\"1\",\n  \"price\":\"38.00\"，\n  \"addressId\":\"1\",\n  \"userId\":\"1\",\n  \"description\":\"订单备注等\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>the number of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the price of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>the id of address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of order.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n    \"data\":{\n        \"orderId\":\"11102\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "OrderMgmt"
  },
  {
    "type": "POST",
    "url": "/order/delete",
    "title": "DeleteOrder",
    "version": "1.0.0",
    "name": "DeleteOrder",
    "group": "OrderMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/order/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"orderId\": [\"1\",\"2\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>the id of order.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "OrderMgmt"
  },
  {
    "type": "GET",
    "url": "/order/get",
    "title": "QueryOrder",
    "version": "1.0.0",
    "name": "QueryOrder",
    "group": "OrderMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/order/get?status=0",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of order(&quot;0&quot; means all orders,&quot;1&quot; means non-payment,&quot;2&quot; means to send the goods,&quot;&quot;3&quot; means to be confirmed,&quot;4&quot; means to be evaluated).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"orders\":[\n         {\n             \"orderId\":\"1\",\n             \"bookId\": \"1\",\n             \"amount\":\"1\",\n             \"price\":\"38.00\"，\n             \"addressId\":\"1\",\n             \"status\":\"1\",\n             \"completeTime\":\"\",\n             \"createTime\":\"\",\n             \"logisticsId\":\"1\",\n             \"commentId\":\"2\",\n             \"paymentId\":\"1\",\n             \"addressId\":\"1\"\n          },\n         {\n             \"orderId\":\"1\",\n             \"bookId\": \"1\",\n             \"amount\":\"1\",\n             \"price\":\"38.00\"，\n             \"addressId\":\"1\",\n             \"status\":\"1\",\n             \"completeTime\":\"\",\n             \"createTime\":\"\",\n             \"logisticsId\":\"1\",\n             \"commentId\":\"2\",\n             \"paymentId\":\"1\",\n             \"addressId\":\"1\"\n         }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "OrderMgmt"
  },
  {
    "type": "PUT",
    "url": "/order/update",
    "title": "UpdateOrderStatus",
    "version": "1.0.0",
    "name": "UpdateOrderStatus",
    "group": "OrderMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/order/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"orderId\": \"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>the id of order.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/OrderApiDoc.java",
    "groupTitle": "OrderMgmt"
  },
  {
    "type": "POST",
    "url": "/pay/create",
    "title": "CreatePayment",
    "version": "1.0.0",
    "name": "CreatePayment",
    "group": "PaymentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/pay/buy",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"orderId\":\"1\",\n     \"type\": \"0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>the id of order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>the type of payment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PayApiDoc.java",
    "groupTitle": "PaymentMgmt"
  },
  {
    "type": "POST",
    "url": "/pay/delete",
    "title": "DeletePayment",
    "version": "1.0.0",
    "name": "DeletePayment",
    "group": "PaymentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/pay/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"paymentId\":[\"1\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "paymentId",
            "description": "<p>the id of payment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PayApiDoc.java",
    "groupTitle": "PaymentMgmt"
  },
  {
    "type": "GET",
    "url": "/pay/list",
    "title": "QueryList",
    "version": "1.0.0",
    "name": "QueryList",
    "group": "PaymentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/pay/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n    \"data\":{\n         \"paymentId\":[\"1\",\"2\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PayApiDoc.java",
    "groupTitle": "PaymentMgmt"
  },
  {
    "type": "GET",
    "url": "/pay/get",
    "title": "QueryPayment",
    "version": "1.0.0",
    "name": "QueryPayment",
    "group": "PaymentMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/pay/get?paymentId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n    \"data\":{\n         \"paymentNumber\":\"222359644420\",\n         \"payTime\":\"\"\n         }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PayApiDoc.java",
    "groupTitle": "PaymentMgmt"
  },
  {
    "type": "POST",
    "url": "/picture/delete",
    "title": "DeletePicture",
    "version": "1.0.0",
    "name": "DeletePicture",
    "group": "PictureMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/picture/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"pictureId\":[\"1\",\"2\"]\n}",
          "type": "Binary"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictureId",
            "description": "<p>the id string of pictures.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PictureApiDoc.java",
    "groupTitle": "PictureMgmt"
  },
  {
    "type": "GET",
    "url": "/picture/list",
    "title": "QueryList",
    "version": "1.0.0",
    "name": "QueryList",
    "group": "PictureMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/picture/list?bookId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n    \"data\":{\n         \"pictureId1\":\"pictureBase64String1\",\n         \"pictureId2\":\"pictureBase64String2\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PictureApiDoc.java",
    "groupTitle": "PictureMgmt"
  },
  {
    "type": "POST",
    "url": "/picture/upload",
    "title": "UploadPicture",
    "version": "1.0.0",
    "name": "UploadPicture",
    "group": "PictureMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/picture/upload",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"bookId\";\"1\",\n     \"pictureString\":[\"\",\"\"]\n}",
          "type": "Binary"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bookId",
            "description": "<p>the id of book.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pictureString",
            "description": "<p>the base64 string of picture.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/PictureApiDoc.java",
    "groupTitle": "PictureMgmt"
  },
  {
    "type": "POST",
    "url": "/tag/create",
    "title": "CreateTag",
    "version": "1.0.0",
    "name": "CreateTag",
    "group": "TagMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/tag/create",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"categoryId\":\"1\",\n  \"name\": \"java\",\n  \"description\": \"java技术类书籍\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>the id of category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the description of tag.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"tagId\":\"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "TagMgmt"
  },
  {
    "type": "POST",
    "url": "/tag/delete",
    "title": "DeleteTag",
    "version": "1.0.0",
    "name": "DeleteTag",
    "group": "TagMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/tag/delete",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"tagId\":[\"01\",\"02\",\"03\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tagId",
            "description": "<p>the id of tag.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "TagMgmt"
  },
  {
    "type": "GET",
    "url": "/tag/get",
    "title": "QueryTag",
    "version": "1.0.0",
    "name": "QueryTag",
    "group": "TagMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/tag/get?tagId=1",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"name\":\"java\",\n         \"description\":\"编程技术类书籍\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "TagMgmt"
  },
  {
    "type": "PUT",
    "url": "/tag/update",
    "title": "UpdateTag",
    "version": "1.0.0",
    "name": "UpdateTag",
    "group": "TagMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/api/v1.0/tag/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n  \"tagId\":\"1\",\n  \"name\": \"java\",\n  \"description\": \"编程技术类书籍\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tagId",
            "description": "<p>the id of tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>the name of tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>the description of tag.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/ClassApiDoc.java",
    "groupTitle": "TagMgmt"
  },
  {
    "type": "POST",
    "url": "/unitPrice/add",
    "title": "AddPrice",
    "version": "1.0.0",
    "name": "AddPrice",
    "group": "UnitPriceMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/unitPrice/add",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"price\":\"1\",\n     \"status\":\"borrow\"\n}",
          "type": "Binary"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the single day's price of borrow book.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of unitPrice(it can be borrow or damage).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UnitPriceApiDoc.java",
    "groupTitle": "UnitPriceMgmt"
  },
  {
    "type": "GET",
    "url": "/unitPrice/list",
    "title": "QueryPrice",
    "version": "1.0.0",
    "name": "QueryPrice",
    "group": "UnitPriceMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/unitPrice/list",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n        \"unitPrice\":[\n             {\n                 \"status\":\"borrow\",\n                 \"price\":\"1\",\n                 \"updateTime\":\"\"\n             },\n             {\n                 \"status\":\"damage\",\n                 \"price\":\"1\",\n                 \"updateTime\":\"\"\n             }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UnitPriceApiDoc.java",
    "groupTitle": "UnitPriceMgmt"
  },
  {
    "type": "PUT",
    "url": "/unitPrice/update",
    "title": "UpdatePrice",
    "version": "1.0.0",
    "name": "UpdatePrice",
    "group": "UnitPriceMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/unitPrice/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n     \"priceId\":\"1\",\n     \"price\":\"1\"\n}",
          "type": "Binary"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>the id of borrowPrice.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UnitPriceApiDoc.java",
    "groupTitle": "UnitPriceMgmt"
  },
  {
    "type": "POST",
    "url": "/user/registerCode",
    "title": "GetRegisterCode",
    "version": "1.0.0",
    "name": "GetRegisterCode",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/registerCode",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"email\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "POST",
    "url": "/user/resetCode",
    "title": "GetResetCode",
    "version": "1.0.0",
    "name": "GetResetCode",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/resetCode",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"email\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "POST",
    "url": "/user/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "Login",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/login",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"email\": \"hcbbox@163.com\",\n   \"password\": \"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>it will be used for logging.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\",\n    \"data\":{\n         \"userId\":\"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "PUT",
    "url": "/user/modify",
    "title": "ModifyPassword",
    "version": "1.0.0",
    "name": "ModifyPassword",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/modify",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"userId\":\"1\",\n   \"oldPassword\":\"123456\",\n   \"newPassword\":\"456789\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>the old password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>the new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\"\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "POST",
    "url": "/user/get",
    "title": "QueryUser",
    "version": "1.0.0",
    "name": "QueryUser",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/get",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"userId\":\"1\",\n   \"email\":\"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>the email of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n    \"data\":{\n         \"userId\":\"2\",\n         \"uname\": \"小李\",\n         \"image\":\"\",\n         \"regTime\":\"\",\n         \"mobile\":\"13109535503\",\n         \"email\":\"abc@163.com\",\n         \"sex\":\"男\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "POST",
    "url": "/user/register",
    "title": "Register",
    "version": "1.0.0",
    "name": "Register",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/register",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"email\":\"abc@163.com\",\n   \"password\": \"123456\",\n   \"code\":\"956142\",\n   \"receiveTime\":\"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>it will be used for logging.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>the verificationCode of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiveTime",
            "description": "<p>the receiveTime of verificationCode.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "POST",
    "url": "/user/reset",
    "title": "ResetPassword",
    "version": "1.0.0",
    "name": "ResetPassword",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/reset",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"email\":\"123@qq.com\",\n   \"password\":\"abcdefg\",\n   \"code\":\"123445\",\n   \"receiveTime\":\"5896631\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>the verificationCode of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiveTime",
            "description": "<p>the receiveTime of verificationCode.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  },
  {
    "type": "PUT",
    "url": "/user/update",
    "title": "UpdateInformation",
    "version": "1.0.0",
    "name": "UpdateInformation",
    "group": "UserMgmt",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "http://localhost/store/v1.0/user/update",
        "type": "Text"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The accept data type, it must be 'application/json'</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body Example:",
          "content": "{\n   \"userId\":\"1\",\n   \"uname\": \"小王\",\n   \"mobile\":\"13109535503\",\n   \"sex\":\"男\",\n   \"image\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>the id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uname",
            "description": "<p>the name of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>the phone number of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sex",
            "description": "<p>the gender of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>the base64 string of user's image.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"respCode\":\"100\",\n    \"respMsg\":\"Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/xidian/bookstore/apidoc/UserApiDoc.java",
    "groupTitle": "UserMgmt"
  }
] });
