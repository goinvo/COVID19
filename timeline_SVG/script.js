const pathData = [
  {
    id:'path-b',
    originalPath:'M614 37.6h504.7',
    mobilePath:'M 494.1 37.6h427.8c14 0 28 14 28 28v170.3c0 14-14 28-28 28H68.6a28 28 0 00-28 28v45.7c0 15.9 13.6 28 28 28H97'
  },
  {
    id:'path-d',
    originalPath:'M1435.9 37.6h376.3c16 0 28 14 28 28v170.3c0 14-14 28-28 28H188.6a28 28 0 00-28 28v45.7c0 14 14 28 28 28H217',
    mobilePath:'M414.3 365.6H922c14 0 28 14 28 28v170.3c0 14-14 28-28 28H69a28 28 0 00-28 28v45.7c0 14 14 28 28 28h28.4'
  },
  {
    id:'path-g',
    originalPath:'M778 365.6h340.8',
    mobilePath:'M658.1 693.7h263.2c14 0 28 14 28 28v214c0 14-14 28-28 28H68.6a28 28 0 00-28 28v55.8c0 14 14 28 28 28h28.3'
  },
  {
    id:'path-h',
    originalPath:'M1118.8 365.6h693.4c14 0 28 9.5 28 28v214c0 14-14 28-28 28H188.6a28 28 0 00-28 28v55.8c0 14 14 28 28 28h28.3',
    mobilePath:'M96.9 1075.5h824.8c14 0 28 14 28 28l-0 212.2c0 14-14 28-28 28H68.6a28 28 0 00-28 28v55.8c0 14 14 28 28 28h28.3'
  },
  {
    id:'path-j',
    originalPath:'M804.9 747.4h323.3',
    mobilePath:'M664.9 1455.5h257.2c14 0 28 14 28 28v248c0 14-14 28-28 28H68.6a28 28 0 00-28 28v54c0 14 14 28 28 28H85'
  },
  {
    id:'path-l',
    originalPath:'M1447 747.4h365.2c14 0 28 9.5 28 28v248.1c0 14-14 28-28 28H188.6a28 28 0 00-28 28v54c0 14 14 28.7 28 28H200' ,
    mobilePath:'M403.5 1869.5h517.3c14 0 28 14 28 28v208c0 14-14 28-28 28H68.6a28 28 0 00-28 28v54c0 14 14 28 28 28H80'
  },
]
const svg = document.getElementsByTagName('svg')[0]
const originalViewBox = svg.getAttribute('viewBox')
const mediaQuery = matchMedia('(max-width: 768px)')

adaptSVG = function(){
  for (i = 0; i < pathData.length; i++) {
    let pathId = pathData[i].id
    let originalPathData = pathData[i].originalPath
    let mobilePathData = pathData[i].mobilePath
    console.log(mobilePathData)
    let path = document.getElementById(pathId)

    if (mediaQuery.matches) {
        svg.setAttribute('viewBox', '0 0 1000 2450')
        path.setAttribute('d', mobilePathData )

    } else {
        svg.setAttribute('viewBox', originalViewBox)
        path.setAttribute('d', originalPathData)
    }
  }
}
window.onload = adaptSVG
svg.addEventListener('SVGLoad', adaptSVG, true)
mediaQuery.addListener(adaptSVG)
