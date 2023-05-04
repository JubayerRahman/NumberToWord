import React, {useState} from "react";
import "./InputField.css"

const InputField =(props)=>{

    const [inputValue, setinputValue] = useState();

    const getValue =(event)=>{
        setinputValue(event.target.value)
    }

    const formFunction =(event)=>{
        event.preventDefault()
        convertFunc()
        props.getNumber(word)
        console.log("form Default is Changed")
    }
    const ones = {
        0:"Zero",
        1:"One",
        2:"Two",
        3:"Three",
        4:"Four",
        5:"Five",
        6:"Six",
        7:"Seven",
        8:"Eight",
        9:"Nine",
        10:"Ten",
        11:"Eleven",
        12:"Twelve",
        13:"Thirteen",
        14:"Fourteen",
        15:"Fifteen",
        16:"Sixteen",
        17:"Seventeen",
        18:"Eighteen",
        19:"Nineteen"
    }

    const tens ={
        1: "Ten",
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety",
    }
    const hundreds ={
        1: "One Hundred",
        2: "Two Hundred",
        3: "Three Hundred",
        4: "Four Hundred",
        5: "Five Hundred",
        6: "Six Hundred",
        7: "Seven Hundred",
        8: "Eight Hundred",
        9: "Nine Hundred",
    }

    let  word 
    const convertFunc =()=>{
        if(inputValue=== undefined){
            alert("enter Number First")
            window.location.reload();
        }
        // event.preventDefault()
        if(inputValue < 0){
            alert ( "Don't be a Stupid")
        }
        if(inputValue<=19){
            word = ones[inputValue]
        }
        if (inputValue==="20"|| inputValue==="30" || inputValue==="40" || inputValue==="50" ||
            inputValue==="60" || inputValue==="70" || inputValue==="80"|| inputValue==="90"){
                const firstNum = inputValue.slice(0, inputValue.indexOf(' '))
                word = tens[firstNum]
                console.log("tewenty Working")
            }
            intoTens();
            intohundreds();
            intoThousand();
        
        
    }
    const intoTens =()=>{
        let SecoundNum = inputValue.slice(1)
        if(inputValue >19 && inputValue< 100 && SecoundNum > 0){
            const firstNum = inputValue.slice(0, inputValue.indexOf(' '))
            console.log(firstNum)
            word = tens[firstNum]+" " +ones[inputValue.slice(1)]
        }
    }
    const intohundreds=()=>{
        const hundradsnumarray = inputValue.split('')
        console.log(hundradsnumarray)
        if(inputValue ==="100" || inputValue ==="200" || inputValue ==="300" || inputValue==="400"|| inputValue==="500"||
           inputValue==="600"|| inputValue==="700"||inputValue==="800"|| inputValue==="900"){
            word = hundreds[hundradsnumarray[0]]
        }
        if(inputValue>99 && inputValue<1000){
            const firstNum = hundradsnumarray[0]
            const secoundNum = hundradsnumarray[1]
            const thirdNum = hundradsnumarray[2]
            const last2 = secoundNum+thirdNum
            console.log(last2)
            if(last2>19){
                word = hundreds[firstNum] +" " + tens[secoundNum] +" " + ones[thirdNum]
            }
            if(last2==="20"|| last2==="30" || last2==="40" || last2==="50" ||
            last2==="60" || last2==="70" || last2==="80"|| last2==="90"){
                word = hundreds[firstNum]+ " " + tens[secoundNum] 
            }
            if(last2>9 && last2<=19){
                word = hundreds[firstNum]+" " + ones[last2]
            }
            if(last2>0 && last2<=9 ){
                const last1 = last2.slice(1)
                console.log(last1)
                word = hundreds[firstNum]+" " + ones[last1]
            }

        }
    }
    const intoThousand =()=>{
        const hundradsnumarray = inputValue.split('')
        const firstNum = hundradsnumarray[0]
        const secoundNum = hundradsnumarray[1]
        const thirdNum = hundradsnumarray[2]
        const fourthNum = hundradsnumarray[3]
        const fifthNum = hundradsnumarray[4]
        const first2 = firstNum + secoundNum
        if(inputValue>=1000 && inputValue<=99999 ){
            word ="It Shoud be Thousand"
        }
        if(inputValue==="0000"){
            alert("This Number is not valid")
        }
        if(hundradsnumarray.length===4){
            word = ones[firstNum] +" "+ "Thousand"

            const Thundrads = secoundNum + thirdNum + fourthNum
            if(Thundrads>= 100 & Thundrads<=999){
                if(thirdNum==="0" && fourthNum==="0"){
                    word =ones[firstNum] +" "+ "Thousand"+" "+ hundreds[secoundNum]
                }
            }
        }
        if(first2>9 && first2<=19 && hundradsnumarray.length===5){
            console.log(ones[first2])
            word = ones[first2] +" "+ "Thousand"
        }
        if(first2>19 && first2<=99 && hundradsnumarray.length===5){
            const first1 = first2.slice(0, first2.indexOf(' ')) 
            const firstsec = first2.slice(1) 
            if(firstsec==="0"){
            console.log("ballerbaccha " + firstsec + tens[first1])
            word = tens[first1] +" "+ "Thousand"
            const Thundrads = thirdNum + fourthNum + fifthNum
            if(Thundrads>= 100 & Thundrads<=999){
                if(fourthNum==="0" && fifthNum==="0"){
                    word =ones[firstNum] +" "+ "Thousand"+" "+ hundreds[thirdNum]
                }
            }
            }
            else{
                word = tens[first1]+" " + ones[firstsec] + " " + "Thousand"
                const Thundrads = thirdNum + fourthNum + fifthNum
            if(Thundrads>= 100 & Thundrads<=999){
                if(fourthNum==="0" && fifthNum==="0"){
                    word = tens[first1]+" " + ones[firstsec] + " " + "Thousand"+ hundreds[thirdNum]
                }
            }
            }
        }
    }

    return(
        <form className="form">
            <input className={props.giveIClass} type="number" placeholder="number" onChange={getValue} value={inputValue}></input>
            <button className={props.giveBClass} onClick={formFunction}>Convert</button>
        </form>
    )
}

export default InputField;