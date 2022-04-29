const userName = document.querySelector("#Username");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const submit = document.querySelector("button");
const form = document.querySelector("form");
const alertText = document.querySelectorAll("span")


const validation = function(dataArray) {
    return new Promise((resolve, reject) => {
        const emptyElements = dataArray.map((element)=>{
            if(element.value===''){ 
                return element;
            }
        })
        const fillElements = dataArray.map((element)=>{
            if(element.value!==''){
                return element;
            }
        })

        resolve(
            {
                invalid : emptyElements,
                valid   : fillElements 
            }
        )
    });
}

function verify({invalid,valid}){
    console.log(invalid);
    console.log(valid);
    valid.forEach((element)=>{
        if (element) {
            element.style.borderColor = "green";
            element.style.borderWidth = "initial";
            element.nextElementSibling.textContent = ''
        }
    })
    invalid.forEach((element)=>{
        if (element) {
            element.style.borderColor = "red";
            element.style.borderWidth = "thick"
            element.nextElementSibling.textContent = `${element.id} cannot be blank`    
        }
        
    })

    console.log(invalid.concat(valid));

    const result = valid.every((element)=>{
        if(element)
            return element.value !== "";
    })
    return result
}




async function formSubmission(){
    const data = await validation([userName,email,password])
    if(verify(data))form.submit();
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    formSubmission();
})

//promises ke andar something like

/*

get the data then validate 

resolve -> form submitted 
reject -> form rejected 

*/
