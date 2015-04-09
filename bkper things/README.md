#bkper things
##About
There are simple scripts for [Google Apps Script](https://developers.google.com/apps-script) and [bkper](http://about.bkper.com "about.bkper.com") WebHooks

##How to

*   [Deploying a Google Apps Script as a web app](https://developers.google.com/apps-script/guides/web#deploying_a_script_as_a_web_app "Deploying a script as a web app")
*   [bkper Outgoing WebHooks](http://about.bkper.com/dev_outgoingWebHooks.html "Outgoing WebHooks") 

##Outgoing WebHooks settings
###Context menu on screen:

`[YOUR_MENU_ITEM]@[YOUR_SCRIPT_URL]?query={query}&bookId={bookId}&confirm=[YOUR_CUSTOM_CONFIRMATION_MESSAGE]&action=[ACTION_NAME]`

##The ACTIONS
### InvertByCurrentFilter
####Description
This action creates new transactions in the current book. It takes current transactions by query then it inverts the accounts and sets a new date.

####Example
**the query**

>=acc:"My debts" before:08/04/2015

**result of the query**

>11/03/2015 ↓Cash ↓My debts #alex for the rent

**result of the action**

>08/04/2015 ↑My debts ↑Cash #alex for the rent