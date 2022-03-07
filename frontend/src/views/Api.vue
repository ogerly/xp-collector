<template>
  <div class="api">
    <h3 class="text-center">This is an Api page</h3>

    <div class="mt-5">
      <p>Knoten Datenbank</p>
      <b-row>
        <b-col
          >Erstelle einen neuen Knoten in der Datenbank - Erstelle eine neue
          Tabelle | POST</b-col
        >
        <b-col
          ><a target="_blank" href="http://localhost:5000/tableNode/:text"
            >http://localhost:5000/tableNode/:text</a
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col>Zeigt alle Knoten aus der Datenbank | GET</b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/getTables"
            >http://localhost:5000/getTables</a
          ></b-col
        >
      </b-row>

      <p class="mt-5">Knoten GET, POST, CREATE, UPDATE, DELETE</p>
      <b-row>
        <b-col>Get All Product | GET</b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/products"
            >http://localhost:5000/products</a
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col>Get Single Product | GET</b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/products/:id'"
            >http://localhost:5000/products/:id'</a
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col>Create New Product | POST</b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/products"
            >http://localhost:5000/products</a
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col>Update Product | PUT </b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/products/:id"
            >http://localhost:5000/products/:id</a
          ></b-col
        >
      </b-row>
      <b-row>
        <b-col>Delete Product | DELETE</b-col>
        <b-col
          ><a target="_blank" href="http://localhost:5000/products/:id"
            >http://localhost:5000/products/:id</a
          ></b-col
        >
      </b-row>

      <div class="mt-5">
        <ul>
          <li>
            config
            <ul>
              <li>database.js</li>
            </ul>
          </li>
          <li>controler</li>
          <li>models</li>
          <li>routes</li>
        </ul>
      </div>
    </div>
  </div>
</template>
