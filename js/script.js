
async function watchUsers (){
    let usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    
    let persons = await usersResponse.json()
    
    
    for(let person of persons){
        document.querySelector('main').innerHTML += `<div class="card bg-primary border border-solid text-white mb-3 mx-2 text-center " style="width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.pinimg.com/originals/4d/2a/ba/4d2abaeacc14afc60dc9eda128d2a869.jpg" class="img-fluid rounded-start h-100" alt="User">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-dark ">'T'iao a tutti, io 'T'ono ${person.name} ${person.username}</h5>
              <p class="card-text">Provengo da "${person.address.street}" in "${person.address.city}" ed ho un 'T'ito web che si chiama "${person.website}". Per info contattatemi in questo indiri'TT'o e-mail: "${person.email}" o al numero: "${person.phone}. Gra'T'ie per la vostra atten'T'ione."</p>
              <p class="card-text "><small class="text-info">Last updated ${new Date()} ago</small></p>
            </div>
          </div>
        </div>
      </div>`
    }
}


window.onload = () => {
  watchUsers ()
   
}
