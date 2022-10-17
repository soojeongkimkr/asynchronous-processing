class userStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id==='james' && password==='admin123')||
                    (id==='siri' && password==='siri123')
                ){
                    resolve(id)
                }
                else{
                    reject(new Error('not Found'))
                }
            }, 3000);
        })
        
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(user==='siri'){
                    resolve({name:'siri', role:'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
        
    }
}


//promise 만들기
const userStorge = new userStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorge.loginUser(id, password)
.then(user=>userStorage.getRoles)
.then(user=>alert(
    `Hello ${userWithRole.name}`
))
.catch(console.log)