// source: https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/

const to = function(promise: Promise<any>) {
  return promise.then((data) => {
    console.log('will resolve');
    
    return {err: null, data: data};
  })
    .catch((err) => {
      return {err: err, data: null}
    });
}

export default to