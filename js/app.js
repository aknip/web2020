
var myApp, myMessages, myMessagebar, questions;

// API of autocomplete: http://api.jqueryui.com/autocomplete/
function mainApp() {
    var $$ = Dom7;
    myApp = new Framework7({
        panelLeftBreakpoint: 1024
    });
    
    // Conversation flag
    var conversationStarted = false;

    // Init Messages
    myMessages = myApp.messages('.messages', {
        autoLayout: true
    });
    myMessagebar = myApp.messagebar('.messagebar');
    
    // Fruits data demo array
    //questions = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
    //questions = sheetData;
    //console.log(JSON.stringify(questions, null, 2))
    
    questions = [
  [
    "What is consolidated turnover?",
    "Consolidated turnover includes all sales made by a company and its subsidiaries – excluding associates and joint ventures. <br> For more info chose one of the options:<a onclick=\"enterQuestion('Show me a list of all financial terms.'); return false;\" class=\"button color-white\">Show me a list of all financial terms.</a><a onclick=\"enterQuestion('I dont need more info - thanks!'); return false;\" class=\"button color-white\">I don't need more info - thanks!</a>"
  ],
  [
    "Which are sanctions-sensitive industries?",
    "Please refer to our <a href=\"#\">FAQ</a> to see the list of all sanctions-sensitive industries and countries on the embargo list."
  ],
  [
    "Which countries are on the embargo list?",
    "Please refer to our <a href=\"#\">FAQ</a> to see the list of all sanctions-sensitive industries and countries on the embargo list."
  ],
  [
    "What are PII records?",
    "tbd: answer PII records"
  ],
  [
    "What are personally identifiable information records?",
    "tbd: answer PII records"
  ],
  [
    "What are SPI records?",
    "tbd: answer SPI records"
  ],
  [
    "What are sensitive personal information records?",
    "tbd: answer SPI records"
  ],
  [
    "What is an financial institution?",
    "Please add answer!"
  ],
  [
    "What are financial institutions?",
    "Please add answer!"
  ],
  [
    "How are financial institutions defined?",
    "Please add answer!"
  ],
  [
    "How long is an offer valid?",
    ""
  ],
  [
    "How long is a quote valid?",
    ""
  ],
  [
    "How long is a proposal valid?",
    ""
  ],
  [
    "How does the referral process work?",
    "In case of a referral the responsible UW will edit the offer and create the quote letter. Then the document will be sent to you."
  ],
  [
    "How does the customer sign the offer?",
    "After entering all client and risk-information you will automatically get a quote. You can download the quote documents as PDF."
  ],
  [
    "How does the customer accept the offer?",
    "After entering all client and risk-information you will automatically get a quote. You can download the quote documents as PDF."
  ],
  [
    "How does the customer approve the offer?",
    "After entering all client and risk-information you will automatically get a quote. You can download the quote documents as PDF."
  ],
  [
    "How does the customer bind the offer?",
    "After entering all client and risk-information you will automatically get a quote. You can download the quote documents as PDF."
  ],
  [
    "How does the customer sign the quote?",
    "Upload requested documents and confirm. You can download the policy documents as PDF."
  ],
  [
    "How does the customer accept the quote?",
    "Upload requested documents and confirm. You can download the policy documents as PDF."
  ],
  [
    "How does the customer approve the quote?",
    "Upload requested documents and confirm. You can download the policy documents as PDF."
  ],
  [
    "How does the customer bind the quote?",
    "Upload requested documents and confirm. You can download the policy documents as PDF."
  ],
  [
    "How does the customer sign the proposal?",
    ""
  ],
  [
    "How does the customer accept the proposal?",
    ""
  ],
  [
    "How does the customer approve the proposal?",
    ""
  ],
  [
    "How does the customer bind the proposal?",
    ""
  ],
  [
    "How do I get support?",
    "For general and business related queries you can contact Adeline Roupillard and the MySmartGate team under xxx. For technical and policy question please contact your local underwriter under xxx"
  ],
  [
    "How can I contact Allianz / AGCS?",
    "For general and business related queries you can contact Adeline Roupillard and the MySmartGate team under xxx. For technical and policy question please contact your local underwriter under xxx"
  ],
  [
    "How can I contact an underwriter?",
    "For general and business related queries you can contact Adeline Roupillard and the MySmartGate team under xxx. For technical and policy question please contact your local underwriter under xxx"
  ],
  [
    "How do I get help?",
    "For general and business related queries you can contact Adeline Roupillard and the MySmartGate team under xxx. For technical and policy question please contact your local underwriter under xxx"
  ],
  [
    "Is there an automatic email notification to Allianz if one of the preconditions is not checked?",
    ""
  ],
  [
    "Is there an automatic referral if one of the preconditions is not checked?",
    ""
  ],
  [
    "How do I proceed if my browser failed to load?",
    "Rest assured that your progress has been automatically saved. In most cases you can simply restart you browser. If the problem persists, you may need to get in touch with your IT department."
  ],
  [
    "How do I proceed if my browser freezes?",
    "Rest assured that your progress has been automatically saved. In most cases you can simply restart you browser. If the problem persists, you may need to get in touch with your IT department."
  ],
  [
    "How do I proceed if my browser gets stuck?",
    "Rest assured that your progress has been automatically saved. In most cases you can simply restart you browser. If the problem persists, you may need to get in touch with your IT department."
  ],
  [
    "How do I recover if my browser had crashed?",
    "Rest assured that your progress has been automatically saved. In most cases you can simply restart you browser. If the problem persists, you may need to get in touch with your IT department."
  ],
  [
    "How do I contiue if I had closed my brower window by accident?",
    "Rest assured that your progress has been automatically saved. In most cases you can simply restart you browser. If the problem persists, you may need to get in touch with your IT department."
  ],
  [
    "Are there other document formats available besides PDF, eg. Word?",
    "No, for security reasons, all documents generated with mysmartgate are only available in pdf format."
  ],
  [
    "How do I save an offer?",
    "The current state of all entered customer data will always be saved, so that you can come back later again, open and edit the quote request."
  ],
  [
    "How do I save an proposal?",
    "The current state of all entered customer data will always be saved, so that you can come back later again, open and edit the quote request."
  ],
  [
    "How do I save a quote?",
    "The current state of all entered customer data will always be saved, so that you can come back later again, open and edit the quote request."
  ],
  [
    "Is my data automatically saved?",
    "The current state of all entered customer data will always be saved, so that you can come back later again, open and edit the quote request."
  ],
  [
    "How do I change an offer?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I edit an offer?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I adjust an offer?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I copy an offer?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "Can I create different offers for one client?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I change a quote?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I edit a quote?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I adjust a quote?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I copy a quote?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "Can I create different quotes for one client?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I change a proposal?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I edit a proposal?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I adjust a proposal?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "How do I copy a proposal?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "Can I create different proposals for one client?",
    "As soon as a quote letter was generated in the quote request only general policy data such as the policy inception date can be changed. You can use the copy functionality to generate a new quote while reusing the data you entered into the previous version. If you want to adapt a document for one quote or policy this will not be possible due to quality assurance and governance reasons."
  ],
  [
    "What should I do if I miss any customer data?",
    "Note that a quote cannot be created automatically without some mandatory information on the client as they are all required to calculate the premium. However, the current state of all entered customer data will always be saved, so that you can come back later again, open and edit the quote request."
  ],
  [
    "How do I delete an offer?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I remove an offer?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I delete a quote?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I remove a quote?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I delete a proposal?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I remove a proposal?",
    "No, but in the future decline, etc…"
  ],
  [
    "How do I search for a specific quote?",
    "Please use the search function located…"
  ],
  [
    "How do I search for a specific policy?",
    "Please use the search function located…"
  ],
  [
    "How do I search for a specific proposal?",
    "Please use the search function located…"
  ],
  [
    "How can I request additional functionality to be added?",
    "Please contact your local AGCS contact person or emails us: mysmartgate@allianz.com."
  ],
  [
    "How can I request an additional feature to be added?",
    "Please contact your local AGCS contact person or emails us: mysmartgate@allianz.com."
  ],
  [
    "How do I change my details?",
    "Please contact your AGCS contact person. We will edit your user information."
  ],
  [
    "How do I edit my details?",
    "Please contact your AGCS contact person. We will edit your user information."
  ],
  [
    "How do I update my details?",
    "Please contact your AGCS contact person. We will edit your user information."
  ],
  [
    "What does this D&O policy offer?",
    "France: Directors & Officers (D&O) liability insurance policies offer liability cover for company managers to protect them against exposures which may arise from the decisions and actions taken within the scope of their regular duties. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/directors-officers-liability-insurance-2/"
  ],
  [
    "How do I get more information about the D&O product?",
    "France: Directors & Officers (D&O) liability insurance policies offer liability cover for company managers to protect them against exposures which may arise from the decisions and actions taken within the scope of their regular duties. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/directors-officers-liability-insurance-2/"
  ],
  [
    "What does this D&O policy offer?",
    "Belgium: Directors & Officers (D&O) liability insurance policies offer liability cover for company managers to protect them against exposures which may arise from the decisions and actions taken within the scope of their regular duties. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/directors-officers-liability-insurance-2/"
  ],
  [
    "How do I get more information about the D&O product?",
    "Belgium: Directors & Officers (D&O) liability insurance policies offer liability cover for company managers to protect them against exposures which may arise from the decisions and actions taken within the scope of their regular duties. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/directors-officers-liability-insurance-2/"
  ],
  [
    "What does this cyber policy offer?",
    "France: Allianz Cyber Protect Premium offers insurance for cyber liability, cyber business interruption, IT forensic costs and other cyber related covers to protect companies from malicious attacks, internal errors or unexpected technical failures. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/allianz-cyber-protect-premium-2/"
  ],
  [
    "How do I get more information about the cyber product?",
    "France: Allianz Cyber Protect Premium offers insurance for cyber liability, cyber business interruption, IT forensic costs and other cyber related covers to protect companies from malicious attacks, internal errors or unexpected technical failures. For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/allianz-cyber-protect-premium-2/"
  ],
  [
    "What claims against D&Os are covered by this product?",
    ",Fracne: -Allegation of a wrongful act of an insured when acting within his managerial duties\n -Costs and expenses of an insured\n (e.g. defense costs against civil claims, criminal proceedings and regulatory investigations)\n -Financial losses where the insured is held liable For more information please download our product PDF by following the link below: https://info.mysmartgate.com/products/directors-officers-liability-insurance-2/"
  ],
  [
    "What claims are covered by this Cyber product?",
    ""
  ],
  [
    "How can I quote prospects outside the country of incorporation?",
    "Please contact your local UW."
  ],
  [
    "How can I quote companies outside the country of registration?",
    "Please contact your local UW."
  ],
  [
    "Where can I find correct legal form of the company on the list?",
    ""
  ],
  [
    "What do I do if I am unsure about the sanction status of the company?",
    "We advise you to do your due diligance and also contact you local UW to raise your concern. However, MySMartGate has a strict, but agile sanction-screening process in place, as agreed with Global L&C. It addresses trade and financial sanctions either in a digital or in a manual way."
  ],
  [
    "How safe is data entered on MySmartGate?",
    "Data is hosted by mgm technology partners on an external private cloud, in Germany. All IT assessments required have been made at a global level and are in line with Allianz guidelines."
  ],
  [
    "How secure is data entered on MySmartGate?",
    "Data is hosted by mgm technology partners on an external private cloud, in Germany. All IT assessments required have been made at a global level and are in line with Allianz guidelines."
  ],
  [
    "How is the data entered on MySmartGate protected?",
    "Data is hosted by mgm technology partners on an external private cloud, in Germany. All IT assessments required have been made at a global level and are in line with Allianz guidelines."
  ],
  [
    "How do I share feedback I have?",
    "We always appreciate your feedback! Please send and email to mysmartgate@allianz.com."
  ],
  [
    "How do I give feedback?",
    "We always appreciate your feedback! Please send and email to mysmartgate@allianz.com."
  ],
  [
    "How can I file a complaint?",
    "Please send an email to mysmartgate@allianz.com outlining your concerns and a MySmartGate colleague will get back to you shortly."
  ],
  [
    "How can I get into contact if I am unsatisfied with MySmartGate?",
    "Please send an email to mysmartgate@allianz.com outlining your concerns and a MySmartGate colleague will get back to you shortly."
  ],
  [
    "How can I get into contact if I am unhappy with MySmartGate?",
    "Please send an email to mysmartgate@allianz.com outlining your concerns and a MySmartGate colleague will get back to you shortly."
  ],
  [
    "What functionalities are at my disposal?",
    "broad"
  ],
  [
    "What functionalities are available?",
    "broad"
  ],
  [
    "What is DPS?",
    "def"
  ],
  [
    "Will we be able to collect this?",
    "Please send and email to mysmartgate@allianz.com."
  ],
  [
    "Show me a list of all financial terms.",
    "Here is the list of all financial terms: LINK"
  ],
  [
    "I dont need more info - thanks!",
    "OK. If you need additional help just enter a new question above."
  ]
]

    // Simple Dropdown
    var autocompleteDropdownSimple = myApp.autocomplete({
        input: '#autocomplete-dropdown',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            var matched = 0;
            var queries = query.split(' ');
            console.log(queries);
            
            if (query.length <= 2) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < questions.length; i++) {
                matched = 0;
                for (var j = 0; j < queries.length; j++) {
                    if (questions[i][0].toLowerCase().indexOf(queries[j].toLowerCase()) >= 0) { matched = matched + 1 };
                }
                if (matched == queries.length) {
                  results.push(questions[i][0])
                };
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function(params) { 
          // myApp.alert('selected');
          // Clear messagebar
          myMessagebar.clear();
          addMessage(params);
        }
    });
     
    
}


function addMessage(params) {
          
          myApp.accordionOpen('.accordion-item')
          // Add Message
          var currentdate = new Date(); 
          var answerTimeout;
          myMessages.addMessage({
              text: params.items[0],
              avatar: 'https://lorempixel.com/output/people-q-c-100-100-9.jpg',
              name: 'me (John Doe)',
              type: 'received',
              date: currentdate.toLocaleTimeString()
          });
          
          if (answerTimeout) clearTimeout(answerTimeout);
          answerTimeout = setTimeout(function () {
                    var currentdate = new Date();
                    var answerText = 'thanks for your question';
                    // find answer
                    for (var i = 0; i < questions.length; i++) {
                      if (questions[i][0].toLowerCase() == params.items[0].toLowerCase()) { answerText = questions[i][1] }
                    }
                    myMessages.addMessage({
                        text: answerText,
                        type: 'sent',
                        name: 'AGCS User Assistant',
                        avatar: 'https://lorempixel.com/output/people-q-c-100-100-1.jpg',
                        date: currentdate.toLocaleTimeString()
                    });
           }, Math.floor(Math.random() * 2000)+500);

}

function enterQuestion(params) {
  console.log(params);
  //myMessagebar.value(params);
  addMessage({items: [params]});
}

mainApp()
