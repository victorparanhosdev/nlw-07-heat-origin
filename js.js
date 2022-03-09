const MeuLink = {
    youtube: "maykbrito",
    facebook: "victorparanhoscosta",
    instagram: "victorparanhos_94",
    twitter: "victorparanhos1"
}
     



const ulz = document.getElementById("listademenu")

function ShowSocialMedia() {
    for(let li of ulz.children){
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${MeuLink[social]}`
              
    }
    
}

ShowSocialMedia()