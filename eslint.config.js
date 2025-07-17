import  eslintPluginAstro  from  'eslint-plugin-astro' ; 
import { defineConfig, globalIgnores } from 'eslint/config';
export  default  [ 
  // agregue aquí conjuntos de reglas más genéricos, como: 
  // js.configs.recommended, 
  ... eslintPluginAstro . configs . recommended , 
  { 
    rules : { 
      // anule/agregue configuraciones de reglas aquí, como: 
      // "astro/no-set-html-directive": "error" 
      "comma-dangle": ['error', 'always-multiline'],
    }, 
  } ,
  globalIgnores(['.netlify', 'node_modules', 'dist', 'build', 'coverage', 'out', 'public'] )
] ;