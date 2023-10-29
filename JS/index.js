
function concate() {
    const nums = document.getElementById('textBoxForNumbers').value;

    let numsArr = nums.split(',');

    let result ="'" + numsArr.join("','") + "'";
 
    console.log(result);

    document.getElementById('displayNumbers').innerText = result;

}

function CopyNumbers() {
    let copiedNums =  document.getElementById('displayNumbers').innerText;
    if (copiedNums == "") {
        alert("Please click on 'Concatenate' button first");
        return;
    }
    navigator.clipboard.writeText(copiedNums);
    alert("Copied to clipboard");
}
