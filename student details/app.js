const s = document.getElementById('className')
for(let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = 'class' + ' ' + i;
    s.appendChild(option)
}

let arr = ['Rohit', 'Suraj', 'Mohit', 'Ravi', 'Abhishek', 'Ashutosh', 'Anish', 'Aman', 'Abhay', 'Ranjeet'];
const str = document.getElementById('stuName')
for(let i = 0; i < arr.length; i++) {
    const option = document.createElement('option');
    option.value = arr[i];
    option.textContent = arr[i];
    str.appendChild(option)
}

var per;
function formSubmit() {
    const className = document.getElementById('className').value;
    const stuName = document.getElementById('stuName').value;
    const hindi = document.getElementById('hindi').value;
    const english = document.getElementById('english').value;
    const math = document.getElementById('math').value;
    const marks = document.getElementById('marks').value;
    const pin = document.getElementById('pin').value;
    const phone = document.getElementById('phone').value;
    const submit = document.getElementById('submit').value;
    const reset = document.getElementById('reset').value;

    // Validation

    if(className == "") {
        document.getElementById('cname').innerHTML = "** Please! fill the class Name field";
        return false;
    }

    if(stuName == "") {
        document.getElementById('sname').innerHTML = "** Please! fill the Student Name field";
        return false;
    }

    if(hindi == "") {
        document.getElementById('h').innerHTML = "** Please! fill the Hindi marks field";
        return false;
    }

    if(english == "") {
        document.getElementById('e').innerHTML = "** Please! fill the english marks field";
        return false;
    }

    if(math == "") {
        document.getElementById('m').innerHTML = "** Please! fill the Math marks field";
        return false;
    }

    if(marks == "") {
        document.getElementById('mark').innerHTML = "** Please! fill the Marks field";
        return false;
    }

    if(pin == "") {
        document.getElementById('p').innerHTML = "** Please! fill the pin field";
        return false;
    }

    // if (pin >= 6) {
    //     document.getElementById('p').innerHTML = "** Please! fill the 6 digit pin";
    //     return false;
    // }

    if(phone == "") {
        document.getElementById('ph').innerHTML = "** Please! fill the Mobile No. field";
        return false;
    }

    if (phone.length != 10) {
        document.getElementById('ph').innerHTML = "** Please! fill the 10 digit mobile No.";
        return false;
    }
    
    if(hindi > 100 || english > 100 || math > 100) {
        alert('Please enter correct value');
        // document.getElementByClassName('error-msg') = "enter marks only 2 digit"
        return false
        // console.log(hindi)
    } else {
        var result = +hindi + +english + +math;
        // console.log(result)
        this.per = (result / marks) * 100;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>`+className+`</td>
        <td>`+stuName+`</td>
        <td>`+this.per+` %</td>
        <td>`+pin+`</td>
        <td>`+phone+`</td>

    `;
    tr.style.color= 'green';
    document.querySelector('tbody').appendChild(tr);
}

let resetBtn = () => {
    document.getElementById('cname').style.display = "none"
    document.getElementById('sname').style.display = "none"
    document.getElementById('h').style.display = "none"
    document.getElementById('e').style.display = "none"
    document.getElementById('m').style.display = "none"
    document.getElementById('mark').style.display = "none"
    document.getElementById('p').style.display = "none"
    document.getElementById('ph').style.display = "none"
}