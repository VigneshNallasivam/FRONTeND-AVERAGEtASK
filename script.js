function myCalculation() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const english = parseInt(document.getElementById("english").value);
    const tamil = parseInt(document.getElementById("tamil").value);
    const maths = parseInt(document.getElementById("maths").value);
    const science = parseInt(document.getElementById("science").value);
    const history = parseInt(document.getElementById("history").value);
    const geography = parseInt(document.getElementById("geography").value);
    const general = parseInt(document.getElementById("general").value);
    const moral = parseInt(document.getElementById("moral").value);

    console.log("First Name : " + firstName);
    console.log("Last Name : " + lastName);
    console.log("English Mark : " + english);
    console.log("Tamil Mark : " + tamil);
    console.log("Maths Mark : " + maths);
    console.log("Science Mark : " + science);
    console.log("History Mark : " + history);
    console.log("Geography Mark : " + geography);
    console.log("General Mark : " + general);
    console.log("Moral Mark : " + moral);

    let total = english + tamil + maths + science + history + geography + general + moral;
    console.log("Total Mark Is : " + total);

    let average = (total / 800) * 100;
    console.log("Average Mark Is : " + average);

    document.getElementById("total_mark").value = total;
    document.getElementById("avg_mark").value = average;

    if (firstName === "" && lastName === "") {
        document.getElementById("grade").value = "ABSENT";
        document.getElementById("grade").style.color = "orange";
        document.getElementById("result").value = "-";
        document.getElementById("result").style.color = "orange";
        document.getElementById("total_mark").value = "-";
        document.getElementById("total_mark").style.color = "orange";
        document.getElementById("avg_mark").value = "NIL";
        document.getElementById("avg_mark").style.color = "orange";
    }
    else if (english < 35 || tamil < 35 || science< 35 || maths < 35 || history < 35 || geography < 35|| general< 35 || moral< 35) {
        document.getElementById("grade").value = "F";
        document.getElementById("grade").style.color = "red";
        document.getElementById("result").value = "FAIL";
        document.getElementById("result").style.color = "red";
    }
    else if (total >= 750) {
        document.getElementById("grad   e").value = "E";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }
    else if (total >= 700) {
        document.getElementById("grade").value = "A+";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }
    else if (total >= 600) {
        document.getElementById("grade").value = "A";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }
    else if (total >= 500) {
        document.getElementById("grade").value = "B";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }
    else if (total >= 400) {
        document.getElementById("grade").value = "C";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }
    else if (total >= 300) {
        document.getElementById("grade").value = "O";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").value = "PASS";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
    }

    else {
        document.getElementById("grade").value = "F";
        document.getElementById("grade").style.color = "red";
        document.getElementById("result").value = "FAIL";
        document.getElementById("result").style.color = "red";
        document.getElementById("total_mark").value = 0;
        document.getElementById("total_mark").style.color = "red";
        document.getElementById("avg_mark").value = 0.00;
        document.getElementById("avg_mark").style.color = "red";
    }
}

function selected_standard() {
    let standardValue = document.getElementById('standard');
    let values = standardValue.options[standardValue.selectedIndex].text;
    console.log("The selected Standard Is : " + values);
}

function selected_section() {
    let sectionValue = document.getElementById('section');
    let values = sectionValue.options[sectionValue.selectedIndex].text;
    console.log("The selected Section Is : " + values);
}



