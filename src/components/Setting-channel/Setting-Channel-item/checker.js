function is_valid_datalist_value(idDataList, inputValue) {
    var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
    if (option != null) {
        return option.value.length > 0;
    }
    return false;
}

let cb1 = document.querySelector('#cb1');
let cb2 = document.querySelector('#cb2');
let cb3 = document.querySelector('#cb3');

cb1.onchange = function () {
    cb1.style.cssText = is_valid_datalist_value('comboBox-1', document.getElementById('cb1').value) ?
        'background-color: rgb(162, 247, 201)' : 'background-color: rgb(239, 182, 187)';
};

cb2.onchange = function () {
    cb2.style.cssText = is_valid_datalist_value('comboBox-2', document.getElementById('cb2').value) ?
        'background-color: rgb(162, 247, 201)' : document.getElementById('cb2').value == "" ?
            'background-color: rgb(239, 182, 187)' : 'background-color: rgb(224, 247, 162);';
};

cb3.onchange = function () {
    cb3.style.cssText = is_valid_datalist_value('comboBox-3', document.getElementById('cb3').value) ?
        'background-color: rgb(162, 247, 201)' : 'background-color: rgb(239, 182, 187)';
};