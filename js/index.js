function gitAPI (user) {
fetch(`https://api.github.com/search/users?q=${user}`).then(res=>res.json()).then(json => json.items.forEach(renderGitUser))
}
document.querySelector('#github-form').addEventListener('submit', (e) => {
e.preventDefault();
gitAPI(e.target.search.value)
document.querySelector('#user-list').innerHTML = ''
})


function renderGitUser (user) {

    let hT = document.createElement('h2');
    let img = document.createElement('img')
    let li = document.createElement('li')

    img.src = user.avatar_url
    hT.textContent = user.login
    li.textContent = user.html_url

    document.querySelector('#user-list').append(hT, img, li)

    img.addEventListener('click', () => clickThing(user.login)

    )
}

function renderRepos(user) {
   let li = document.createElement('li')
   li.textContent = user.archive_url

   document.querySelector('#user-list').append(li)
}

function clickThing (user) {
    
    fetch(`https://api.github.com/users/${user}/repos`).then(res => res.json()).then(json => json.forEach(renderRepos))

}

// avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4"
// events_url: "https://api.github.com/users/octocat/events{/privacy}"
// followers_url: "https://api.github.com/users/octocat/followers"
// following_url: "https://api.github.com/users/octocat/following{/other_user}"
// gists_url: "https://api.github.com/users/octocat/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/octocat"
// id: 583231
// login: "octocat"
// node_id: "MDQ6VXNlcjU4MzIzMQ=="
// organizations_url: "https://api.github.com/users/octocat/orgs"
// received_events_url: "https://api.github.com/users/octocat/received_events"
// repos_url: "https://api.github.com/users/octocat/repos"
// score: 1
// site_admin: false
// starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/octocat/subscriptions"
// type: "User"
// url: "https://api.github.com/users/octocat"
// __proto__: Object