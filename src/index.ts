import {Plugin} from 'vite'

export default function vueToNative(): Plugin {
  return {
    name: 'vue-plugin-to-native',
    transform(code: string, id: string) {
      if (
        id.match(/\.vue\?.*type=script/)
        && !code.includes("toNative")
      ) {
        const vueFacingImport = '\nimport {toNative} from "vue-facing-decorator";\n';
        return {
          map: null,
          code: vueFacingImport + code.replace(
                  /const _sfc_main = ([A-Za-z]*);/ig,
                  'const _sfc_main = toNative($1);'
          )
        }
      }
    }
  }
}
