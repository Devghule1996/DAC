let url =  'http://localhost:8010'
function LOAD() {
    $.ajax({
        url: url+"/fetch",
        type: "GET",
        success: (posRes) => {
            console.log(posRes)
            let x = ``
            x = x + `<table border = 1px    
                            cellspacing = 10px
                            cellpadding = 10px
                            align = center>
                    <thead>
                        <tr>
                     
                           
                            <th>p_id</th>
                            <th>p_name</th>
                            <th>p_cost</th>
                            
                        </tr>
                    </thead>
                    <tbody>
            `
            for (let i = 0; i < posRes.length; i++) {
                x = x + `
                    <tr>
                        
                      
                        <td>${posRes[i].p_id}</td>
                        <td>${posRes[i].p_name}</td>
                        <td>${posRes[i].p_cost}</td>
                        </tr>
                `
            }
            x = x + `</tbody>
                </table>`
            document.getElementById('op').innerHTML = x
        },
        error: (errRes) => {
            console.log(errRes)
        }
    })
}
//LOAD()
$(document).ready(() => {
    $('#getData').click(() => {
        LOAD()
    })
    $('#send').click((e) => {
        e.preventDefault()  //preventing default behaviour of browser
        let data = {
           
           
            "p_id": parseInt(document.getElementById("p_id").value),
            "p_name": document.getElementById("p_name").value,
            "p_cost": parseInt(document.getElementById("p_cost").value)
           }
        $.ajax({
            url: url+"/Insert",
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
        LOAD()
    })
    $('#update').click((e) => {
        e.preventDefault()
       
        let data = {
          
            
             
            "p_id": parseInt(document.getElementById("p_id").value),
            "p_name": document.getElementById("p_name").value,
            "p_cost": parseInt(document.getElementById("p_cost").value)

       
        }
        $.ajax({
            url: url + "/update",
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
    $('#delete').click((e) => {
        e.preventDefault()
      let obj = {
        p_id : parseInt(document.getElementById('p_id').value)
      }
        $.ajax({
            url: url + "/delete",
            type: 'POST',
            data: obj,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
})

