import { defineNuxtModule, addPlugin, createResolver, installModule } from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {
  css: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'alchemi-flash',
    configKey: 'alchemiFlash'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // It will add @nuxtjs/tailwindcss to the project
    await installModule('@nuxtjs/tailwindcss', {
      /**
       * Here, you specify where your config is.
       * By default, the module have a configPath relative
       * to the current path, ie the playground !
       * (or the app using your module)
       */
      cssPath: options.css ? resolver.resolve("./runtime/assets/css/tailwind.css") : false,
      configPath: resolver.resolve('../tailwind.config'),
    })
  }
})
