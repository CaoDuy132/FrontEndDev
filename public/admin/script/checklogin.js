if(!localStorage.getItem('name')||!localStorage.getItem('image')||localStorage.getItem('name')==''||localStorage.getItem('image')==''){
    window.location.replace('/login');
}