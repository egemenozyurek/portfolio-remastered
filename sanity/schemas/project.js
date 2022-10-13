import { type } from "os";

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Name",
      description: "string",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "Summary",
      title: "PhoneNumber",
      type: "text",
    },
    {
      name: "technologie",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }]
    }
  ],
}
