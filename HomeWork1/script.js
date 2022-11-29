let userName=prompt("Adınızı Giriniz")
let info=document.querySelector("#info")
info.innerHTML=`Merhaba, ${userName}! Hoş Geldin!`

let clock=document.querySelector("#clock")


let tarih=new Date()
let date=tarih.getDate()
let saat=tarih.getHours()
let dakika=tarih.getMinutes()
let saniye=tarih.getSeconds()
let haftagun=tarih.getDay()

let sallama="29 kasım salı 2021 14:19"
let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

let zaman=`  ${saat}:${dakika}:${saniye} ${gunler[haftagun]}`

clock.innerHTML=zaman