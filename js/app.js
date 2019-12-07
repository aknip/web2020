
var myApp, myMessages

function mainApp() {

  var theme = 'aurora';
  var plugin = {
      params: {
          theme: theme,
          root: '#app',
      }
  };
  if (Framework7.use) Framework7.use(plugin);
  else if (Framework7.Class && Framework7.Class.use) Framework7.Class.use(plugin);
 
  var $$ = Dom7;
  myApp = new Framework7({
      panelLeftBreakpoint: 1024
  });

  // Fruits data demo array
  var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

  var searchbar = myApp.searchbar.create({
    el: '#searchbar-autocomplete',
    customSearch: true,
    on: {
      search: function (query) {
        console.log(query);
      }
    }
  });
  var autocompleteSearchbar = myApp.autocomplete.create({
    openIn: 'dropdown',
    inputEl: '#searchbar-autocomplete input[type="search"]',
    dropdownPlaceholderText: 'Fragen Sie z. B. "Was macht mgm?"',
    source: function (query, render) {
      var results = [];
      if (query.length === 0) {
        render(results);
        return;
      }
      // Find matched items
      for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
      }
      // Render items by passing array with result items
      render(results);
    },
    on: {
    closed: function () {
      console.log('Autocomplete closed')
    }
  }
  })

}

mainApp();

