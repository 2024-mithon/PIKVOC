const obj = {
    name: '김미림',
    id: 'mynameismirim',
    pw: 'alflaAkrh1!'
}

const objString = JSON.stringify(obj);

window.localStorage.setItem('user', objString);

const userString =  window.localStorage.getItem('user');

const userObj = JSON.parse(userString);
