import mongoose, { model } from 'mongoose';

const ItemSchema = new mongoose.Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId
  },
  availableQty: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    minItems: 1,
    maxItems: 10
  },
  specials: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  realPrice: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  mainImg: {
    src: String,
    alt: String
  },

  Img2: {
    src: String,
    alt: String
  },
  Img3: {
    src: String,
    alt: String
  },
  Img4: {
    src: String,
    alt: String
  },
  Img5: {
    src: String,
    alt: String
  },
  Img6: {
    src: String,
    alt: String
  },
  highlights: [String],
  colors: [{
    Pink: String,
    Black: String,
    White: String
  }],
  availableSizes: {
    type: [String],
    required: true
  }
});

const Tshirt = model('item', ItemSchema);
export default Tshirt;

