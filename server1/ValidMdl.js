// const valids = (schema)   => {
//     async(req, resp, next) =>{

//         const body = req.body;

//         try {
//             await schema.validate(body)
//             // next();
//             return next();

            
//         } catch (error) {
//             resp.status(400).json({message  : error})
            
//         }

//     }

// }


// export default valids;

const valids = (schema) => {
  return async (req, res, next) => {
    const body = req.body;
    try {
      await schema.validate(body);
      next(); // ✅ only once
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};

export default valids;
