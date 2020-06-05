//promise

//contoh 1
// let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('OK Terpenuhi')
//     } else {
//         reject('OK Tidak Terpenuhi')
//     }
// })

// janji1
//     .then(response => console.log('Janji Terpenuhi :' + response))
//     .catch(response => console.log('Ingkar !' + response))

// console.log(janji1)

//contoh 2

let ditepati = true;

janji2 = new Promise((resolve, reject)=> {
    if (ditepati) {
        setTimeout(() => {
            resolve('ditepati tapi setelah beberapa waktu!')
        }, 2000)
    } else {
        setTimeout(() => {
            reject('tidak ditepati tapi setelah beberapa waktu!')
        }, 2000)
    }
})

console.log('mulai')
// console.log(janji2.then(()=> console.log(janji2)))
janji2
    .finally(()=> console.log('selesai menunggu'))
    .then(response => console.log('Janji Terpenuhi :' + response))
    .catch(response => console.log('Ingkar !' + response))
console.log('selesai')
