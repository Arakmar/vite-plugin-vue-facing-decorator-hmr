import {Plugin} from 'vite'

export default function vueToNative(): Plugin {
  return {
    name: 'vue-plugin-to-native',
    // This module needs to be applied after Vue so let's force it
    enforce: 'post',
    transform(code: string, id: string) {
      if (
        id.includes('.vue')
        && !id.includes('type=style')
        && !code.includes("toNative")
        && code.match(/class.*extends Vue/)
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
