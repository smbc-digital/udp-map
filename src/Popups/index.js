const airport_public_safety_zonePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-plane" aria-hidden="true"></i><p class="title">Airport Public Safety Zone</p>
  <p></p>
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
  
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Landscape Character Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const localnaturereservePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Local Nature Reserve</p>
  <p></p>
  <p class="info">Name: ${feature.properties.reserve_na}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

const localopenspacePopup = (feature, layer) => {
  
const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Local Open Space</p>
<p></p>
<p class="info">ID: ${feature.properties.id}</p>
<p class="info">Name: ${feature.properties.name}</p>
<p class="info">Policy: ${feature.properties.policy}</p>
  
</div>`
 
layer.bindPopup(content)
}

const localwildlifesitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-pagelines" aria-hidden="true"></i><p class="title">Local Wildlife Sites</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
    
  </div>`
   
  layer.bindPopup(content)
  }

const metrolinkcorridorPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-subway" aria-hidden="true"></i><p class="title">Metrolink Corridor</p>
  <p></p>
  <p class="info">Chapter: ${feature.properties.chapter}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
      
  </div>`
     
  layer.bindPopup(content)
  }

const m60gatewaysitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">M60 Gateway Sites</p>
  <p></p>
  <p class="info">Chapter: ${feature.properties.chapter}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
     
  </div>`
     
  layer.bindPopup(content)
  }

const parkgardenofhistoricinterestPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Park or Garden of Historic Interest</p>
  <p></p>
  <p class="info">Site: ${feature.properties.site}</p>
     
  </div>`
       
  layer.bindPopup(content)
  }

const pgasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-file-text" aria-hidden="true"></i><p class="title">Policy Guidance Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
     
  </div>`
       
  layer.bindPopup(content)
  }

const predominantlyresidentialPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Predominantly Residential Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
       
  </div>`
         
  layer.bindPopup(content)
  }

const reliefroadcorridorPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Relief Road Corridor</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
         
  </div>`
           
  layer.bindPopup(content)
  }

const sandaosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Sand - Area of Search</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
           
  </div>`
             
  layer.bindPopup(content)
  }

const sandgritaosPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-search" aria-hidden="true"></i><p class="title">Sandstone/Gritstone - Area of Search</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.name}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
             
  </div>`
               
  layer.bindPopup(content)
  }

const shopfrontagesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-basket" aria-hidden="true"></i><p class="title">Shop Frontages</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Name: ${feature.properties.policyname}</p>
  <p class="info">Policy: ${feature.properties.policysitename}</p>
               
  </div>`
                 
  layer.bindPopup(content)
  }

const shoppingtcPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p class="title">Shopping TC</p>
  <p></p>
  <p class="info">Area: ${feature.properties.shoppingareas}</p>
  <p class="info">Policy: ${feature.properties.policy_1}</p>
                 
  </div>`
                   
  layer.bindPopup(content)
  }

const shoppingareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p class="title">Shopping Areas</p>
  <p></p>
  <p class="info">Name: ${feature.properties.policysitename}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                   
  </div>`
                     
  layer.bindPopup(content)
  }

const sbiPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-leaf" aria-hidden="true"></i><p class="title">Sites of Biological Importance</p>
  <p></p>
  <p class="info">Site Name: ${feature.properties.site_name}</p>
  <p class="info">Reference Number: ${feature.properties.reference_number}</p>
                     
  </div>`
                       
  layer.bindPopup(content)
  }

const sssiPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-flask" aria-hidden="true"></i><p class="title">Sites of Special Scientific Interest</p>
  <p></p>
  <p class="info">Site Name: ${feature.properties.sssi_name}</p>
  <p class="info">Site Name: ${feature.properties.sssi_area}</p>
  <p class="info">Designation Status: ${feature.properties.designation_status}</p>
                       
  </div>`
                         
  layer.bindPopup(content)
  }

const strategicopenspacePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Strategic Open Space</p>
  <p></p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                         
  </div>`
                           
  layer.bindPopup(content)
  }

const strategicrecreationroutesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">Strategic Recreation Routes</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
  <p class="info">Policy: ${feature.properties.policy}</p>
                           
  </div>`
                             
  layer.bindPopup(content)
  }

const towncentreareasPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-building" aria-hidden="true"></i><p class="title">Town Centre Areas</p>
  <p></p>
  <p class="info">ID: ${feature.properties.id}</p>
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
  landscapecharacterareaPopup,
  localnaturereservePopup,
  localopenspacePopup,
  localwildlifesitesPopup,
  metrolinkcorridorPopup,
  m60gatewaysitesPopup,
  parkgardenofhistoricinterestPopup,
  pgasPopup,
  predominantlyresidentialPopup,
  reliefroadcorridorPopup,
  sandaosPopup,
  sandgritaosPopup,
  shopfrontagesPopup,
  shoppingtcPopup,
  shoppingareasPopup,
  sbiPopup,
  sssiPopup,
  strategicopenspacePopup,
  strategicrecreationroutesPopup,
  towncentreareasPopup
}