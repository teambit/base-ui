[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https://api.bit.dev/scope/bit/base-ui?UseCache=1)](https://bit.dev/bit/base-ui)
<a href="https://opensource.org/licenses/Apache-2.0"><img alt="apache" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
<a href="https://github.com/teambit/example-templates/blob/master/README.md#contributing"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>

# Base component design system of Bit.dev

The [reusable set of infra-level React components](https://bit.dev/bit/base-ui)
 used to build [Bit.dev](https://bit.dev).

![screenshot](./docs/scope-screenshot.png)


## Components

All components in this frontend codebase were [contained and exposed using Bit](https://github.com/teambit/bit) as a set of independently-usable components. See the **[base collection on bit.dev](https://bit.dev/teambit/base-ui)** to explore and integrate any component into your project.

- Install independent components with npm/yarn.
- Use `bit import` to source and edit components locally for quick editing and integration.
- Try any component hands-on in a live playground.


## This is a component-based micro-frontend

Wait.. what?

- Install independent components with `bbit install`
- Use `bbit import` to explore components in your local workspace and modify them to your own needs.
- Try any component hands-on in the docs' live playground and in the 'compositions' page.

### Show me an example!

Take a look at the [bit.dev homepage](https://bit.dev/).  

You will notice that it's built from components that live in different front-end codebases:

- ["Evangelist" marketing components](https://github.com/teambit/evangelist).
- [base-ui components](https://github.com/teambit/base-ui).
- Container application (private).
- etc

We use [Bit](https://github.com/teambit/bit) to contain and expose components from any codebase as a set of APIs in [bit.dev](https://bit.dev) that can be integrated into different pages and applications. For example:

- Exposed ["Evangelist" marketing components] on bit.dev.
- Exposed [base-ui components on bit.dev](https://bit.dev/teambit/base-ui).


## Structure:

### Theme
All shared styles, colors, sizes, fonts, and css variables, belong here.  
[Theme-provider](https://bit.dev/teambit/base-ui/theme/theme-provider) applies all of these styles at the root of your app, and different apps may implement their own unique theme.

### Constants
Hard coded singleton values, like storage-url and enums. In case of change, this central location could update all other components.

### Layout
Components controlling the position of elements in the document. (Grid, breakpoints, etc)

### Atoms
Generic building blocks for any front end application.  
These components are 'vanilla', meaning they should not contain content (like texts or icons) and no specific styles. This is because different designs could look entirely different, so any styles in the base component could lead to a 'CSS Specificity War'. So, add the bare minimum of css here and keep these components purely logical!

### Utils
Pure logic components and helpers. (no visual components)

## Setup
1. Install Bit: `npm install @teambit/bit --global`
2. Clone this Bit Workspace: `git clone https://github.com/teambit/evangelist.git evangelist`
3. Go to the workspace directory: `cd evangelist`
4. Install all packages and import all components: `bbit install` 
5. Run the Workspace UI to explore the Evangalist components: `bbit start` and go to https://localhost:3000
6. Enjoy!
