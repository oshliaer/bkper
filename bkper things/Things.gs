var things = {
  query: '',
  ledgerId: '',
  confirm: 'Request has been sent!',
  set: set_,
  InvertByCurrentFilter: InvertByCurrentFilter_
}
function set_(e){
  this.query = e.parameter.query;
  this.ledgerId = e.parameter.ledgerId;
  this.confirm = e.parameter.confirm;
  return this;
}
function InvertByCurrentFilter_() {
  var self = this;
  var book = BkperApp.openById(self.ledgerId);
  var transactionIterator = book.search(self.query);
  var new_transactions = [];
  while (transactionIterator.hasNext()) {
    var transaction = transactionIterator.next();
    new_transactions.push([transaction.getDebitAccountName(), transaction.getCreditAccountName(), transaction.getAmount(), new Date(), transaction.getDescription()]);
  }
  if(new_transactions.length < 1) return 'No records to create';
  book.record(new_transactions);
  return self.confirm;
}