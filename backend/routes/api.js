import express from 'express';
import Item from '../models/Items.js';
const router = express.Router();


  // Get all items
  router.get('/get-items', async (req, res) => {
    try {
      const items = await Item.find(); // Use async/await to handle promises
      if (items.length === 0) {
        return res.status(404).json({ msg: 'No items found' });
      }
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  });

  // Add an item
  router.post('/add-items', (req, res) => {
    const newItem = new Item({
      category: req.body.category,
      specials: req.body.specials,
      name: req.body.name,
      realPrice: req.body.realPrice,
      price: req.body.price,
      productDescription: req.body.productDescription,
      mainImg: {
        src: req.body.mainImg.src,
        alt: req.body.mainImg.alt
      },
      Img2: {
        src: req.body.Img2.src,
        alt: req.body.Img2.alt
      },
      Img3: {
        src: req.body.Img3.src,
        alt: req.body.Img3.alt
      },
      Img4: {
        src: req.body.Img4.src,
        alt: req.body.Img4.alt
      },
      Img5: {
        src: req.body.Img5.src,
        alt: req.body.Img5.alt
      },
      Img6: {
        src: req.body.Img6.src,
        alt: req.body.Img6.alt
      },
      highlights: req.body.highlights,
      colors: req.body.colors,
      availableSizes: req.body.availableSizes
    });

    newItem.save()
      .then(item => res.json(item))
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the item.' });
      });
  });



  // Delete an item 

  router.delete("/delete-item/:id", async (req, res) => {
    try {
      const product = await Item.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }
      await product.deleteOne();
      res.json({ msg: 'Product removed' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  });

  //Find By ID

  router.get("/find-item/:id", async (req, res) => {
    try {
      const product = await Item.findById(req.params.id);
      res.json(product)
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }
    }
    catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  })

  router.put("/update-item/:id", async (req, res) => {
    try {
      const {
        category,
        specials,
        name,
        realPrice,
        price,
        productDescription,
        mainImg,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        highlights,
        colors,
        availableSizes,
      } = req.body;

      // Creating a new object to update the item
      const newItem = {
        category,
        specials,
        name,
        realPrice,
        price,
        productDescription,
        mainImg,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        highlights,
        colors,
        availableSizes,
      };

      let product = await Item.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }

      // Use findByIdAndUpdate to update the item
      product = await Item.findByIdAndUpdate(req.params.id, { $set: newItem }, { new: true });
      res.json({ product });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });



export default router;