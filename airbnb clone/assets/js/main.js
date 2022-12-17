// const searchBar = () =>{
//     const header = document.getElementById('sch')
//     this.scrollY >= 30 ? header.classList.add('position') 
//                        : header.classList.remove('position')
// }
// window.addEventListener('scroll', scrollHeader)

// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark-mode")
//   }

let scrollHeader = () =>{
    let header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');

        setInterval(scrollHeader , 4000)
}
window.addEventListener('scroll', scrollHeader);


let searchBar = () =>{
    let srchbar = document.getElementById("srch")
    this.scrollY >= 50 ? srchbar.classList.add('srchclass')
                        : srchbar.classList.remove('srchclass');
    setInterval (searchBar , 3000)

}
window.addEventListener('scroll', searchBar);



let headerSubsection = () =>{
    let headerSubSection = document.getElementById('ths')
    this.scrollY >=  50 ? headerSubSection.classList.add('display')
                  :headerSubSection.classList.remove('display');


}

window.addEventListener('scroll' , headerSubsection)
