// vite.config.js
import { defineConfig } from "file:///E:/My%20Completed%20Project/Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///E:/My%20Completed%20Project/Portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    // Optimize build for production
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "framer-motion": ["framer-motion"]
        }
      }
    }
  },
  // Ensure public folder is copied to dist
  publicDir: "public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxNeSBDb21wbGV0ZWQgUHJvamVjdFxcXFxQb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXE15IENvbXBsZXRlZCBQcm9qZWN0XFxcXFBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovTXklMjBDb21wbGV0ZWQlMjBQcm9qZWN0L1BvcnRmb2xpby92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvLyBPcHRpbWl6ZSBidWlsZCBmb3IgcHJvZHVjdGlvblxyXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcclxuICAgICAgICAgICdmcmFtZXItbW90aW9uJzogWydmcmFtZXItbW90aW9uJ10sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBFbnN1cmUgcHVibGljIGZvbGRlciBpcyBjb3BpZWQgdG8gZGlzdFxyXG4gIHB1YmxpY0RpcjogJ3B1YmxpYydcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUixTQUFTLG9CQUFvQjtBQUM1VCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osZ0JBQWdCLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLFVBQ3pELGlCQUFpQixDQUFDLGVBQWU7QUFBQSxRQUNuQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxXQUFXO0FBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
