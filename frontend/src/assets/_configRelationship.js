
import axios from 'axios'
let RELATIONSHIPString = ''

/* https://codepen.io/pvt5r486/pen/agNVKE
    Static smooth curves - World Cup Network - https://codepen.io/Ra1ny/pen/EmRKNm
    https://codepen.io/SchwartzWare/pen/XoZzLM
*/

export default async function configRelationship () {
  // console.log('configRelationship()')
  try {
    const response = await axios.get('http://localhost:5000/all-relationships')
    // console.log('iteresponseresponseresponsem', response.data.records)
    response.data.records.forEach(function (item, key) {
      // console.log('item', item)
      // console.log('key', key)
      // console.log('item._fields[0]', item._fields[0])
      if (key === 0) {
        RELATIONSHIPString = '{ "' + item._fields[0] + '": { "label": "title" }'
      } else {
        RELATIONSHIPString = RELATIONSHIPString + ',  "' + item._fields[0] + '": { "label": "title" }'
      }
    })
    RELATIONSHIPString = JSON.parse(RELATIONSHIPString + '}')
    return Object.create(RELATIONSHIPString)

    // console.log('employee', LABELS)
  } catch (err) {
    console.log('keine Relationships in der Datenabank')
  }
}
configRelationship()
