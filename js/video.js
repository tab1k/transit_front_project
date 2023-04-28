function inner() {
    var c=document.querySelector('.type-button');
    if(c.innerHTML==`For teacher`) {
        c.innerHTML=`For everyone`;
    } else {
        c.innerHTML=`For teacher`;
    }
    return false
}