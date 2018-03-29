document.designMode = 'on';
function copyText(){
    document.designMode = 'on';
    var welp = document.getElementById('welp');
    welp.select();
    var res = document.execCommand('Copy');

    console.log('he?', res);
}