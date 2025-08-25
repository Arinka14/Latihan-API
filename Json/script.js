// let mahasiswa = {
//      nama : "shandika galih",
//      nrp : "6738902",
//      email : "shandika@gmail.com",
// }

// console.log(JSON.stringify(mahasiswa));

let shr = new XMLHttpRequest();
xhr.onreadystateschange = function () {
     if (xhr.readyState == 4 && shr.status == 200) {
          let mahasiswa =  JSON.parse(this.responseText);
          console,log(mahasiswa);
     }
}
xhr.open('GET', 'Coba.json', true);
xhr.send();

$.getJSON('Coba.json', function (data) {
console.log('data');
});