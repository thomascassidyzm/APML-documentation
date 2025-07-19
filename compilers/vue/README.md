# APML → Vue.js Compiler

Convert APML specifications to modern Vue.js applications.

## Download

- **Latest Version**: 1.0.0
- **Status**: Stable, production-ready
- **Download**: [apml-vue-compiler-1.0.0.zip](./downloads/apml-vue-compiler-1.0.0.zip)
- **Source Code**: [GitHub Repository](https://github.com/apml-org/apml-vue-compiler)

## Quick Start

```bash
# Install globally
npm install -g @apml/vue-compiler

# Compile APML to Vue.js
apml-vue my-app.apml ./my-vue-app

# Run the generated app
cd my-vue-app
npm install
npm run dev
```

## Features

- ✅ **TypeScript Support** - Generated code uses TypeScript
- ✅ **Vite Integration** - Modern build tooling  
- ✅ **Component Generation** - APML patterns → Vue components
- ✅ **Router Configuration** - Automatic routing setup
- ✅ **Responsive Design** - Mobile-first generated layouts
- ✅ **Production Ready** - Optimized builds for deployment

## Example

Input APML:
```apml
app TodoApp:
  title: "My Todo List"
  
  data Task:
    title: text required
    completed: boolean default false
    
  interface:
    show task_list:
      for each task in tasks:
        display task_item:
          title: task.title
          checkbox: task.completed
```

Generates a complete Vue.js application with:
- Reactive data management
- Component architecture  
- Responsive UI
- TypeScript definitions

## Documentation

- [Installation Guide](./docs/installation.md)
- [APML Syntax Reference](./docs/syntax.md)
- [Vue.js Integration](./docs/vue-integration.md)
- [Deployment Guide](./docs/deployment.md)
- [Examples Gallery](./examples/)

## Support

- [GitHub Issues](https://github.com/apml-org/apml-vue-compiler/issues)
- [Discord Community](https://discord.gg/apml)
- [Documentation](https://apml.dev/docs/vue-compiler)