$('#but').click(function () {
        let fieldRes = $('#someNum').val();

        if (fieldRes !== "") {

            let arr = new Array();

            for (let i of fieldRes) arr.push(i);

            let reverseData = arr.reverse();

            let resultToDiv = $('#answer').html(arr.join(''));

            $('form').css('display', 'none');

            $('<input type="button" value="reload"></button>').click(function () {
                window.location.reload()
            })
                .css({"background-color": "inherit", "height": "1.4em", "color": "white", "margin-left":"1em"})
                .appendTo('div');

        } else {
            alert('Введите данные');

        }
    }
);



