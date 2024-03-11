A Vite plugin fixing HMR support for Vue components using vue-facing-decorator without using the recommended toNative method.

## How to use it
```javascript
// vite.config.js
import vueFacingDecoratorHmr from "vite-plugin-vue-facing-decorator-hmr";

export default {
  plugins: [vueFacingDecoratorHmr()]
}
```

## Some context : 
The vue-facing-decorator library recommends to call this method on every Vue components :
```javascript
@Component
export class MyComp extends Vue{}
export default toNative(MyComp)
```

Not doing that will break Vite HMR on every Vue components.

But, using toNative totally breaks some IDE (WebStorm : https://youtrack.jetbrains.com/issue/WEB-64939/Vue-3-vue-facing-decorator-toNative).

This plugin allows you to not declare toNative() in your Vue component to keep good IDE support but to still enjoy Vite HMR.

Under the hood, it's adding toNative() automatically during the Vite build process.

## License

MIT License © 2024 [Arakmar](https://github.com/Arakmar)
