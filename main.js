

let theInput = document.querySelector('.get-repo input')
let button = document.querySelector('.get-button')
let showrepo = document.querySelector('.show-result')

button.onclick = function() {
    getrpos()
}


function getrpos(){
    if (theInput.value === ''){

        showrepo.innerHTML = `<span> Please Write your answer </span>`


    // }else{

        

    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((repos) => repos.json())
        .then((repo) => {

            showrepo.innerHTML = ''

            repo.forEach(repoo => {

                let mainDiv = document.createElement('div')

                let textDiv = document.createTextNode(repo.name)

                mainDiv.appendChild(textDiv)

                let url = document.createElement('a')

                let urltext = document.createTextNode("visit")

                url.appendChild(urltext)

                url.href = `https://api.github.com/users/${theInput.value}/${repo.name}`

                url.setAttribute('target', '_blank')

                mainDiv.appendChild(url)
                
                
                

                let starspan = document.createElement('span')

                let starText = document.createTextNode(`Stars: ${repoo.stargazers_count}`)

                starspan.appendChild(starText)

                mainDiv.appendChild(starspan)
                mainDiv.className = 'repo-box'


                
                showrepo.appendChild(mainDiv)
            });

        })
    }

}

//    ElzeroWebSchool