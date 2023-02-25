const container = document.getElementById('container')
const ulContainer1 = document.getElementById('ulContainer1')
const ulContainer2 = document.getElementById('ulContainer2')
const dataLoad = document.getElementById('dataLoad')


fetch(`https://restcountries.com/v3.1/all`)
  .then(res => res.json())
  .then(data => allData(data))

const allData = allData => {
  const datas = allData.slice(0, 9)
  datas.forEach((data, index) => {
    const langCodeArr = Object.values(data.languages)
    const div = document.createElement('div')
    div.classList.add('text-center')
    div.style.border = '2px solid red'
    div.style.margin = '10px'
    div.style.width = '18rem'
    div.style.padding = '20px 20px 6px'
    div.innerHTML = `
                <h3>Name: ${data.name.common}</h3>
                <h4>Region:${data.region}<h4>
                <h5>Capital:${data.capital[0]}<h5>
                <h6> Languages : ${langCodeArr} </h6>
                <img class="img-fluid" src=${data.flags.png}>
              `
    dataLoad.appendChild(div)
    
    liData(data.region)
  })
}
const liData = ele => {
  // console.log(ele)
  let arr=[]
  arr.push(ele)
  console.log(arr)
  const li = document.createElement('li');
  li.innerHTML = `
<a class="dropdown-item active">${ele}</a>
`
  ulContainer1.appendChild(li)
} 