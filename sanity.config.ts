import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "2eij7spq",
    dataset: "production",
    title: "My Personal Site",
    apiVersion: "2023-05-05",
    basepath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;