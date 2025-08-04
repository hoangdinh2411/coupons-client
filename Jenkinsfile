pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/hoangdinh2411/coupons-client.git'
            }
        }
        stage('Copy .env file') {
            steps {
                configFileProvider([configFile(fileId: 'coupons-client-env', targetLocation: '.env')]) {
                    sh 'ls -la && cat .env' 
                }
            }
        }
        stage('Build and Restart Docker Containers') {
            steps {
                script {
                    sh '''
                    docker-compose down
                    docker-compose up --build -d
                    '''
                }
            }
        }
    }
}
