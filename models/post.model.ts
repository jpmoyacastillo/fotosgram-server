import { Schema, Document, model, SchemaType } from "mongoose";

const postSchema = new Schema({
  created: {
    type: Date,
  },
  mensaje: {
    type: String,
  },
  img: [
    {
      type: String,
    },
  ],
  coords: {
    type: String, //-13.31541, 12.315455
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: [true, "Debe de existir una referencia a un usuario"],
  },
});

postSchema.pre<IPost>("save", function (next) {
  this.created = new Date();
  next();
});

interface IPost extends Document {
  created: Date;
  mensaje: string;
  img: string[];
  coords: string;
  usuario: string;
}

export const Post = model<IPost>("Post", postSchema);
