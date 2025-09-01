pipeline {
    agent any   // läuft auf jedem Jenkins-Executor

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test --project=chromium'
            }
        }
    }
}
