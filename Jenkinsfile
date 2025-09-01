pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright install --with-deps'
                bat 'npx playwright test --project=chromium'
            }
        }
    }
}
