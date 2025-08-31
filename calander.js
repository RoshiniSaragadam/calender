let operator = '';

document.addEventListener("click", (e) => {
    const ip = document.getElementById("display");
    if (ip.value == "0") {
        ip.value = ""
    }
    if (e.target.type == "button") {
        if (e.target.value == "AC") {
            ip.value = '0'
        }
        if (e.target.value == "DE") {
            ip.value = ip.value.substr(0, ip.value.length - 1)
            if (ip.value == "") {
                ip.value = "0"
            }
        }

        if (['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '+', '-', '*', '.'].includes(e.target.value)) {
            ip.value = ip.value + e.target.value;
            if (['/', '+', '-', '*'].includes(e.target.value)) {
                operator = e.target.value;
            }

        }
        if (e.target.value == "=" && ip.value.length) {
            const [a, b] = ip.value.split(operator)
            let value = ""
            if (operator == "+") {
                value = Number(a) + Number(b)
            }
            if (operator == "-") {
                value = Number(a) - Number(b)
            }
            if (operator == "*") {
                value = Number(a) * Number(b)
            }
            if (operator == "/") {
                value = Number(a) / Number(b)
            }
            ip.value = String(value)
        }
    }
})