const e = require('express');
const config = require('./botconfig/config.json');
const port = config.port;
const s=e();s.all('/', (req, res)=>{res.setHeader('Content-Type', 'text/html', 'text/css'); res.send(`

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Corgi - a Discord Bot</title>
    <link rel="stylesheet" href="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/css/bulma.min.css" />
    <link rel="stylesheet" href="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/css/style.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tippy.js@6/animations/scale.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <script src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/js/jquery-3.6.0.js"></script>
  </head>
  <body>
    <!-- Back To Top Start -->
    <a id="backtotop" data-tippy-content="Back To Top.">
      <i class="fa-solid fa-angle-up has-text-white fa-2xl mt-5"></i>
    </a>
    <!-- Back To Top End -->

    <!-- Navbar Start -->
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand mt-2 mb-2">
        <a class="navbar-item" href="#">
          <strong>Corgi</strong>

          <!-- or if you want to use image -->
          <!-- <img
            src="image link or path"
            width="112"
            height="28"
          /> -->
        </a>

        <a
          role="button"
          class="navbar-burger has-text-white"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item is-tab">
            Home
          </a>

          <a href="#features" class="navbar-item is-tab">
            Features
          </a>

          <a href="#stats" class="navbar-item is-tab">
            Stats
          </a>

          <a href="#" class="navbar-item is-tab">
            Docs
          </a>
        </div>

        <div class="navbar-end">
          <a href="#" class="navbar-item is-tab" target="_blank">
            <i class="fa-brands fa-discord"></i>
          </a>

          <a href="#" class="navbar-item is-tab" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>

          <div class="navbar-item">
            <div class="buttons">
              <a href="http://localhost:8080/web/index.html/callback" class="button is-blurple">
                <strong
                  ><i class="fa-solid fa-right-to-bracket mr-2"></i>
                  Login</strong
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <!-- Hero Section Start -->
    <section class="hero bg-base is-fullheight">
      <div class="hero-body">
        <div class="">
          <div class="columns">
            <div class="column mr-6 mt-12" data-aos="fade-up">
              <p class="title has-text-white has-text-weight-bold">
                Time to add Corgi to your server.
              </p>
              <p class="subtitle has-text-grey-light is-size-6 mt-3">
                Text
                Text
              </p>
              <div class="buttons">
                <a href="https://discord.com/api/oauth2/authorize?client_id=1025485488171274341&permissions=8&scope=bot%20applications.commands" class="button is-info">
                  <strong>Add To Discord</strong>
                </a>

                </a>
              </div>
            </div>
            <div class="column mt-6" data-aos="fade-left">
              <img
                class="image has-image-centered vert-move mt-4"
                src="https://media.discordapp.net/attachments/945088466625114202/1009395323329859614/image-removebg-preview.png"//assets/img/relaunch_day.svg
                alt="hero image"
                style="width: 20rem;"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered" data-tippy-content="Scroll Down">
        <a href="#features"
          ><i
            class="fa-solid fa-circle-chevron-down fa-lg vert-move2 has-text-white"
          ></i
        ></a>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Hero Waves Start -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1a2634"
        fill-opacity="1"
        d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
      ></path>
    </svg>
    <!-- Hero Waves End -->

    <!-- Features Section Start -->
    <section id="features" class="section mt-6">
      <div class="has-text-centered">
        <h1 class="title lined">Features</h1>
        <div class="line line-center blurple"></div>
      </div>

      <!-- single feature start (Left) -->
      <div class="single-feature">
        <div class="shape-right" data-aos="fade-up-left">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9AAAE3"
              d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,56.6,20.8C55.8,33.7,50.1,47.4,39.9,53.8C29.6,60.1,14.8,59.1,0.4,58.5C-14,58,-28,57.9,-38,51.5C-48.1,45,-54.3,32.3,-61.3,18.1C-68.4,4,-76.4,-11.7,-71.9,-22.7C-67.4,-33.6,-50.4,-39.8,-36.3,-47.9C-22.2,-56.1,-11.1,-66.3,3.1,-70.5C17.2,-74.7,34.5,-72.9,42.7,-62.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div class="columns mt-6">
          <div class="column mr-6">
            <h4 class="title">Feature <span class="blurple">#1</span></h4>
            <p class="subtitle mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="column" data-aos="fade-left">
            <img
              class="image has-image-centered"
              src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/img/features_overview.svg"
              alt="feature1 img"
              style="width: 20rem;"
            />
          </div>
        </div>
      </div>
      <!-- single feature end (Left) -->

      <!-- single feature start (Right) -->
      <div class="single-feature">
        <div class="shape-left" data-aos="fade-up-right">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9AAAE3"
              d="M54.2,-67.2C69.4,-63.5,80.4,-46.6,84.6,-28.7C88.7,-10.8,86,8.1,76.8,21.4C67.6,34.7,51.9,42.3,38.1,50.3C24.2,58.3,12.1,66.7,-2.8,70.5C-17.7,74.3,-35.3,73.6,-45.6,64.5C-55.9,55.3,-58.8,37.7,-63.3,21.2C-67.7,4.7,-73.7,-10.6,-71.8,-25.4C-69.8,-40.2,-59.9,-54.5,-46.6,-58.9C-33.3,-63.2,-16.7,-57.6,1.4,-59.6C19.5,-61.5,39,-71,54.2,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div class="columns mt-6">
          <div class="column" data-aos="fade-right">
            <img
              class="image has-image-centered"
              src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/img/product_literation.svg"
              alt="feature1 img"
              style="width: 20rem;"
            />
          </div>
          <div class="column">
            <h4 class="title">
              Feature <span class="has-text-primary">#2</span>
            </h4>
            <p class="subtitle mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <!-- single feature end (Right) -->

      <!-- single feature start (Left) -->
      <div class="single-feature">
        <div class="shape-right" data-aos="fade-up-left">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9AAAE3"
              d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,56.6,20.8C55.8,33.7,50.1,47.4,39.9,53.8C29.6,60.1,14.8,59.1,0.4,58.5C-14,58,-28,57.9,-38,51.5C-48.1,45,-54.3,32.3,-61.3,18.1C-68.4,4,-76.4,-11.7,-71.9,-22.7C-67.4,-33.6,-50.4,-39.8,-36.3,-47.9C-22.2,-56.1,-11.1,-66.3,3.1,-70.5C17.2,-74.7,34.5,-72.9,42.7,-62.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div class="columns mt-6">
          <div class="column mr-6">
            <h4 class="title">
              Feature <span class="has-text-warning">#3</span>
            </h4>
            <p class="subtitle mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="column" data-aos="fade-left">
            <img
              class="image has-image-centered"
              src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/img/feeling_happy.svg"
              alt="feature1 img"
              style="width: 20rem;"
            />
          </div>
        </div>
      </div>
      <!-- single feature end (Left) -->

      <!-- single feature start (Right) -->
      <div class="single-feature">
        <div class="shape-left" data-aos="fade-up-right">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9AAAE3"
              d="M54.2,-67.2C69.4,-63.5,80.4,-46.6,84.6,-28.7C88.7,-10.8,86,8.1,76.8,21.4C67.6,34.7,51.9,42.3,38.1,50.3C24.2,58.3,12.1,66.7,-2.8,70.5C-17.7,74.3,-35.3,73.6,-45.6,64.5C-55.9,55.3,-58.8,37.7,-63.3,21.2C-67.7,4.7,-73.7,-10.6,-71.8,-25.4C-69.8,-40.2,-59.9,-54.5,-46.6,-58.9C-33.3,-63.2,-16.7,-57.6,1.4,-59.6C19.5,-61.5,39,-71,54.2,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div class="columns mt-6">
          <div class="column" data-aos="fade-right">
            <img
              class="image has-image-centered"
              src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/img/music.svg"
              alt="feature1 img"
              style="width: 20rem;"
            />
          </div>
          <div class="column">
            <h4 class="title">Feature <span class="has-text-info">#4</span></h4>
            <p class="subtitle mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <!-- single feature end (Right) -->
    </section>
    <!-- Features Section End -->

    <!-- Stats Section Start -->
    <section id="stats" class="section mt-6">
      <div class="has-text-centered">
        <h1 class="title lined">Stats</h1>
        <div class="line line-center blurple"></div>
      </div>

      <div class="columns mt-6">
        <div class="column has-text-centered">
          <p class="title has-text-weight-bold lined">000</p>
          <span class="subtitle has-text-weight-bold blurple"><i class="fa-solid fa-server"></i> Servers</span>
        </div>

        <div class="column has-text-centered">
          <p class="title has-text-weight-bold lined">000</p>
          <span class="subtitle has-text-weight-bold blurple"><i class="fa-solid fa-terminal"></i> Commands</span>
        </div>

        <div class="column has-text-centered">
          <p class="title has-text-weight-bold lined">000</p>
          <span class="subtitle has-text-weight-bold blurple"><i class="fa-solid fa-users"></i> Users</span>
        </div>
      </div>
    </section>
    <!-- Stats Section End -->

    <!-- Invite Section Start -->
    <section class="section mt-6">
      <div class="columns">
        <div class="column has-text-left">
          <p class="title has-text-weight-bold">
            Ready to try <span class="blurple">Corgi</span>?
          </p>
          <p class="subtitle mt-3 has-text-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" class="button is-blurple is-medium"
            ><strong><i class="fa-solid fa-book"></i> Get Started</strong></a
          >
        </div>

        <div class="column"></div>
      </div>
    </section>
    <!-- Invite Section End -->

    <!-- Footer Section Start -->
    <footer class="footer bg-base">
      <div class="content has-text-centered has-text-white">
        <div class="mb-2">
          <a href="#" class="has-text-white" target="_blank">
            <i class="fa-brands fa-discord"></i>
          </a>
          &nbsp; &nbsp;
          <a href="#" class="has-text-white" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>

        <p>
          <span class="has-text-weight-bold">Corgi</span>
          <br />
          &copy; <span id="cp-year"></span> Copyright [Bot Owner]. All Rights
          Reserved.
        </p>

        <p style="letter-spacing: 0.1em;" class="is-uppercase">
          Website Designed By
          <a
            href="https://jstnlt.my.id"
            class="blurple has-text-weight-bold"
            target="_blank"
            >JstnLT</a
          >.
        </p>
      </div>
    </footer>
    <!-- Footer Section End -->

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="file://C:/Users/SynX6/Documents/GitHub/new corgi/corgi-new - Copy/web/assets/js/script.js"></script>
  </body>
</html>
`); 
res.end();});function k(){s.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`.bgWhite.blue)});}module.exports=k;
