export default async function(req,res){
  const { method} = req
  switch(method){
    case 'GET':
      try{
        res.status(200).json({
          message: 'success'
        })
      }catch(error){
        console.log(error)
      }
  }
}