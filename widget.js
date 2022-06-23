export default {
  name: "weavemail",
  dialog: {
    address: { type: "string", label: "weave mail address" }
  },
  // template will use `mustache` template language
  template: `
<a href="https://weavemail.app?address={{address}}">Message</a>  
`,
  code: {
    preDialog,
    postDialog,
    preRender
  }

}

// should be pure functions

// preDialog generate defaults 
function preDialog(profile) {
  return { address: profile.address }
}

// postDialog transform data or validate data
function postDialog(data) {
  return data
}

// preRender
// transform function to inject additional markdown
function (markdown) {
  return markdown
}


