const airport_public_safety_zoneStyle = {
    color: '#000',
    weight: 2,
    opacity: 1,
    fillColor: '#252525',
    fillOpacity: 0.25
}

const ancientmonumentStyle = {
    color: '#cb181d',
    weight: 2,
    opacity: 1,
    fillColor: '#fb6a4a',
    fillOpacity: 0.25
}

const conservationareaStyle = {
    color: '#67000d',
    weight: 2,
    opacity: 1,
    fillColor: '#a50f15',
    fillOpacity: 0.25
}

const employmentareasStyle = {
    color: '#6a51a3',
    weight: 2,
    opacity: 1,
    fillColor: '#9e9ac8',
    fillOpacity: 0.25
}

const employmentproposedStyle = {
    color: '#feb24c',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25
}

const prowStyle = {
    color: '#006d2c',
    weight: 4,
    opacity: 1,
    fillColor: '#fec44f',
    fillOpacity: 0,
    dashArray: '7,7,7',
    dashOffset: '0'
}

function getColor_floodzones(d) {
    switch  (d) {   case 'Zone2'    :
                        return '#8dd3c7'    
                    case 'Zone3'    :
                        return '#80b1d3'    
                }
    }

function floodzonesStyle (feature) {
return {
    color: getColor_floodzones (feature.properties.type),
    weight: 2,
    opacity: 1,
    fillColor: getColor_floodzones (feature.properties.type),
    fillOpacity: 0.25
    }
}

const greenbeltStyle = {
    color: '#b3de69',
    weight: 2,
    opacity: 1,
    fillColor: '#b3de69',
    fillOpacity: 0.25
}

const greenbeltmedsStyle = {
    color: '#e7298a',
    weight: 2,
    opacity: 1,
    fillColor: '#df65b0',
    fillOpacity: 0.25
}

const generalStyle = {
    color: '#737373',
    weight: 2,
    opacity: 1,
    fillColor: '#bdbdbd',
    fillOpacity: 0.25
}

const greenchainStyle = {
    color: '#00441b',
    weight: 2,
    opacity: 1,
    fillColor: '#006d2c',
    fillOpacity: 0.25
}

const gravel_aosStyle = {
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#525252',
    fillOpacity: 0.25
}

const housingsitesStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#fc9272',
    fillOpacity: 0.25
}

const landscapecharacterareaStyle = {
    color: '#000000',
    weight: 2,
    opacity: 1,
    fillColor: '#fc9272',
    fillOpacity: 0
}

export {
        airport_public_safety_zoneStyle,
        ancientmonumentStyle,
        conservationareaStyle,
        employmentareasStyle,
        employmentproposedStyle,
        prowStyle,
        floodzonesStyle,
        greenbeltStyle,
        greenbeltmedsStyle,
        generalStyle,
        greenchainStyle,
        gravel_aosStyle,
        housingsitesStyle,
        landscapecharacterareaStyle
    }