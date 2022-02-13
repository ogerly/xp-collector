
import axios from 'axios'
let LABELString = ''

/* https://codepen.io/pvt5r486/pen/agNVKE
    Static smooth curves - World Cup Network - https://codepen.io/Ra1ny/pen/EmRKNm
    https://codepen.io/SchwartzWare/pen/XoZzLM
*/

export default async function configLabels () {
  try {
    const response = await axios.get('http://localhost:5000/all-labels')

    response.data.records.forEach(function (item, key) {
      if (key === 0) {
        LABELString = '{ "' + item._fields[0][0] + '": { "label": "name" }'
      } else {
        LABELString = LABELString + ',  "' + item._fields[0][0] + '": { "label": "name" }'
      }
    })
    LABELString = JSON.parse(LABELString + '}')
    return Object.create(LABELString)

    // console.log('employee', LABELS)
  } catch (err) {
    console.log('keine Labels in der Datenabank')
  }
}
configLabels()
