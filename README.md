# Full Stack MERN Single Page App using Api <a href="https://gnews.io/">GNews</a>

<img src="./newsimg.JPG">
 
# <a href="https://github.com/osamaalpha/React-Project-News-Backend">Backend repo</a>

<h4>The SPA with 6 pages (routes):<h4>

<ul>
<li>A Homepage to ask Signin to the application,</li>
<li>Login page for users to authenticated in the app to access private pages,</li>
<li>Register page for users to register to be able to use the app,</li>
<li>Global News Page with a submit form to search global news</li>
<li>Local News Page with a submit form to search news by his country</li>
<li>Categories Page with a submit form to search news by collection of categories<</li>
</ul>

<h4>Most of the web was styled by <a href="https://material-ui.com/"></a></h4>

## Demo The web is hosted by heroku(Backend) , Netlify(Frontend)

<h3><a href="https://eloquent-kirch-114c4b.netlify.app/">News</a></h3>

### Directory Layout and Tree

```
.                         # Front end part of application
├── package.json
├── package-lock.json
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── netlify.toml
├── newsimg.JPG
└── src
| ├── App.css
| ├── App.js
| ├── App.test.js
| ├── index.css
| ├── index.js
| ├── reportWebVitals.js
| ├── components
| | ├── Cards.js
| | ├── category.js
| | ├── GlobalNews
| | ├── home.js
| | ├── LocalNews.js
| | ├── nav.js
| | ├── PrivatePage.js
| | ├── renderArticle
| | ├── signIn.js
| | ├── SignInButton.js
| | ├── signUp.js
| | └── SlideShow.js
| ├── context
| | └── context.js
| ├── helpers
| | ├── handleDelete.js
| | ├── handleSubmit.js
| | ├── useAllUserKeys.js
| | ├── usefetchApi.js
| | ├── usefetchApiUserKey.js
| | └── userFavoriteKeys.js
| ├── img
| | ├── category.jpeg
| | ├── economic.jpg
| | ├── global.jpeg
| | ├── newlocal2.jpeg
| | ├── politics.jpg
| | └── sport.jpeg
| └── setupTests.js
└── README.md
```

# Application

 <h4>ES6 +Features</h4>

<ul>
<li>Arrow Functions</li>
<li>Destructuring Assignment</li>
<li>Block-Scoped Variables Let and Const</li>
<li>async await with try/catch</li>
<li>Spread operator</li>
<li>Modules export/import</li>
</ul>

# Flow

```
 App
│ │
│ ├── Home
│ │
│ ├── signIn
│ │
│ ├── signUp
│ │
│ ├── GlobalNews
│ │
│ ├── LocalNews
│ │
│ └── Category

```

# Note Max requests 10 per day for the Api
