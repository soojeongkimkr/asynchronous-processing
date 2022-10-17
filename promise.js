// promise는 procuder과 consumer로 나눠서 본다.
// promise의 상태
// pending -> fulfilled or rejected

// 1. producer
const promise = new Promise((resolve, reject)=>{
    console.log('something');
    setTimeout(()=>{
        resolve('Its me')
    }, 2000);
})

// 2. Consumers: then, catch, finally
promise
.then((value)=>{
    console.log(value)
})
.catch(error=>{
    console.log(error);
})
.finally(()=> console.log('finally'))

//finally는 성공하든 실패하든 상관없이 꼭 실행하고자하는 것

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num=> num * 2)
.then(num=> num * 3)
.then(num=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1),1000);
    })
})
.then(num => console.log(num));
//then은 그냥 값을 전달해도 되고 promise를 전달해도 된다.

const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('hen'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${hen} => egg`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=> sunnysideup`), 1000);
    });

getHen() //
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

// getHen().then(getEgg).then(cook).then(console.log); 와 동일하다.
