
function concate() {
    const nums = document.getElementById('numinp').value;

    if (nums === ``) {
        alert("Please enter numbers");
        return;
    }

    let numsArr = nums.split(',');

    let result = "'" + numsArr.join("','") + "'";

    console.log(result);

    document.getElementById('concbox').innerText = result;

}

function CopyNumbers() {
    let copiedNums = document.getElementById('concbox').value;
    if (copiedNums === ``) {
        alert("Please click on 'Concatenate' button first");
        return;
    }
    else {
        navigator.clipboard.writeText(copiedNums);
        alert("Copied to clipboard");
    }

}
