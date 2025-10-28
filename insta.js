let arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    story:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",

  },
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    story:"https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    
  },
  {
    dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    story:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    
  },
   {
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    
  },
  
];
let storiyan= document.querySelector("#storiyan")
let images=""
arr.forEach((ele,idx)=>{
    images+=`<div class="story">
                <img id="${idx}" src="${ele.dp}"
                    alt="">
            </div>`
            console.log(ele)
})
storiyan.innerHTML=images;

storiyan.addEventListener('click',(detail)=>{
        document.querySelector("#full-screen").style.display="block"
        document.querySelector("#full-screen").style.backgroundImage=`url(${ arr[detail.target.id].story})`

        setTimeout(()=>{
                  document.querySelector("#full-screen").style.display="none"
        },1000)
});





