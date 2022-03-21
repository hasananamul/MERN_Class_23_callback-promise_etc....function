import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

/**
 * Get ellements
 */
const devs_form = document.getElementById("devs_form");
const alert_msg = document.querySelector(".alert_msg");
const table_list = document.querySelector(".table_list");

devs_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formdata = new FormData(devs_form);
  let data = Object.fromEntries(formdata);
  let { first_name, last_name, location, image, gender } = data;
  if (
    first_name == "" ||
    last_name == "" ||
    location == "" ||
    image == "" ||
    gender == ""
  ) {
    alert_msg.innerHTML = Alert.danger("All field are required !");
  } else {
    Storage.set_data("devs", data);
    console.log(data);
    devs_form.reset();
  }
  show_data_table();
  window.location.reload();
});

show_data_table();
function show_data_table() {
  let table = "";
  let all_ls_data = Storage.get_data("devs");
  all_ls_data.map((data, index) => {
    let { first_name, last_name, location, image, gender } = data;

    table += `
     <tr>
              <td> ${index + 1} </td>
              <td> ${first_name} </td>
              <td> ${last_name} </td>
              <td> ${location} </td>
              <td> ${gender} </td>
              <td> HTML,CSS,JS </td>
              <td> <img width="40px" height="30px" src="${
                image
                  ? image
                  : ` https://mpng.subpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg `
              }"> </td>
              <td> <a href="#"><i class=" p-1 text-warning fa fa-pencil" aria-hidden="true"></i></a>
                <a class="delete_data" href="#"><i class="p-1 text-danger fa fa-trash-o" aria-hidden="true"></i></a>
                <a class="show_data" data-bs-toggle="modal" data-bs-target="#modelId"  href="#"> <i class="p-1 text-success fa fa-eye" aria-hidden="true"></i></a>
              </td>
            </tr>
    
    `;
  });

  table_list.innerHTML = table;
}

/**
 * Single view devs data
 */
const show_data = document.querySelectorAll(".show_data");
show_data.forEach((element, id) => {
  element.addEventListener("click", function () {
    let devs_data = Storage.get_data("devs");
    const modal_content = document.querySelector(".modal-content");
    modal_content.innerHTML = `
      
      <div class="modal-header">
          <h5 class="modal-title">Developer Single Data</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="center">
            <img class="card-img-top" src="${devs_data[id].image}" alt="">
            <div class="card-body">
              <h4 class="card-title"> First Nmae : ${devs_data[id].first_name}</h4>
              <h4 class="card-title"> Last Nmae : ${devs_data[id].last_name} </h4>
              <p class="card-text"> Location : ${devs_data[id].location} </p>
              <p class="card-text"> Skill : HTML,CSS,JS,MERN Stack
               </p>
              <p class="card-text"> Gender : ${devs_data[id].gender} </p>
            </div>
          </div>
        </div>
      `;
  });
});

/**
 * Delete devs data
 */
const delete_data = document.querySelectorAll(".delete_data");
delete_data.forEach((element, id) => {
  element.addEventListener("click", function () {
    let devs_data_del = JSON.parse(localStorage.getItem("devs"));
    devs_data_del.splice(id, 1);
    localStorage.setItem("devs", JSON.stringify(devs_data_del));
    show_data_table();
    location.reload();
  });
});
