# 🎓 College Event Portal - DevSecOps Edition

This project demonstrates a secure, automated deployment pipeline for a Node.js application. It integrates cloud hosting on Azure with a complete "Secure SDLC" (Software Development Life Cycle) using GitHub Actions.

## 🚀 Live Links
- **Production URL:** [https://college-portal-final-123.azurewebsites.net/](https://college-portal-final-123-h0hkfkdbhncyffcz.centralindia-01.azurewebsites.net)
- **Health Dashboard:** [https://college-portal-final-123.azurewebsites.net/health](https://college-portal-final-123-h0hkfkdbhncyffcz.centralindia-01.azurewebsites.net/health)

---

## 🛠️ Task 1: Deployment & Continuous Monitoring
The application is hosted on **Azure App Service**. To ensure high availability and security, I implemented automated monitoring:

* **Health API:** A custom-built, dark-themed dashboard that provides real-time status updates and environment metadata.
* **Azure Metric Alerts:**
    * **High_Error_Alert:** Triggers if HTTP 4xx errors exceed 5 within a 1-minute window (detects broken links or unauthorized access attempts).
    * **High_Latency_Alert:** Triggers if the average response time exceeds 5 seconds (detects performance degradation or DDoS attempts).

---

## 🛡️ Task 2: Secure the Repo (The Security Gate)
I implemented a multi-stage CI/CD pipeline in GitHub Actions to stop insecure code from ever reaching the production server.

### 1. Secret Scanning (Gitleaks)
The pipeline uses **Gitleaks** to scan every commit. If a developer accidentally pushes an API key, Token, or Password, the build is immediately killed.
* **Proof of Concept:** Successfully blocked a commit containing a dummy Slack token.

### 2. Dependency Audit (npm audit)
Automated scanning of the `package-lock.json` file to identify and block the use of libraries with known vulnerabilities.

### 3. Fail → Fix → Pass Workflow
The pipeline follows a strict security sequence:
1.  **Scan:** Check for secrets and vulnerabilities.
2.  **Build:** Compile and package the Node.js application.
3.  **Deploy:** Securely push to Azure using SCM authentication.



---

## 📂 Project Structure
* `server.js`: Main application logic and Health Dashboard.
* `package.json`: Project dependencies and start scripts.
* `.github/workflows/`: YAML configuration for the DevSecOps pipeline.
* `screenshots/`: Visual evidence of alerts and security gate failures.

---

## 🏁 Summary of DevSecOps Tools Used
| Layer | Tool | Purpose |
| :--- | :--- | :--- |
| **CI/CD** | GitHub Actions | Automated Pipeline |
| **Secret Scanning** | Gitleaks | Prevent Data Leaks |
| **SCA** | npm audit | Dependency Security |
| **Monitoring** | Azure Monitor | Real-time Performance/Security Alerts |
| **PaaS** | Azure App Service | Secure Cloud Hosting |
