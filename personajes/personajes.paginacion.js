const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const mySchema = new mongoose.Schema({
  /* your schema definition */
});

mySchema.plugin(mongoosePaginate);

const myModel = mongoose.model('SampleModel', mySchema);

myModel.paginate().then({}); // Usage

const myCustomLabels = {
    totalDocs: 'itemCount',
    docs: 'itemsList',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
  };
  
  const options = {
    page: 1,
    limit: 10,
    customLabels: myCustomLabels,
  };
  
  Model.paginate({}, options, function (err, result) {
    // result.itemsList [here docs become itemsList]
    // result.paginator.itemCount = 100 [here totalDocs becomes itemCount]
    // result.paginator.perPage = 10 [here limit becomes perPage]
    // result.paginator.currentPage = 1 [here page becomes currentPage]
    // result.paginator.pageCount = 10 [here totalPages becomes pageCount]
    // result.paginator.next = 2 [here nextPage becomes next]
    // result.paginator.prev = null [here prevPage becomes prev]
    // result.paginator.slNo = 1 [here pagingCounter becomes slNo]
    // result.paginator.hasNextPage = true
    // result.paginator.hasPrevPage = false
  });