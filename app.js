var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = { "status": "", "mass": 0, "volume": 0, "gravity": 0, "inclination": 0}

function get_api_data(name) {
    var request = new XMLHttpRequest()

    request.open('GET', API_URL + name, true)
    request.onload = () => {
        var data = JSON.parse(this.response)

        if (request.status == 200) {
            information["status"] = "successful"
            information["mass"] = data.mass.massValue + " " + data.mass.massExponent + " kg"
            information["volume"] = data.vol.volValue + " " + data.vol.volExponent + " km3"
            information["gravity"] = data.gravity + " m/s2"
            information["inclination"] = data.axialTilt + " °"
        }
        request.send()
    }
}

function set_api_data(name, mass, volume, gravity, inclination) {
    if (information.status == "successful") {
        planeta_text.setAttribute('value', name)
        masa_text.setAttribute('value', "Masa: " + information.mass)
        volumen_text.setAttribute('value', "Volumen: " + information.volume)
        gravedad_text.setAttribute('value', "Gravedad: " + information.gravity)
        inclinacion_text.setAttribute('value', "Inclinacion: " + information.inclination)
    } else {
        planeta_text.setAttribute('value', name)
        masa_text.setAttribute('value', "Masa: " + mass + " kg")
        volumen_text.setAttribute('value', "Volumen: " + volume + " km3")
        gravedad_text.setAttribute('value', "Gravedad: " + gravity + " m/s2")
        inclinacion_text.setAttribute('value', "Inclinacion: " + inclination + " °")
    }
}

AFRAME.registerComponent('information', {
    init: function () {
        var sceneEl = this.el
        var datos = sceneEl.querySelector('#datos')
        var sol = sceneEl.querySelector('#Sun')
        var mercurio = sceneEl.querySelector('#Mercury')
        var venus = sceneEl.querySelector('#Venus')
        var tierra = sceneEl.querySelector('#Earth')
        var marte = sceneEl.querySelector('#Mars')
        var jupiter = sceneEl.querySelector('#Jupiter')
        var saturno = sceneEl.querySelector('#Saturn')
        var urano = sceneEl.querySelector('#Uranus')
        var neptuno = sceneEl.querySelector('#Neptune')

        sol.addEventListener('click', () => {
            var name = "Sun"
            get_api_data(name)
            setTimeout(() => { set_api_data("Sol", "1,989×10^30", "1,4123×10^18", "274", "7.25") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        mercurio.addEventListener('click', () => {
            var name = "Mercury"
            get_api_data(name)
            setTimeout(() => { set_api_data("Mercurio", "3,302×10^23", "6,083×10^10", "3,7", "0.03") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        venus.addEventListener('click', () => {
            var name = "Venus"
            get_api_data(name)
            setTimeout(() => { set_api_data("Venus", "4,869×10^24", "9,28x10^11", "8,87", "177.36") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        tierra.addEventListener('click', () => {
            var name = "Earth"
            get_api_data(name)
            setTimeout(() => { set_api_data("Tierra", "5,9736×10^24", "1,08321×10^12", "9,8", "23.4") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        marte.addEventListener('click', () => {
            var name = "Mars"
            get_api_data(name)
            setTimeout(() => { set_api_data("Marte", "6,4185×10^23", "1,6318×10^11", "3,72", "25.19") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        jupiter.addEventListener('click', () => {
            var name = "Jupiter"
            get_api_data(name)
            setTimeout(() => { set_api_data("Jupiter", "1,899×10^27", "1,4313×10^15", "24.79", "3.12") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        saturno.addEventListener('click', () => {
            var name = "Saturn"
            get_api_data(name)
            setTimeout(() => { set_api_data("Saturno", "5,688x10^26", "8,27x10^23", "10,44", "26.73") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        urano.addEventListener('click', () => {
            var name = "Uranus"
            get_api_data(name)
            setTimeout(() => { set_api_data("Urano", "8,686×10^25", "6,833×10^13", "8,69", "97.77") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });

        neptuno.addEventListener('click', () => {
            var name = "Neptune"
            get_api_data(name)
            setTimeout(() => { set_api_data("Neptuno", "1,024×10^26", "6,254×10^13", "11,15", "28.3") }, 500)
            datos.object3D.visible = true
            setTimeout(() => { datos.object3D.visible = false }, 5000)
        });
    }
});