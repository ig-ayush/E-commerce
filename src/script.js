const scrollRow = (rId,move)=>{
    let row = document.getElementById(rId);
    row.scrollBy({
        left : move,
        behavior :"smooth"
    });
};