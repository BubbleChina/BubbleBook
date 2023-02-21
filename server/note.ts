import Koa from "koa"
import Router from "koa-router"
import { Schema, model, connect } from "mongoose"

// 1. Create an interface representing a document in MongoDB.
interface Note {
  username: string
  title: string
  content?: string
  date: string
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<Note>({
  username: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: false },
  date: { type: String, required: true },
})

// 3. Create a Model.
const Note = model<Note>("Note", userSchema)

export async function getNote(
  ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>,
  next: Koa.Next
) {}

export async function addNote(
  ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>,
  next: Koa.Next
) {
  // 4. Connect to MongoDB
  await connect("mongodb://127.0.0.1:27017/test")

  const user = new Note({
    name: "Bill",
    email: "bill@initech.com",
    avatar: "https://i.imgur.com/dM7Thhn.png",
  })
  await user.save()
  await next()
}

export async function patchNote(
  ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>,
  next: Koa.Next
) {}

export async function deleteNote(
  ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>,
  next: Koa.Next
) {}
