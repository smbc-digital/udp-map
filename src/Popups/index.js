const airport_public_safety_zonePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-plane" aria-hidden="true"></i><p class="title">Airport Public Safety Zone</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const ancientmonumentPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-flag" aria-hidden="true"></i><p class="title">Ancient Monuments</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">National Monument No: ${feature.properties.national_monument_no}</p>
  
  </div>`
 
  layer.bindPopup(content)
 } 

 const conservationareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-certificate" aria-hidden="true"></i><p class="title">Conservation Areas</p>
  <p></p>
  <p class="info">${feature.properties.cons_area}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-briefcase" aria-hidden="true"></i><p class="title">Employment Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Name: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const employmentproposedPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-briefcase" aria-hidden="true"></i><p class="title">Employment Proposed</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Name: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 } 

 const prowPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-map-signs" aria-hidden="true"></i><p class="title">Definitive Rights of Way</p>
  <p></p>
  <p class="info">PROW Number: ${feature.properties.row}</p>
  <p class="info">Type: ${feature.properties.type}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const floodzonesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tint" aria-hidden="true"></i><p class="title">Flood Zones</p>
  <p></p>
  <p class="info">Risk Level: ${feature.properties.risk_level}</p>
  <p class="info">Type: ${feature.properties.type}</p>
  <p class="info">Source: ${feature.properties.source}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-pagelines" aria-hidden="true"></i><p class="title">Green Belt</p>

  </div>`
 
  layer.bindPopup(content)
 }

 const greenbeltmedsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-building-o" aria-hidden="true"></i><p class="title">Green Belt MEDS</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const generalPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">General</p>
  <p></p>
  <p class="info">Name: ${feature.properties.tquniqueid}</p>
  <p class="info">Policy: ${feature.properties.policy_1}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const greenchainPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Green Chain</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const gravel_aosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Gravel</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const housingsitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Housing Sites</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const landscapecharacterareaPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Landscape Character Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  airport_public_safety_zonePopup,
  ancientmonumentPopup,
  conservationareaPopup,
  employmentareasPopup,
  employmentproposedPopup,
  prowPopup,
  floodzonesPopup,
  greenbeltPopup,
  greenbeltmedsPopup,
  generalPopup,
  greenchainPopup,
  gravel_aosPopup,
  housingsitesPopup,
  landscapecharacterareaPopup
}