function get_lucky_num(){
    lucky_num=Math.floor(Math.random()*500);
    return lucky_num;
}

function show_lucky_num(){
    data=[];
    for(var i=0;i<5;i++){
        temp=get_lucky_num();
        data.push(temp);
    }
    console.log(data);
    data.sort(function(a,b){  //compare function for numeric sort
        return (a-b);      //if we want array in descending order just alter it by return(b-a)
    });
     data=data.toString();  //data=data.join(",")
     console.log(typeof(data));
    console.log(data);

    let para=document.createElement("p");  //append the text inside this paragraph
    console.log(para);
    let node=document.createTextNode(data);
    para.appendChild(node);
    para.style.color='grey';
    para.style.fontSize='2rem';      //It is called Camel Casing format
    para.style.backgroundColor = 'lightyellow';

    ele=document.getElementById("div1");
    console.log(ele);
    ele.appendChild(para);

}

function decoration(){
    var body = document.querySelector("body");
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    var btn = document.querySelector("#btn");
    btn.style.fontSize = '1.5rem';
    btn.style.backgroundColor = 'pink';
}
y=document.getElementById("btn");
console.log(y);
y.addEventListener("click",show_lucky_num);
y.addEventListener("click",decoration);