<template>
  <div class="homeset">
    <div class="searchInputs"><input type="search" placeholder="Keresés név alapján..." v-model="itemFilter">
      <input type="search" placeholder="Keresés vonalkód alapján..." v-model="barcodeFilter"></div>
    <table class="table" id="itemsMainTable">
      <thead>
        <tr>
          <th width="15%">Név</th>
          <th width="10%">Menny.
            <span class="glyphicon" v-on:click="sortByQuantity()" v-bind:class="{ 'glyphicon-sort': sortFilter === 0, 'glyphicon-sort-by-order': sortFilter === 1, 'glyphicon-sort-by-order-alt': sortFilter === 2 }"
              aria-hidden="true"></span></th>
          <th width="10%"></th>
          <th width="25%">Vonalkód</th>
          <th width="10%"></th>
          <th width="10%"></th>
        </tr>
      </thead>
      <tbody id="itemsTable" v-for="it in filtereditems">
        <tr>
          <td> {{ it.name }} </td>
          <td> {{ it.quantity }} </td>
          <td> {{ it.units }} </td>
          <td> {{ it.barcode }}</td>
          <td> <button href="#editItem" data-toggle="tab" type="button" class="btn btn-default" v-on:click="editItem(it)">
                 <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                 </button></td>
          <td> <button href="#deleteItem" data-toggle="tab" type="button" class="btn btn-default" v-on:click="deleteItem(it)">
                 <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                 </button></td>
          <td> <button href="" data-toggle="tab" type="button" class="btn btn-default" v-on:click="getItem(it)">
                 <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                 </button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import _ from "lodash";
  import $ from "jquery";
  import firebase from "firebase";
  var config = {
    apiKey: "AIzaSyC_ydXHKwzPnX4e9QXVlXA7ebmoGyHtoUQ",
    authDomain: "teszt-b57ed.firebaseapp.com",
    databaseURL: "https://teszt-b57ed.firebaseio.com",
    storageBucket: "teszt-b57ed.appspot.com",
    messagingSenderId: "821833751798"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  export default {
    name: "homeset",
    data () {
      return {
        item: {
          name: "",
          quantity: 1,
          barcode: "",
          units: ""
        },
        editItemForm: {
          ".key": "",
          name: "",
          quantity: 1,
          barcode: "",
          units: ""
        },
        itemFilter: "",
        barcodeFilter: "",
        sortFilter: 0,
        options: [
          {
            text: "kg",
            value: "kg"
          },
          {
            text: "db",
            value: "db"
          },
          {
            text: "liter",
            value: "liter"
          },
          {
            text: "csomag",
            value: "csomag"
          }
        ]
      };
    },
    firebase: {
      items: database.ref("items"),
      shoppingLists: database.ref("shoppingLists")
    },
    methods: {
      save: function () {
        this.$firebaseRefs.items.push(this.item);
        this.drop();
      },
      drop: function () {
        this.item.name = "";
        this.item.quantity = 1;
        this.item.barcode = "";
        this.item.units = "";
      },
      editItem: function (item) {
        this.editItemForm[".key"] = item[".key"];
        this.editItemForm.name = item.name;
        this.editItemForm.units = item.units;
        this.editItemForm.quantity = item.quantity;
        this.editItemForm.barcode = item.barcode;
      },
      refreshList: function (item) {
        var freshItem = {};

        freshItem.name = item.name;
        freshItem.quantity = item.quantity;
        freshItem.units = item.units;

        database.ref(`shoppingLists/${item[".key"]}`).set(freshItem);
      },
      deleteShoppingItem: function (item) {
        $("#deleteItems").modal("show");
        $("#yesDelete").one("click", function yesDeleteCallBack () {
          database.ref(`shoppingLists/${item[".key"]}`).remove().then(function () {
            console.log("Remove succeeded.");
            $("#deleteItems").modal("hide");
          }).catch(function (error) {
            console.log("Remove failed:" + error.message);
          });
        });
      },
      getItem: function (item) {
        var shoppingItem = {
          name: item.name
        };

        this.$firebaseRefs.shoppingLists.push(shoppingItem);
      },
      saveEditedItem () {
        var item = {};

        item.name = this.editItemForm.name;
        item.quantity = this.editItemForm.quantity;
        item.barcode = this.editItemForm.barcode;
        item.units = this.editItemForm.units;
        database.ref(`items/${this.editItemForm[".key"]}`).set(item);
      },
      deleteItem: function (item) {
        $("#deleteItems").modal("show");
        $("#yesDelete").one("click", function yesDeleteCallBack () {
          database.ref(`items/${item[".key"]}`).remove().then(function () {
            console.log("Remove succeeded.");
            $("#deleteItems").modal("hide");
          }).catch(function (error) {
            console.log("Remove failed:" + error.message);
          });
        });
      },
      sortByQuantity: function () {
        this.sortFilter++;
        if (this.sortFilter === 3) {
          this.sortFilter = 0;
        }
      }
    },
    computed: {
      filtereditems: function () {
        var result = _.filter(this.items, (elem) => {
          return elem.name.toLowerCase().includes(this.itemFilter.toLowerCase());
        });

        result = _.filter(result, (elem) => {
          return elem.barcode.includes(this.barcodeFilter);
        });

        if (this.sortFilter === 1) {
          result = _.sortBy(result, "quantity");
        } else if (this.sortFilter === 2) {
          result = _.sortBy(result, "quantity").reverse();
        }
        return result;
      },
      filteredShoppingItems: function () {
        var result = _.filter(this.shoppingLists, (elem) => {
          return elem.name;
        });

        return result;
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
