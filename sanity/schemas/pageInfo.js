import { type } from "os";

export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "backgroundInformation",
      title: "Background Information",
      type:"text"
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name:"role",
      title:"Role",
      type:"string"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }]
    }
  ],
}
