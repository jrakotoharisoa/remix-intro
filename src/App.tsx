import { Deck, Heading } from 'spectacle';
import remixLogo from './images/remix-logo.svg';
import { FrontEnd } from './slides/FrontEnd';
import { Myself } from './slides/Myself';
import { RemixPresentation } from './slides/RemixPresentation';
import { RemixProjectStructure } from './slides/RemixProjectStrucutre';
import { RemixQuote } from './slides/RemixQuote';
import { RemixStartProject } from './slides/RemixStartProject';
import { RemixSummary } from './slides/RemixSummary';
import { RoutesAPI } from './slides/RouteAPI';
import { theme } from './theme/config';
import { CenteredSlide } from './theme/Slide';
import { Template } from './theme/Template';

const App = () => {
  return (
    <Deck
      theme={theme}
      template={<Template />}
      transition={{
        from: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
        },
        leave: {
          opacity: 0,
        },
      }}
    >
      <CenteredSlide>
        <div>
          <img width="800" src={remixLogo} alt="remix logo" />
        </div>
        <Heading>Introduction</Heading>
      </CenteredSlide>
      <RemixPresentation />
      <Myself /> {/* TODO: talk about comet */}
      <RemixQuote />
      <RemixStartProject />
      <RemixProjectStructure />
      <RoutesAPI />
      <FrontEnd />
      <RemixSummary />
    </Deck>
  );
};
export default App;

// Web Fundamentals, Modern UX
// So how exactly is Remix different from other frameworks? Instead of focusing on static sites, Remix starts with first principles like HTTP status codes and methods, HTTP caching, HTML prefetching of data, CSS, and other resources, the web fetch API, server rendering of pages with appropriate <meta> information for SEO, and much more. Our cache is the HTTP cache. Our "not found" pages are served with a 404. Our data mutations story is built around HTML <form>s. Progressive enhancement is a viable strategy. Many Remix sites don't even need JavaScript to work by simply letting the browser handle the UX.

// To put it simply: Remix is built on a solid foundation of web fundamentals.

// But we think you should be able to add modern UX flair to your web apps and speed up the UX with JavaScript, so we've got you covered there too! Remix fully embraces the best parts about the modern web stack including client-side routing and rendering, optimistic UIs, seamless transitions between pages with resource prefetching and dynamic loading of code and data. Remix pairs these techniques with the concept of nested routing in React Router to build sites that maximize network efficiency and load instantly. Some of the most impressive web sites around today are built with React Router, and Remix is going to allow even more people to build similarly solid, incredible user experiences.

// In addition to a best-in-class front-end stack, Remix provides a server story with zero vendor lock-in. The Remix server runs seamlessly on AWS, Google Cloud, Netlify, Vercel, and even non-Node.js environments like Cloudflare Workers. Want to run Remix as part of a larger Python, PHP, or Rails app hosted on EC2? No problem. Want to deploy your app at the edge and use Cloudflare Workers KV Storage or Durable Objects? You can do that too. Remix fits into your existing architecture.

// We'll say a LOT more about Remix very soon. For now, just know that the future of Remix is secure and OPEN!
