let app, app2;


    app = new Vue(
    {
        el: '#app',
        data: 
        {
          message: 'Hello Vue!',
          seen: true
        }
    })

    app.seen = false;


    app2 = new Vue(
        {
            el: '#app-2',
            data: 
            {
              message: 'You visit this content in ' + new Date().getSeconds(),
              seen: true
            }
        })
    
    app2.seen = false;


    document.querySelector("#app-2").addEventListener("mouseover", function()
    {
        app2.message = 'You visit this content in ' + new Date().getSeconds()
    })