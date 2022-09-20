//type as type 

type Product = {
    //required fields and optional fields
    id: number
    //optional properties
    name?: string
    qty?: number
    inStock?: boolean
    category?: "Food" | "Electronics" | "Others"

}

let product: Product = {
    id: 1,
    name: 'Phone',
    qty: 100,
    inStock: true
}
//here we have only two properties, still ts compiler gives error, ts compiler looks all properties from the type class must present in the object defintion
let newProduct: Product = {
    id: 1,
    inStock: false,
    category: "Electronics"
}