import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1>📘 The Code Magazine</h1>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/Challenges">Challenges</Link>
          <Link to="/">Flexbox</Link>
          <Link to="/">CSS Grid</Link>
        </nav>
      </header>
      <article>
        <header className="post_header">
          <h2>The Basic Language of the Web: HTML</h2>
          <img src="/img/laura-jones.jpg" alt="" width={50} height={50} />
          <p className="author">Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027</p>
          <img src="/img/post-img.jpg" alt="HTML code on a screen" width={500} height={200} />
        </header>
        <p>
          All modern websites and web applications are built using three <em>fundamental</em> technologies: HTML, CSS and JavaScript. These are the languages of the web.
        </p>
        <p>
          In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.
        </p>
        <h3>What is HTML?</h3>
        <p>
          HTML stands for <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language).
        </p>
        <p>
          HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites.
        </p>
        <p>
          In HTML, each element is made up of 3 parts:
        </p>
        <ol>
          <li>The opening tag</li>
          <li>The closing tag</li>
          <li>The actual element</li>
        </ol>
        <p>You can learn more at <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Web Docs.</Link></p>
        <h3>Why should you learn HTML?</h3>
        <ul>
          <li>To be able to use the fundamental web dev language</li>
          <li>To hand-craft beautiful websites instead of relying on tools like Worpress or Wix</li>
          <li>To build web applications</li>
          <li>To impress friends</li>
          <li>To have fun 😃</li>
        </ul>
        <p>Hopefully you learned something new here. See you next time!</p>
      </article>
      <aside>
        <h4>Related posts</h4>
        <ul>
          <li>
            <img src="/img/related-1.jpg" alt="Like" width={75} height={75} />
            <Link to='/'>How to Learn Web Development</Link>
            <p>By Jonas Schmedtmann</p>
          </li>
          <li>
            <img src="/img/related-2.jpg" alt="Like" width={75} height={75} />
            <Link to='/'>The Unknown Powers of CSS</Link>
            <p>By Jim Dillon</p>
          </li>
          <li>
            <img src="/img/related-3.jpg" alt="Like" width={75} height={75} />
            <Link to='/'>Why JavaScript is Awesome</Link>
            <p>By Matilda</p>
          </li>
        </ul>
      </aside>
      <footer>Copyright © 2027 by The Code Magazine.</footer>
      <button className="article_button">Like <span className="">♥</span></button>
    </div>
  );
}

export default App;
