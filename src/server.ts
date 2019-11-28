import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  
  app.get( "/filteredimage/", async ( req, res ) => {
  //    1. validate the imageUrl query
    let imageUrl:string = req.query.imageUrl;
      if (!imageUrl){
        return res.status(200).send("name required");
      }
      try{
  //    3. send the resulting file in the response
        const filterPath = await filterImageFromURL(imageUrl);
  //    4. deletes any files on the server on finish of the response      
        res.sendFile(filterPath, () => deleteLocalFiles([filterPath]));
      }catch(e) {
        res.sendStatus(422).send(`wrong`);
  
      }
  });


  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?imageUrl={{image}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();