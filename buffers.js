const buffer = new Buffer.from("chakradhar");
// Character set utf-8 is self built in nodejs so that we can avoid by mentioning in the code. 
buffer.write("");
console.log(buffer.toJSON());
/* 
{
    type: 'Buffer',
    data: [
       99, 104,  97, 107,
      114,  97, 100, 104,
       97, 114
    ]
  } 

  it will give the data in binary code where it represents the data of input and the data will be stored in the object form.
  */
console.log(buffer);

//<Buffer 63 68 61 6b 72 61 64 68 61 72> the numbers will be delivered in HexaDecimal format

console.log(buffer.toString());

// chakradhar
// the provided data will be delivered

