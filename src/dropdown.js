
function displayChildren(node){
    const childList=node.children;
    for(let i=0;i<childList.length;i++){
        childList[i].style.display = "block";
    }

}

function hideItems(parent){
    let childList = parent.children;
    for(let i = 0; i<childList.length;i++){
        console.log("jk")
        childList[i].style.display = "none";
    }
}

