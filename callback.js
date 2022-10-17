//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));


//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout)
}
printWithDelay(()=> console.log('hello'))



class userStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='james' && password==='admin123')||
                (id==='siri' && password==='siri123')
            ){
                onSuccess(id)
            }
            else{
                onError(new Error('not Found'))
            }
        }, 3000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user==='siri'){
                onSuccess({name:'siri', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


//callback 함수 만들기
const userStorge = new userStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorge.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.id}`
                )
            },
            error => {
                console.log(error)
            }
        )
    },
    error => {
        console.log(error)
    }
)