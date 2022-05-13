import axios from 'axios';

export default axios.create({
 baseURL: 'http://api.yelp.com/v3/businesses',
 headers: {
   Authorization: 'Bearer e6HCyYudE3dlcdjOoJddaheLUja21N_rWVy5cgkWg4e690p3CPXZzg-FNz3uYcpKKGNN1GKRbX6CFQjAFqjHoPkaWiztSKK-G3RAEO1gIMpZ57ZWlGCcMCNuC1R9YnYx'
 }
})