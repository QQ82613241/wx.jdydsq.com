var archiveId = $("#archiveId").text();

$.ajax({
    // url: '/index.php?c=archive&a=uploadImage',
    url: '/index.php?p=api&c=core&a=updateClick&archiveId=' + archiveId,
    type: 'POST',
    // data: formData,
    // //这两个设置项必填
    // contentType: false,
    // processData: false,
    // dataType: 'text',
    // success: function (data) {
    //     console.log(data)
    //     var srcPath = data;
    //     console.log();
    //     //注意这里的路径要根据自己的储存文件的路径设置
    //     $('#thumbImg').attr('src', srcPath);
    //     $('#litpic').val(srcPath);
    // }
})
