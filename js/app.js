
var app, messages

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
  app = new Framework7({
      panelLeftBreakpoint: 1024
  });




  // AUTO COMPLETE

  // Fruits data demo array
  var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

  var searchbar = app.searchbar.create({
    el: '#searchbar-autocomplete',
    customSearch: true,
    on: {
      search: function (query) {
        console.log(query);
      }
    }
  });
  var autocompleteSearchbar = app.autocomplete.create({
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
  
  
  
  
  // CHAT
  
  // Init Messages
  var messages = app.messages.create({
      el: '.messages',

      // First message rule
      firstMessageRule: function(message, previousMessage, nextMessage) {
          // Skip if title
          if (message.isTitle) return false;
          /* if:
            - there is no previous message
            - or previous message type (send/received) is different
            - or previous message sender name is different
          */
          if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
          return false;
      },
      // Last message rule
      lastMessageRule: function(message, previousMessage, nextMessage) {
          // Skip if title
          if (message.isTitle) return false;
          /* if:
            - there is no next message
            - or next message type (send/received) is different
            - or next message sender name is different
          */
          if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
          return false;
      },
      // Last message rule
      tailMessageRule: function(message, previousMessage, nextMessage) {
          // Skip if title
          if (message.isTitle) return false;
          /* if (bascially same as lastMessageRule):
					- there is no next message
					- or next message type (send/received) is different
					- or next message sender name is different
					*/
          if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
          return false;
      }
  });

  // Init Messagebar
  var messagebar = app.messagebar.create({
      el: '.messagebar'
  });

  // Response flag
  var responseInProgress = false;

  // Send Message
  $$('.send-link').on('click', function() {
      var text = messagebar.getValue().replace(/\n/g, '<br>').trim();
      // return if empty message
      if (!text.length) return;

      // Clear area
      messagebar.clear();

      // Return focus to area
      messagebar.focus();

      // Add message to messages
      messages.addMessage({
          text: text,
      });

      if (responseInProgress) return false;
      // Receive dummy message
      receiveMessage();
  });

  // Dummy response
  var answers = [
      'Yes!',
      'No',
      'Hm...',
      'I am not sure',
      'And what about you?',
      'May be ;)',
      'Lorem ipsum dolor sit amet, consectetur',
      'What?',
      'Are you sure?',
      'Of course',
      'Need to think about it',
      'Amazing!!!'
  ]
  var people = [{
          name: 'mgm Bot',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg'
      },
      {
          name: 'mgm Bot',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg'
      }
  ];
  

  function receiveMessage() {
      responseInProgress = true;
      setTimeout(function() {
          // Get random answer and random person
          var answer = answers[Math.floor(Math.random() * answers.length)];
          var person = people[Math.floor(Math.random() * people.length)];

          // Show typing indicator
          messages.showTyping({
              header: person.name + ' antwortet',
              avatar: person.avatar
          });

          setTimeout(function() {
              // Add received dummy message
              messages.addMessage({
                  text: answer,
                  type: 'received',
                  name: person.name,
                  avatar: person.avatar
              });
              // Hide typing indicator
              messages.hideTyping();
              responseInProgress = false;
              // Scroll to bottom
              var element_to_scroll_to = $('#bottom')[0];
						  element_to_scroll_to.scrollIntoView({ behavior: 'smooth'});
          }, 1000);
      }, 500);
  }


  // run fake chat
  // 01
  setTimeout(function() {
  messages.addMessage({
      text: "Wieviele Mitarbeiter hat mgm?",
  });
  }, 2000);

  setTimeout(function() {
      // Get random answer and random person
      var answer = 'mgm hat 700 Mitarbeiter an 16 Standorten. Neben Deutschland ist mgm in Frankreich, Schweiz, Österreich, Frankreich, Tschechische Republik, Vietnam und USA vertreten. <a class="chatlink" href="mgm-tp-02.html#drei">Link</a>';
      var person = people[0];

      // Show typing indicator
      messages.showTyping({
          header: person.name + ' antwortet'
          //avatar: person.avatar
      });

      setTimeout(function() {
          // Add received dummy message
          messages.addMessage({
              text: answer,
              type: 'received',
              name: person.name
              //avatar: person.avatar
          });
          // Hide typing indicator
          messages.hideTyping();
          responseInProgress = false;
          // Scroll to bottom
          var element_to_scroll_to = $('#bottom')[0];
          element_to_scroll_to.scrollIntoView({ behavior: 'smooth'});
      }, 3000);
  }, 3000);
  //02
  setTimeout(function() {
  messages.addMessage({
      text: "Für welche Kunden arbeitet mgm?",
  });
  }, 10000);

  setTimeout(function() {
      // Get random answer and random person
      var answer = 'mgm arbeitet für den Public Sector (Öffentliche Auftraggber), den Handel (Commerce) und Industrieversicherungen.';
      var person = people[0];

      // Show typing indicator
      messages.showTyping({
          header: person.name + ' antwortet'
          //avatar: person.avatar
      });

      setTimeout(function() {
          // Add received dummy message
          messages.addMessage({
              text: answer,
              type: 'received',
              name: person.name
              //avatar: person.avatar
          });
          // Hide typing indicator
          messages.hideTyping();
          responseInProgress = false;
          // Scroll to bottom
          var element_to_scroll_to = $('#bottom')[0];
          element_to_scroll_to.scrollIntoView({ behavior: 'smooth'});
      }, 3000);

      setTimeout(function() {
          // Add received dummy message
          messages.addMessage({
              text: 'Zu unseren Kunden zählen u.a. Elster Online, Lidl, REWE, HDI und Allianz.',
              type: 'received',
              name: person.name
              //avatar: person.avatar
          });
          // Hide typing indicator
          messages.hideTyping();
          responseInProgress = false;
          // Scroll to bottom
          var element_to_scroll_to = $('#bottom')[0];
          element_to_scroll_to.scrollIntoView({ behavior: 'smooth'});
      }, 4000);
  }, 13000);

}

mainApp();

