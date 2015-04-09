var things = {
  query: '',
  bookId: '',
  confirm: 'Request has been sent!',
  set: set_,
  InvertByCurrentFilter: InvertByCurrentFilter_
}

//private
//sets parameters from e of doGet(e)
function set_(e){
  this.query = e.parameter.query;
  this.bookId = e.parameter.bookId;
  this.confirm = e.parameter.confirm || this.confirm;
  return this;
}

//private
//Inverts By Current Filter
function InvertByCurrentFilter_() {
  var self = this;
  var book = BkperApp.openById(self.bookId);
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