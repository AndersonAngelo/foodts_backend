import { model, Schema } from 'mongoose';


const schema = new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Products',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
})

export const Order = model('Order', schema )