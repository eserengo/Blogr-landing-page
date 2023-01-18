export const data = [
  {
    tag: 'header',
    class: `header center rel`,
    content: 
`
<i class="fa fa-bars right mobile selectable" id="openBtn"></i>
<i class="fa fa-close right selectable hidden" id="closeBtn"></i>
<nav class="nav desktop rel">
  <ul class="nav-primary flex-row selectable abs">
    <li class="product">
      <ul>Product 
      <i class="fa fa-chevron-down"></i>
      <i class="fa fa-chevron-up hidden"></i>
        <li class="hidden">Overview</li>
        <li class="hidden">Pricing</li>
        <li class="hidden">Marketplace</li>
        <li class="hidden">Features</li>
        <li class="hidden">Integrations</li>
      </ul>
    </li>
    <li class="company">
      <ul>Company
      <i class="fa fa-chevron-down"></i>
      <i class="fa fa-chevron-up hidden"></i>
        <li class="hidden">About</li>
        <li class="hidden">Team</li>
        <li class="hidden">Blog</li>
        <li class="hidden">Careers</li>
      </ul>
    </li>
    <li class="connect">
      <ul>Connect
      <i class="fa fa-chevron-down"></i>
      <i class="fa fa-chevron-up hidden"></i>
        <li class="hidden">Contact</li>
        <li class="hidden">Newsletter</li>
        <li class="hidden">LinkedIn</li>
      </ul>
    </li>
  </ul>
  <ul class="nav-secondary flex-row selectable abs">
    <li>Login</li>
    <li><button class="button primary selectable">Sign Up</button></li>
  </ul>
</nav>
<h1 class="center">A modern publishing platform</h1>
<h2 class="center">Grow your audience and build your online brand</h2>
<button class="button primary selectable">Start for Free</button>
<button class="button secondary selectable">Learn More</button>`,
  },
  {
    tag: 'main',
    class: 'main',
    content: 
`<section class="section-1 center rel">
  <h3>Designed for the future</h3>
  <h4>Introducing an extensible editor</h4>
  <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
  <h4>Robust content management</h4>
  <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
</section>
<section class="section-2 center rel">
  <h3>State of the Art Infrastructure</h3>
  <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
</section>
<section class="section-3 center rel">
  <h4>Free, open, simple</h4>
  <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
  <h4>Powerful tooling</h4>
  <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.</p>
</section>
`
  },
  {
    tag: 'footer',
    class: `footer rel`,
    content:
`
<ul class="foot-list selectable">
  <li>
    <ul><b>Product</b>
      <li>Overview</li>
      <li>Pricing</li>
      <li>Marketplace</li>
      <li>Features</li>
      <li>Integrations</li>
    </ul>
  </li>
  <li>
    <ul><b>Company</b>
      <li>About</li>
      <li>Team</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
  </li>
  <li>
    <ul><b>Connect</b>
      <li>Contact</li>
      <li>Newsletter</li>
      <li>LinkedIn</li>
    </ul>
  </li>
</ul>
<div class="attribution center rel">
  Challenge by <a class="anchor" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
  Coded by <a class="anchor" href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.
</div>
`
  },
];

export const modal = [
  {
    tag: 'div',
    class: 'modal center',
    content:
`
<nav>
  <ul class="flex-col selectable">
    <li class="product">
      <ul><b>Product</b>
      <i class="fa fa-chevron-down selectable modalFa"></i>
      <i class="fa fa-chevron-up selectable hidden modalFa"></i>
        <li class="hidden">Overview</li>
        <li class="hidden">Pricing</li>
        <li class="hidden">Marketplace</li>
        <li class="hidden">Features</li>
        <li class="hidden">Integrations</li>
      </ul>
    </li>
    <li class="company">
      <ul><b>Company</b>
      <i class="fa fa-chevron-down selectable modalFa"></i>
      <i class="fa fa-chevron-up selectable hidden modalFa"></i>
        <li class="hidden">About</li>
        <li class="hidden">Team</li>
        <li class="hidden">Blog</li>
        <li class="hidden">Careers</li>
      </ul>
    </li>
    <li class="connect">
      <ul><b>Connect</b>
      <i class="fa fa-chevron-down selectable modalFa"></i>
      <i class="fa fa-chevron-up selectable hidden modalFa"></i>
        <li class="hidden">Contact</li>
        <li class="hidden">Newsletter</li>
        <li class="hidden">LinkedIn</li>
      </ul>
    </li>
  </ul>
  <hr>
  <ul class="flex-col selectable">
    <li><b>Login</b></li>
    <li><button class="button modalBtn selectable">Sign Up</button></li>
  </ul>
</nav>`,
  },
];