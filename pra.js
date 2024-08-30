let url = `http://universities.hipolabs.com/search?name=`
let btn = document.querySelector("#btn")

btn.addEventListener("click", async ()=>{
    let uniname = document.querySelector("input").value
    // getapi(uniname)
    let col =await getapi(uniname)
    // console.log(col.name);
    show(col)




 
    
})

function show(col) {
    
    let list = document.querySelector("#list")
    list.innerText= ""
    for(cols of col){
        // console.log(cols.name);
        
        let ele = document.createElement("li")
        ele.classList.add("li")
        
        ele.innerText = cols.name
        list.appendChild(ele)
        
    }
}



async function getapi(uniname) {

    try {
        let res = await axios.get(url + uniname)
        let n = res.data
        return n   
    } catch (error) {
        console.log("error", error);
        
    }
   
}
