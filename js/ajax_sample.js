// let number = 0;
// const titleArea = document.getElementById("title");
// const contentArea = document.getElementById("content");
// const videoArea = document.getElementById("video");
// const button = document.getElementById('btn');


// // function getData() {
// //   // 1.XMLHttpRequestオブジェクトを生成する
// //   const request = new XMLHttpRequest();
// //   // 2.XMLHttpRequestオブジェクトにイベントハンドラを設定して、通信時の処理を設定する
// //   request.onreadystatechange = function () {
// //     if (request.readyState == 4) {
// //       if (request.status == 200) {
// //         // console.log(request.response);
// //         document.getElementById("title").innerHTML = request.response[0].title;
// //       }
// //     }
// //   }
// //   // 3.リクエストを送信
// //   request.open("GET", "ajax.json");
// //   request.responseType = "json";
// //   request.send(null);
// // }

// // window.onload = getData;


// function getData() {
//   button.addEventListener('click', e => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//       if (request.readyState == 4) {
//         if (request.status == 200) {
//           titleArea.innerHTML = request.response[number].title;
//           contentArea.innerHTML = request.response[number].content;
//           videoArea.setAttribute("src", request.response[number].url);
//           number == 2 ? number = 0 : number++;
//         }
//       }
//     }
//     request.open("GET", "ajax.json");
//     request.responseType = "json";
//     request.send(null);
//   })
// }

// window.onload = getData;


// $.ajax('ajax.json', {
//   type: 'GET',
//   success: function (data, status, xhr) {
//     console.log(data, status, xhr);
//   },
//   error: function (xhr, status, errorThrown) {
//     console.log(xhr, status, errorThrown);
//   },
// })

// $(function() {
//   const button = $("#btn");
//   const videoArea = $("#video");
//   const titleArea = $("#title");
//   const contentArea = $("#content");
//   let number = 0;
//   function getData() {
//     button.click(function() {
//       $.ajax('ajax.json', {
//         type: 'GET',
//         success: function(data) {
//           titleArea.html(data[number].title);
//           contentArea.html(data[number].content);
//           videoArea.attr('src', data[number].url);
//           number == 2 ? number = 0 : number++;
//         },
//       })
//     });
//   };
//   getData();
// })

$(function () {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;

  function getData() {
    return $.ajax('ajax.json', {
      // success: function(data) {
      //   return data;
      // }
      type: 'GET',
    })
  };
  function changeVideo() {
    button.click(function(){
      getData().then(function(data){ 
        videoArea.html(data[number].url);
        titleArea.html(data[number].title);
        contentArea.html(data[number].content);
        number == 2 ? number = 0 : number++;
      })
    });
  };
  // function changeVideo() {
  //   button.click(function () {
  //     getData().then(function(data) {
  //       videoArea.html(data[number].url);
  //       titleArea.html(data[number].title);
  //       contentArea.html(data[number].conetnt);
  //       number == 2 ? number = 0 : number++
  //     })
  //     // const videoData = getData();
  //     // debugger
  //   });
  // };
  // function changeVideo() {
  //   button.click(function () {
  //     const videoData = getData();
  //     debugger
  //     videoArea.html(videoData[number].url);
  //     titleArea.html(videoData[number].title);
  //     contentArea.html(videoData[number].conetnt);
  //     number == 2 ? number = 0 : number++;
  //   });
  // };
  changeVideo();
})

// function sayHello() {
//   const d = new $.Deferred;
//   setTimeout(function () {
//     console.log('Hello!');
//     d.resolve();
//   }, 1000);
//   return d.promise();
// }

// function sayGoodBye() {
//   console.log('GoodBye!');
// }

// // sayHello();
// // sayGoodBye();
// sayHello().done(sayGoodBye);

// function positiveNumber(num) {
//   const d = new $.Deferred;
//   setTimeout(function () {
//     if (num > 0) {
//       d.resolve();
//     } else {
//       d.reject('Please enter a positive number!');
//     }
//   }, 1000);
//   return d.promise();
// }
// function sayGood() {
//   console.log('Good!');
// }
// // positiveNumber(10)
// //   .done(sayGood)
// //   .fail(function (e) {
// //     console.log(e);
// //   })

// positiveNumber(1).then(sayGood, function (e) {
//   console.log(e);
// })


