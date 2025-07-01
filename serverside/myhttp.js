let res = {
    end(){
        console.log('response ended')
    }
}
let req= {}
export default {
    createServer:(callback)=>{
        return {
            listen:function(port){
                console.log(`listening on port: ${port}`)
                callback(req,res)

        }}
}}
