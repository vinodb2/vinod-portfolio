# DevOps Learning Guide for Angular Portfolio

This guide explains the DevOps files we've created and how to use them.

## 📋 What is DevOps?

DevOps combines **Development** + **Operations**. It automates building, testing, and deploying code.

---

## 📁 Files Created

### 1. **`.github/workflows/ci.yml`** - Continuous Integration
**What it does:**
- Runs automatically when you push code or create a pull request
- Installs dependencies
- Builds your Angular project
- Runs tests

**How to use:**
```bash
# Locally, do what GitHub Actions does:
npm install
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

**View results:** Go to your repo → Actions tab → See workflow runs

---

### 2. **`.github/workflows/deploy.yml`** - Continuous Deployment
**What it does:**
- Runs only when you push to `master` branch
- Builds your project
- Automatically deploys to GitHub Pages

**Enable GitHub Pages:**
1. Go to repo Settings → Pages
2. Select "Deploy from a branch"
3. Choose branch: `gh-pages` (created by workflow)

**Your site will be live at:** `https://vinodb2.github.io/vinod-portfolio/`

---

### 3. **`Dockerfile`** - Containerization
**What it does:**
- Creates a Docker image of your app
- Uses multi-stage build (smaller, faster)
- Serves with nginx web server

**How to use:**
```bash
# Build Docker image
docker build -t vinod-portfolio .

# Run container
docker run -p 8080:80 vinod-portfolio

# Visit: http://localhost:8080
```

---

### 4. **`docker-compose.yml`** - Easy Docker Setup
**What it does:**
- Simplifies running Docker containers

**How to use:**
```bash
# Start container
docker-compose up

# Stop container
docker-compose down
```

---

### 5. **`nginx.conf`** - Web Server Configuration
**What it does:**
- Configures nginx to serve your Angular app
- Enables gzip compression
- Sets up caching for faster loading
- Routes all requests to `index.html` (needed for Angular routing)

---

## 🚀 Getting Started

### Step 1: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Select `Deploy from a branch`
3. Select `gh-pages` branch (it's auto-created by our deploy workflow)

### Step 2: Create a Pull Request
1. GitHub Actions will automatically test your code
2. See results in the PR checks

### Step 3: Merge to Master
When you merge to `master`, deployment workflow runs automatically and deploys to GitHub Pages.

---

## 📊 GitHub Actions Workflow

```
Push to master
    ↓
Deploy workflow runs
    ↓
Builds Angular project
    ↓
Deploys to GitHub Pages
    ↓
Live at: https://vinodb2.github.io/vinod-portfolio/
```

---

## 🐳 Docker Workflow

```
docker build -t vinod-portfolio .
    ↓
Creates Docker image
    ↓
docker run -p 8080:80 vinod-portfolio
    ↓
Container runs on localhost:8080
```

---

## 🛠️ Commands Cheat Sheet

### Local Development
```bash
npm install        # Install dependencies
npm start         # Start dev server (http://localhost:4200)
npm run build     # Build for production
npm test          # Run unit tests
```

### Docker
```bash
docker build -t vinod-portfolio .              # Build image
docker run -p 8080:80 vinod-portfolio         # Run container
docker-compose up                               # Run with compose
docker-compose down                             # Stop container
```

### Git Workflow
```bash
git checkout -b feature/my-feature             # Create feature branch
git add .
git commit -m "feat: add my feature"           # Commit
git push origin feature/my-feature             # Push
# Create Pull Request on GitHub
# Once approved, merge to master
# GitHub Actions will auto-deploy!
```

---

## ✅ Next Steps

1. **Merge this `devops-setup` branch to `master`** via Pull Request
2. **Enable GitHub Pages** (Settings → Pages)
3. **Push changes** - GitHub Actions will automatically build and deploy
4. **Visit your live site** at `https://vinodb2.github.io/vinod-portfolio/`

---

## 📚 Learning Resources

- **GitHub Actions:** https://docs.github.com/en/actions
- **Docker:** https://docs.docker.com/
- **CI/CD Concepts:** https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment
- **Angular Deployment:** https://angular.io/guide/deployment

---

## ❓ Common Questions

**Q: What happens when I push to master?**
A: The deploy workflow automatically builds and deploys to GitHub Pages.

**Q: Can I test Docker locally?**
A: Yes! Run `docker-compose up` and visit `http://localhost:8080`

**Q: How do I see if the build passed?**
A: Go to Actions tab on GitHub to see all workflow runs.

**Q: What if the build fails?**
A: Check the Actions tab for error logs and fix the issue locally before pushing again.

---

Good luck with your DevOps journey! 🚀
